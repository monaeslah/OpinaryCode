import React, { useState } from "react";
import { FormControl, Checkbox, Typography } from "@material-ui/core";
import Button from "commons/components/Button";
import useStyles from "../commons/Assets/styles/questions";
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
  const classes = useStyles();
  const { t } = useTranslation();
  const { id, question, options } = questionData;

  const handleOptionClick = (optionId: number) => {
    onOptionSelect(id, optionId);
  };
  return (
    <>
      <div>
        <Typography variant="h4" className={classes.headLine}>
          {question}
        </Typography>
        <FormControl component="fieldset">
          {options.map((option) => {
            const isSelected = selectedOptions[id] === option.id;
            return (
              <div key={option.id} className={classes.noteContent}>
                <div className={`${isSelected ? classes.selected : ""}`}>
                  <Button
                    text={option.text}
                    size="large"
                    onClick={() => handleOptionClick(option.id)}
                  />
                </div>
              </div>
            );
          })}
        </FormControl>
      </div>
    </>
  );
};

export default PollQuestion;
