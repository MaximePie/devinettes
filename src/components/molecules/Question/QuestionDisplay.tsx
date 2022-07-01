
import React from "react";
import { StyledCard } from "./styles";
import {CardContent, Typography, CardActions, TextField, Button} from "@mui/material";
import {QuestionDisplayProps} from "./types";

export default function QuestionDisplay(props: QuestionDisplayProps) {
  const {isCorrect, question: {points, wording}, validate, onAnswerChange } = props;
  return (
    <StyledCard isCorrect={isCorrect}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {points} points
        </Typography>
        <Typography variant="body2">
          {wording}
        </Typography>
      </CardContent>
      <CardActions>
        <TextField
          id="standard-basic"
          label="Code de réponse"
          variant="standard"
          onChange={(event) => onAnswerChange(event.target.value)}
        />
      </CardActions>
      <CardActions>
        <Button size="small" onClick={validate}>Valider</Button>
      </CardActions>
    </StyledCard>
  )
}

