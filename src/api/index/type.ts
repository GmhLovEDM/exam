/** 获取首页考试列表 */
export namespace GetExamList {
  /** 获取首页考试列表 参数 */
  export interface Params {
    /** 当前记录起始索引 */
    pageNum: number;
    /** 每页显示记录数 */
    pageSize: number;
    /** 考试名称，可选 */
    examTitile?: string;
    /** 筛选状态，可选值：'0'（全部）、'1'（未开始）、'2'（正在进行）、'3'（已结束） */
    filterState: 0 | 1 | 2 | 3;
  }

  /** 获取首页考试列表 结果 */
  export type Result = {
    /** 考试ID */
    examId: string;
    /** 考试标题 */
    examTitile: string;
    /** 发布时间 */
    createTime: string;
  }[];
}
