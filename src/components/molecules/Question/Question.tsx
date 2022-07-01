
import React, {useState} from "react"
import QuestionDisplay from "./QuestionDisplay"
import {QuestionProps} from "./types";
export default function Question(props: QuestionProps) {

  const {question, onSuccess} = props;
  const {code, points} = question;

  // Si la question est juste ou non. Est un état de la question.
  // Le contenu du code saisi par l'utilisateur. Est un état de la question
  const [isCorrect, setCorrectState] = useState(false);
  const [answer, setAnswer] = useState("");
  return (
    <QuestionDisplay
      question={question}
      isCorrect={isCorrect}
      validate={validate}
      onAnswerChange={updateAnswer}
    />
  )

  /**
   * Mettre à jour le state de 'answer' avec la valeur reçue en paramètre
   * @param newAnswer
   */
  function updateAnswer(newAnswer: string) {
    setAnswer(newAnswer);
  }

  /**
   * Change isCorrect sur true à condition que 'answer' soit égal à code
   */
  function validate() {
    if (answer.toLowerCase() === code.toLowerCase()) {
      setCorrectState(true);
      onSuccess(points)
    }
  }
}
