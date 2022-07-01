import {Question} from "../../../types";

type QuestionProps = {
  question: Question,
  onSuccess: (points: number) => void,
}
type QuestionDisplayProps = {
  question: QuestionProps['question'],
  isCorrect: boolean,
  validate: () => void,
  onAnswerChange: (newAnswer: string) => void,
};

type StyledCardProps = {
  isCorrect: QuestionDisplayProps['isCorrect'],
}

export type {QuestionDisplayProps, QuestionProps, StyledCardProps}

