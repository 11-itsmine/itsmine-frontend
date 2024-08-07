export const REDIRECT_URI = 'http://localhost:3000/users/signin/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

export const KAKAO_TOKEN = 'https://kauth.kakao.com/oauth/token';
