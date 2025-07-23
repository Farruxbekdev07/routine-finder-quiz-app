export interface QuestionProps {
  id: number;
  question: string;
  options: string[];
}

export interface QuestionsProps {
  [key: number]: QuestionProps;
}
