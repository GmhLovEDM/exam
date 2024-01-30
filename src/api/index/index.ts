import { http } from '@/utils/request';
import type { GetExamList } from './type';
import type { ResponseData } from '@/utils/request/type';

/**
 * 获取首页考试列表
 * @ApiFoxID #142483765
 */
export const getExamList = (params: GetExamList.Params): Promise<ResponseData<GetExamList.Result>> => {
  return http('/wx/module/exam/user/list', 'GET', params);
};
