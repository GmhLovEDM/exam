import { QuestionnaireInfo } from '@/types/exam';
import { ResponseData } from '@/utils/request/type';
export const getQuestionnaireInfo = (): Promise<ResponseData<QuestionnaireInfo.ExamInfo>> => {
  return new Promise(res => {
    setTimeout(() => {
      res({
        total: 0,
        rows: [] as any,
        code: 200,
        data: {
          id: '789012',
          BigQuestionList: [
            {
              bigquId: 'BQ1',
              bigquName: '数学',
              orderNum: 1,
              quDisorder: 'random',
              optionDisorder: 'sequential',
              bigquQuList: [
                {
                  bigquId: 'BQ1',
                  quId: 'SQ1',
                  quScore: 5,
                  missRight: 'half',
                  orderNum: 1,
                  quContent: '如图所示，驾驶机动车跟车行驶遇到出租车正在接送乘客的时候，以下正确的做法是什么？',
                  repoId: 'R1',
                  quType: '1',
                  difficulty: 'easy',
                  quAnswerList: [
                    {
                      bigquId: 'BQ1',
                      optionId: '1',
                      quId: 'SQ1',
                      optionContent: '停车等待',
                      correct: 'false',
                      orderNum: 1
                    },
                    {
                      bigquId: 'BQ1',
                      optionId: '2',
                      quId: 'SQ1',
                      optionContent: '从对向车道加速超越',
                      correct: 'true',
                      orderNum: 2
                    },
                    {
                      bigquId: 'BQ1',
                      optionId: '3',
                      quId: 'SQ1',
                      optionContent: '连续鸣喇叭催促',
                      correct: 'false',
                      orderNum: 3
                    },
                    {
                      bigquId: 'BQ1',
                      optionId: '4',
                      quId: 'SQ1',
                      optionContent: '直接怼翻他！！！',
                      correct: 'false',
                      orderNum: 4
                    }
                  ]
                },
                {
                  bigquId: 'BQ1',
                  quId: 'SQ2',
                  quScore: 8,
                  missRight: 'none',
                  orderNum: 2,
                  quContent: '一个矩形的长是5单位，宽是3单位，计算它的周长。',
                  repoId: 'R1',
                  quType: '2',
                  difficulty: 'medium',
                  quAnswerList: [
                    {
                      bigquId: 'BQ1',
                      optionId: '1',
                      quId: 'SQ2',
                      optionContent: '12',
                      correct: 'true',
                      orderNum: 1
                    },
                    {
                      bigquId: 'BQ1',
                      optionId: '2',
                      quId: 'SQ2',
                      optionContent: '15',
                      correct: 'false',
                      orderNum: 2
                    },
                    {
                      bigquId: 'BQ1',
                      optionId: '3',
                      quId: 'SQ2',
                      optionContent: '8',
                      correct: 'true',
                      orderNum: 3
                    }
                  ]
                }
              ]
            },
            {
              bigquId: 'BQ2',
              bigquName: '科学',
              orderNum: 2,
              quDisorder: 'sequential',
              optionDisorder: 'random',
              bigquQuList: [
                {
                  bigquId: 'BQ2',
                  quId: 'SQ3',
                  quScore: 10,
                  missRight: 'full',
                  orderNum: 1,
                  quContent: '地球是宇宙中的哪个星球？',
                  repoId: 'R2',
                  quType: '1',
                  difficulty: 'easy',
                  quAnswerList: [
                    {
                      bigquId: 'BQ2',
                      optionId: '1',
                      quId: 'SQ3',
                      optionContent: '火星',
                      correct: 'false',
                      orderNum: 1
                    },
                    {
                      bigquId: 'BQ2',
                      optionId: '2',
                      quId: 'SQ3',
                      optionContent: '地球',
                      correct: 'true',
                      orderNum: 2
                    },
                    {
                      bigquId: 'BQ2',
                      optionId: '3',
                      quId: 'SQ3',
                      optionContent: '木星',
                      correct: 'false',
                      orderNum: 3
                    }
                  ]
                }
              ]
            },
            {
              bigquId: 'BQ3',
              bigquName: '语文',
              orderNum: 3,
              quDisorder: 'random',
              optionDisorder: 'sequential',
              bigquQuList: [
                {
                  bigquId: 'BQ3',
                  quId: 'SQ4',
                  quScore: 7,
                  missRight: 'half',
                  orderNum: 1,
                  quContent: '下列词语中，哪一个是形容词？',
                  repoId: 'R3',
                  quType: '1',
                  difficulty: 'medium',
                  quAnswerList: [
                    {
                      bigquId: 'BQ3',
                      optionId: '1',
                      quId: 'SQ4',
                      optionContent: '跑',
                      correct: 'false',
                      orderNum: 1
                    },
                    {
                      bigquId: 'BQ3',
                      optionId: '2',
                      quId: 'SQ4',
                      optionContent: '快乐',
                      correct: 'true',
                      orderNum: 2
                    },
                    {
                      bigquId: 'BQ3',
                      optionId: '3',
                      quId: 'SQ4',
                      optionContent: '看',
                      correct: 'false',
                      orderNum: 3
                    }
                  ]
                },
                {
                  bigquId: 'BQ3',
                  quId: 'SQ5',
                  quScore: 9,
                  missRight: 'none',
                  orderNum: 2,
                  quContent: '写一句包含比喻的句子。',
                  repoId: 'R3',
                  quType: '2',
                  difficulty: 'difficult',
                  quAnswerList: [
                    {
                      bigquId: 'BQ3',
                      optionId: '1',
                      quId: 'SQ5',
                      optionContent: '他的笑声如同春风拂过柳树。',
                      correct: 'true',
                      orderNum: 1
                    },
                    {
                      bigquId: 'BQ3',
                      optionId: '2',
                      quId: 'SQ5',
                      optionContent: '太阳升起照亮大地，它就像一个大灯。',
                      correct: 'false',
                      orderNum: 2
                    },
                    {
                      bigquId: 'BQ3',
                      optionId: '3',
                      quId: 'SQ5',
                      optionContent: '她的眼睛明亮如星星般闪烁。',
                      correct: 'true',
                      orderNum: 3
                    }
                  ]
                },
                {
                  bigquId: 'BQ3',
                  quId: 'SQ6',
                  quScore: 9,
                  missRight: 'none',
                  orderNum: 2,
                  quContent: '阿三大苏打实打实的',
                  repoId: 'R3',
                  quType: '3',
                  difficulty: 'difficult',
                  quAnswerList: [
                    {
                      bigquId: 'BQ3',
                      optionId: '1',
                      quId: 'SQ6',
                      optionContent: '正确',
                      correct: 'true',
                      orderNum: 1
                    },
                    {
                      bigquId: 'BQ3',
                      optionId: '2',
                      quId: 'SQ6',
                      optionContent: '错误',
                      correct: 'false',
                      orderNum: 2
                    },
                    
                  ]
                }
              ]
            }
          ]
        },
        msg: '操作成功！'
      });
    }, 1000);
  });
};
