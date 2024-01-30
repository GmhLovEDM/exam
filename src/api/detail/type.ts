/** 获取考试详情 */
export namespace GetExamDetail {
  /** 获取考试详情 参数 */
  export interface Params {
    /** 考试编号 */
    examId: string;
  }

  /** 获取考试详情 结果 */
  export type Result = {
    /** 考试编号 */
    examId: string;
    /** 考试标题 */
    examTitile: string;
    /** 考试描述 */
    examDesc: string;
    /** 试卷编号 */
    paperId: string;
    /** 考试权限，可选值：'1'（需要报名） */
    openType: string;
    /** 考试状态，可选值：'1'（未开始）、'2'（正在进行）、'3'（已结束） */
    examStatus: string;
    /** 是否限时，可选值：'0'（否）、'1'（是） */
    timeLimit: string;
    /** 考试开始时间 */
    startTime: string;
    /** 考试结束时间 */
    endTime: string;
    /** 考试总分 */
    score: number;
    /** 考试总时长（分钟） */
    duration: number;
    /** 及格分数 */
    passLine: number;
    /** 考后结果显示，可选值：'1'（仅显示感谢文字）、'2'（显示感谢文字+成绩） */
    resultShow: string;
    /** 考后感谢文字 */
    afterDesc: string;
  };
}
