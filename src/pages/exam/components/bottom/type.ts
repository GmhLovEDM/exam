import { QuestionnaireInfo } from '@/types/exam';

export interface BottomBarProps {
  paper: QuestionnaireInfo.ExamInfo | undefined;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
