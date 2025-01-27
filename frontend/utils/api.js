import axios from 'axios';
// import Constants from 'expo-constants';
import { API_URL } from './constants'; // 상수에서 API URL 가져오기

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || '로그인 중 오류가 발생했습니다.';
  }
}


// 회원가입 API
export const register = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.log('회원가입 에러:', error.response?.data || error.message);
      throw error.response?.data?.message || '회원가입 중 오류가 발생했습니다.';
    }
  };