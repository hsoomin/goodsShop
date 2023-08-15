import React, { useState } from "react"
import {AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, Row, Select} from "antd"

const { Option } = Select
const residences = [
   {
      value: "경기도",
      label: "경기도",
      children: [
         {
            value: "수원시",
            label: "수원시",
            children: [
               {
                  value: "영통구",
                  label: "영통구",
               },
            ],
         },
      ],
   },
   {
      value: "서울시",
      label: "서울시",
      children: [
         {
            value: "강남구",
            label: "강남구",
            children: [
               {
                  value: "1동",
                  label: "1동",
               },
            ],
         },
      ],
   },
]

const formItemLayout = {
   labelCol: {
      xs: {
         span: 24,
      },
      sm: {
         span: 4,
      },
   },
   wrapperCol: {
      xs: {
         span: 24,
      },
      sm: {
         span: 16,
      },
   },
}
const tailFormItemLayout = {
   wrapperCol: {
      xs: {
         span: 24,
         offset: 0,
      },
      sm: {
         span: 16,
         offset: 8,
      },
   },
}
const SignupForm = () => {
   const [form] = Form.useForm()
   const onFinish = (values) => {
      console.log("Received values of form: ", values)
   }
   const prefixSelector = (
      <Form.Item name='prefix' noStyle>
         <Select style={{ width: 70 }}>
            <Option value='82'>+82</Option>
            <Option value='83'>+83</Option>
         </Select>
      </Form.Item>
   )
   const [autoCompleteResult, setAutoCompleteResult] = useState([])
   // 상세주소 자동입력 제시
   const ondetailAdressChange = (value) => {
      if (value) {
         setAutoCompleteResult([])
      } else {
         setAutoCompleteResult(
            ["읍", "면", "동"].map((domain) => `${value}${domain}`)
         )
      }
   }
   const detailAdressOptions = autoCompleteResult.map((detailAdress) => ({
      label: detailAdress,
      value: detailAdress,
   }))
   return (
      <div className="join" style={{width:'100%',  marginTop:100}}>
         <div className='login-title'>
               <p style={{textAlign:'center',fontSize:14, marginBottom:14}}>CREATE AN ACCOUNT</p>
               <h2 style={{textAlign:'center', fontSize:64, margin:0}}>JOIN US</h2>
         </div>
         <Form {...formItemLayout} form={form} name='register' onFinish={onFinish}
            initialValues={{
               prefix: "82",
            }}
            style={{maxWidth: 600 ,margin:'50px auto'}} scrollToFirstError>
   
            <Form.Item name='아이디' label='아이디' rules={[{required: true,message: "아이디를 입력해주세요",},]}>
               <Input />
            </Form.Item>
   
            <Form.Item name='비밀번호' label='비밀번호' rules={[{required: true, message: "비밀번호를 입력해주세요",},]}
               hasFeedback>
               <Input.Password />
            </Form.Item>
   
            <Form.Item name='비밀번호 확인' label='비밀번호 확인' dependencies={["password"]} hasFeedback rules={[
                  {
                     required: true,
                     message: "비밀번호를 확인해주세요",
                  },
                  ({ getFieldValue }) => ({
                     validator(_, value) {
                        if (value || getFieldValue("password") === value) {
                           return Promise.resolve()
                        }
                        return Promise.reject(
                           new Error(
                              "입력한 비밀번호와 동일하지 않습니다"
                           )
                        )
                     },
                  }),
               ]}
            >
               <Input.Password />
            </Form.Item>
   
            <Form.Item className="mb50" name='닉네임'label='닉네임'tooltip='사이트 내 커뮤니티와 장터 판매자 이름으로 사용됩니다'rules={[
                  { required: true, message: "닉네임을 입력해주세요", whitespace: true,},
               ]}>
               <Input />
            </Form.Item>
   
            <Form.Item name='주소' label='주소' rules={[
                  {
                     type: "array",
                     required: true,
                     message: "주소 행정구역을 선택해주세요",
                  },
               ]}
            >
               <Cascader options={residences} />
            </Form.Item>
   
            <Form.Item name='상세주소' label='상세주소' rules={[
                  {required: true,message: "상세 주소를 입력해주세요",},]}>
               <AutoComplete
                  options={detailAdressOptions}
                  onChange={ondetailAdressChange}
                  placeholder='상세주소'
               >
                  <Input />
               </AutoComplete>
            </Form.Item>
   
   
            <Form.Item name='연락처' label='연락처' rules={[
                  {
                     required: true,
                     message: "정확한 연락처를 입력해주세요",
                  },
               ]}>
               <Input addonBefore={prefixSelector} placeholder='010-0000-0000' style={{width:"100%", }}/>
            </Form.Item>
   
            <Form.Item label='본인인증' extra='개인간 금품거래가 이뤄지는 특성상 본인인증을 요청합니다 '>
               <Row gutter={8}>
                  <Col span={12}>
                     <Form.Item name='captcha' noStyle rules={[{required: true, message: "본인인증을 완료해주세요",},]}>
                        <Input placeholder='인증번호 입력(6자리)' />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Button>휴대폰 본인인증</Button>
                  </Col>
               </Row>
            </Form.Item>
   
   
            <Form.Item name='메모사항' label='기타 & 메모사항'  className="mt60" 
            extra= "작성하지 않아도 무관합니다만, 배송이나 제품에 관련된 요청사항을 기재해주시면 좀 더 빠른 배송이 가능합니다">
               <Input.TextArea maxLength={100} />
            </Form.Item>
   
   
            <Form.Item name='회원약관동의' className='mb30' valuePropName='checked' rules={[{validator: (_, value) =>
            value ? Promise.resolve() : Promise.reject(new Error("회원약관을 확인해주세요")),},]} {...tailFormItemLayout}>
               <Checkbox>
                  <a href='noscript:'>[회원약관]</a>을 확인했습니다
               </Checkbox>
            </Form.Item>
   
   
            <Form.Item name='회원가입 버튼' {...tailFormItemLayout}>
               <Button type='primary' htmlType='submit'>
                  회원가입 완료
               </Button>
            </Form.Item>
         </Form>
      </div>
   )
}
export default SignupForm