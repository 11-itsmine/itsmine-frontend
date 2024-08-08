import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const KakaoCallback = ({ onLogin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    if (code) {
      handleKakaoLogin(code);
    }
  }, []);

  const handleKakaoLogin = async (code) => {
    try {
      const response = await axiosInstance.get(`/v1/users/oauth/kakao?code=${code}`);

      // 응답 바디에서 토큰 추출
      const token = response.data.data;
      console.log('Kakao Login successful!', token);

      // 토큰을 localStorage에 저장
      localStorage.setItem('Authorization', token);
      console.log('Token stored in localStorage:', localStorage.getItem('Authorization'));


      // 부모 컴포넌트에 로그인 상태 변경 알리기
      onLogin();

      // 페이지를 리다이렉트하거나 상태를 업데이트할 수 있습니다.
      // 이때 뒤에 오는 토큰 값을 삭제 합니다.
      navigate('/itsmine', { replace: true });
    } catch (error) {
      // 로그인 실패 시 처리 로직
      console.error('Kakao Login failed:', error);
      // 에러 처리 로직을 추가하세요
    }
  };

  return (
      <div>
        <h2>카카오 로그인 처리 중...</h2>
      </div>
  );
};

export default KakaoCallback;
