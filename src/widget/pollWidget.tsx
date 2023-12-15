import React, { useState, useEffect } from "react";
import PollQuestion from "./Question";
import PollResults from "./Results";
import jsonData from "./questions.json";
import Button from "../commons/components/Button";
import useStyles from "../commons/Assets/styles/widget";
import { useTranslation } from "react-i18next";
import ProgressBar from "./progressBar";

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

const PollWidget: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [questions, setQuestions] = useState<PollQuestionData[]>([]);

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    setQuestions(jsonData);
  }, []);

  const handleOptionSelect = (questionId: number, optionId: number) => {
    if (selectedOptions[questionId] !== undefined) {
      alert("You have already voted on this question.");
      return;
    }

    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          options: question.options.map((option) => {
            if (option.id === optionId) {
              return { ...option, votes: option.votes + 1 };
            }
            return option;
          }),
        };
      }
      return question;
    });

    setQuestions(updatedQuestions);

    setSelectedOptions({ ...selectedOptions, [questionId]: optionId });
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("pollData", JSON.stringify(questions));
  };
  const allAnswered = questions.length === Object.keys(selectedOptions).length;
  const questionsAnswered = Object.keys(selectedOptions).length;
  const totalQuestions = questions.length;
  return (
    <div className={classes.formPaper}>
      <ProgressBar
        totalQuestions={totalQuestions}
        questionsAnswered={questionsAnswered}
      />

      <div className={classes.regulatorySection}>
        {questions.map((questionData) => (
          <PollQuestion
            key={questionData.id}
            questionData={questionData}
            selectedOptions={selectedOptions}
            onOptionSelect={handleOptionSelect}
          />
        ))}
      </div>
      <div className={classes.regulatorySection}>
        <PollResults questions={questions} />
      </div>
      <Button
        onClick={saveToLocalStorage}
        disabled={!allAnswered}
        text={"Save Poll Results"}
      />
    </div>
  );
};

export default PollWidget;
