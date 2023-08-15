import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import NaverLogin from './NaverLogin';



const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
console.log('Failed:', errorInfo);
};



const Login = () => {
    return (
        <div className='Login' style={{width:'100%',  marginTop:100}}>
           <div className='login-title'>
                <p style={{textAlign:'center',fontSize:14, marginBottom:14}}>ACCESS YOUR ACCOUNT</p>
                <h2 style={{textAlign:'center', fontSize:64, margin:0}}>LOGIN</h2>
           </div>

            <Form
            name="basic"
            labelCol={{
            span: 5,
            }}
            wrapperCol={{
            span: 14,
            }}
            style={{
            maxWidth: 600,
            margin:'0 auto',
            padding:'30px 0'
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
                <Form.Item
                label="ID"
                name="ID"
                rules={[
                    {
                    required: true,
                    message: 'ID를 입력해주세요',
                    },
                ]}
                >
                    <Input  style={{border:'none', borderBottom:'1px solid #000', borderRadius:0}}/>
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: '비밀번호를 입력해주세요',
                    },
                ]}
                >
                    <Input.Password style={{border:'none', borderBottom:'1px solid #000', borderRadius:0}}/>
                </Form.Item>

                <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 10,
                    span: 16,
                }}
                >
                    <Checkbox>기억하기</Checkbox>
                </Form.Item>

                <Form.Item
                wrapperCol={{
                    offset: 10,
                    span: 16,
                }}
                >
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>        
            <p style={{textAlign:'center'}}>간편로그인</p>
            <NaverLogin />
        </div>
    );
};

export default Login;