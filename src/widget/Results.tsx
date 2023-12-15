import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import useStyles from "../commons/Assets/styles/results";
import { useTranslation } from "react-i18next";
interface PollOption {
  id: number;
  text: string;
  votes: number;
}

interface PollQuestionData {
  id: number;
  question: string;
  options: PollOption[];
}

interface PollResultsProps {
  questions: PollQuestionData[];
}

const PollResults: React.FC<PollResultsProps> = ({ questions }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div>
      {questions.map((questionData) => (
        <div key={questionData.id} className={classes.pollCard}>
          <CardContent>
            <Typography variant="h6" className={classes.questionText}>
              {questionData.question}
            </Typography>
            {questionData.options.map((option) => (
              <div key={option.id} className={classes.optionContainer}>
                <Typography className={classes.optionText}>
                  {option.text}
                </Typography>
                <div className={classes.voteCount}>
                  <Typography variant="caption">{option.votes}</Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default PollResults;
