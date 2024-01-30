/** 公用请求结果 */
export interface ResponseData<T = unknown> {
  /** 列表 */
  rows: T;
  /** 状态码 */
  code: string | number;
  /** 结果 */
  data: T;
  /** 信息 */
  msg: string;
  /** 总条数 */
  total: number;
}
