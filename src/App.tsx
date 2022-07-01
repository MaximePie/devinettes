import {questions} from "./questionsList";
import Question from "./components/molecules/Question/Question";
import {useState} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

function App() {

  // Est-ce que le jeu a commencé ou non ? State de App
  const [isStarted, setIsStartedState] = useState(false);

  // Score : State de l'App
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      {isStarted
        ? (
          <div>
            <h4>Score : {score}</h4>
            {questions.map((question) => (
              <Question
                key={question.wording + question.code}
                question={question}
                onSuccess={addScore}
              />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent>
              <Typography>
                Bonjour et bienvenue !
                Prêt.e à gagner des super récompenses ?
              </Typography>
              <CardActions>
                <Button onClick={onStart}>Commencer</Button>
              </CardActions>
            </CardContent>
          </Card>
        )
      }
    </div>
  )

  /**
   * Ajoute le nombre de points reçus en paramètre au score total de l'utilisateur
   * @param points
   */
  function addScore(points: number) {
    setScore(score + points)
  }

  /**
   * Démarre le jeu
   * Modifie le state isStarted sur true
   */
  function onStart() {
    setIsStartedState(true);
  }
}

export default App
