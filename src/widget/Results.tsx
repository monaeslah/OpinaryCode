import React from "react";
import { CardContent, Typography } from "@material-ui/core";

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
  return (
    <div>
      {questions.map((questionData) => (
        <div key={questionData.id}>
          <CardContent>
            <Typography variant="h6">{questionData.question}</Typography>
            {questionData.options.map((option) => (
              <div key={option.id}>
                <Typography>{option.text}</Typography>
                <Typography>Votes: {option.votes}</Typography>
              </div>
            ))}
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default PollResults;
