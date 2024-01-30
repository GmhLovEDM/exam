import { http } from '@/utils/request';
import type { GetExamDetail } from './type';
import type { ResponseData } from '@/utils/request/type';

/**
 * 获取考试详情
 * @ApiFoxID #142879322
 */
export const getExamDetail = (params: GetExamDetail.Params): Promise<ResponseData<GetExamDetail.Result>> => {
  return http('/wx/module/exam/info', 'GET', params);
};
