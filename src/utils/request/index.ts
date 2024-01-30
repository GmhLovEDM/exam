import axios, { type AxiosRequestConfig, type AxiosResponse, type Method } from 'taro-axios';
import { showToast, reLaunch, getStorageSync } from '@tarojs/taro';
import type { ResponseData } from '@/utils/request/type';

/** 创建 axios 实例 */
const instance = axios.create({
  baseURL: 'http://10.68.2.232:8080/dev-api',
  timeout: 10000,
  headers: {
    // Authorization: getStorageSync('token') || ''
  }
});

/** 添加请求拦截器 */
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers.Authorization = getStorageSync('token') || '';
    return config;
  },
  error => {
    showToast({ title: '请求失败，请检查网络', icon: 'error' });
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/** 添加响应拦截器 */
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code == 200) return response.data;
    if (response.data.code == 401) {
      showToast({ title: '登录失效，请重新登录！', icon: 'none' });
      setTimeout(() => {
        reLaunch({
          url: '/pages/login/index'
        });
      }, 800);
    } else {
      showToast({ title: response.data.msg || '未知错误，请联系管理员！', icon: 'none' });
    }
    return response.data;
  },
  error => {
    if (error.response.data) {
      showToast({ title: error.response.data.msg || '请求失败，请重试！', icon: 'error' });
    } else showToast({ title: '请求失败，请重试！', icon: 'error' });
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

/**
 * 发送HTTP请求
 * @description 依赖于 taro-axios 封装的请求
 *
 * @type T 参数类型
 * @type R 返回类型
 *
 * @param url 请求地址
 * @param method 请求方式
 * @param data 请求参数
 *
 * @author GmhLovEDM
 * @date 2024-01-15 15:58:00
 */
export const http = <T = unknown, R = unknown>(url: string, method: Method, data: T): Promise<ResponseData<R>> => {
  return instance.request({
    url,
    method,
    data,
    params: method == 'GET' ? data : undefined
  });
};
