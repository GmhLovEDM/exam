import { http } from '@/utils/request';
import type { NormalLogin, LoginOut } from './type';
import type { ResponseData } from '@/utils/request/type';

/**
 * 账号（手机号）密码登录接口
 * @ApiFoxID #142373566
 */
export const normalLogin = (params: NormalLogin.Params): Promise<ResponseData<NormalLogin.Result>> => {
  return http('/wx/login/user/login', 'POST', params);
};

/**
 * 退出登录接口
 * @ApiFoxID none（若依自带）
 */
export const loginOut = (params: LoginOut.Params): Promise<ResponseData<LoginOut.Result>> => {
  return http('/logout', 'POST', params);
};
