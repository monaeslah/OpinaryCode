import React, { useState } from "react";
import {
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

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

interface PollQuestionProps {
  questionData: PollQuestionData;
  selectedOptions: { [key: number]: number }; // Updated type
  onOptionSelect: (questionId: number, optionId: number) => void;
}

const PollQuestion: React.FC<PollQuestionProps> = ({
  questionData,
  selectedOptions,
  onOptionSelect,
}) => {
  const { id, question, options } = questionData;

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOptionId = parseInt(event.target.value, 10);
    onOptionSelect(id, selectedOptionId);
    console.log("questionData", questionData);
  };

  return (
    <>
      <div>
        <Typography variant="subtitle1">{question}</Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label={`poll-question-${id}`}
            name={`poll-question-${id}`}
            value={selectedOptions[id] || ""}
            onChange={handleOptionChange}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id.toString()}
                control={<Radio />}
                label={option.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default PollQuestion;
