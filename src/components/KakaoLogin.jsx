import React from 'react';

const KakaoLogin = () => {
    const KAKAO_API_KEY = process.env.REACT_APP_KAKAO; 
    const REDIRECT_URI = "https://localhost:3000/kakaologin"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    console.log("Kakao Auth URL:", KAKAO_AUTH_URL);

    return (
        <div style={{textAlign:'center', marginTop:10, marginBottom:100}}>
            <a href={KAKAO_AUTH_URL}>
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="100%" height='50' alt="카카오 로그인 버튼" />
            </a>
        </div>
    );
};

export default KakaoLogin;