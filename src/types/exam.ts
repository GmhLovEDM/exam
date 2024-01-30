/** 考试信息 */
export namespace QuestionnaireInfo {
  /** 试卷信息 */
  export interface ExamInfo {
    /** 试卷ID */
    id: string;
    /** 大题列表 */
    BigQuestionList: BigQuestion[];
  }

  /** 大题信息 */
  export interface BigQuestion {
    /** 大题ID */
    bigquId: string;
    /** 大题名称 */
    bigquName: string;
    /** 大题顺序号 */
    orderNum: number;
    /** 大题问题乱序方式 */
    quDisorder: string;
    /** 大题选项乱序方式 */
    optionDisorder: string;
    /** 小题列表 */
    bigquQuList: SmallQuestion[];
  }

  /** 小题信息 */
  export interface SmallQuestion {
    /** 是否作答 */
    isAnswer?: boolean;
    
    /** 大题ID */
    bigquId: string;
    /** 小题ID */
    quId: string;
    /** 小题分数 */
    quScore: number;
    /** 未作答时的得分策略 */
    missRight: string;
    /** 小题顺序号 */
    orderNum: number;
    /** 小题内容 */
    quContent: string;
    /** 小题所属仓库ID */
    repoId: string;
    /** 小题类型 */
    quType: string;
    /** 小题难度 */
    difficulty: string;
    /** 小题选项列表 */
    quAnswerList: AnswerOption[];
  }

  /** 选项信息 */
  export interface AnswerOption {
    /** 大题ID */
    bigquId: string;
    /** 选项ID */
    optionId: string;
    /** 小题ID */
    quId: string;
    /** 选项内容 */
    optionContent: string;
    /** 是否为正确答案 */
    correct: string;
    /** 选项顺序号 */
    orderNum: number;
  }
}
