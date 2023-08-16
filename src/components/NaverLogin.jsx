import React, {useEffect} from 'react';

const NaverLogin = () => {
    useEffect(() => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
            callbackUrl: 'http://localhost:8080/naverlogin',
            loginButton: { color: "green", type: 3, height: "50" },
        });
        naverLogin.init();
        naverLogin.logout();
        try {
            naverLogin.getLoginStatus((status) => {
            if (status) {
                console.log(naverLogin.user);
            }
            });
        } catch (err) {
            console.log(err);
        }
    }, []);
    
    return (
    <div>
		<div id="naverIdLogin" style={{textAlign:'center', marginRight:10}} />
    </div>
    );
};

export default NaverLogin;


