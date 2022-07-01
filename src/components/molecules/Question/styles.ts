import styled from "styled-components";
import {Card} from "@mui/material";
import {StyledCardProps} from "./types";

export const StyledCard = styled(Card)<StyledCardProps>`
  margin-bottom: 1em;
  
  background-color: ${({isCorrect}) => isCorrect ? '#b0e8b0 !important' : 'white'};
`
