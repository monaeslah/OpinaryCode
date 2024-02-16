import React, { useState, useEffect } from "react";
import PollQuestion from "./Question";
import PollResults from "./Results";
// import jsonData from "./questions.json";
import Button from "../../commons/components/Button";
import useStyles from "../../commons/Assets/styles/widget";
// import { useTranslation } from "react-i18next";
import ProgressBar from "./progressBar";
import Animation from "../../commons/components/Animation";

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

interface PollWidgetProps {
  initialQuestions: PollQuestionData[]; // This matches the prop you're actually passing
  widgetId: string;
}

const PollWidget: React.FC<PollWidgetProps> = ({
  initialQuestions,
  widgetId,
}) => {
  const classes = useStyles();

  const [questions, setQuestions] =
    useState<PollQuestionData[]>(initialQuestions);

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    // setQuestions(jsonData);
    console.log(questions);
  }, []);

  const handleOptionSelect = (questionId: number, optionId: number) => {
    if (selectedOptions.hasOwnProperty(questionId)) {
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
    setSelectedOptions((prev) => ({ ...prev, [questionId]: optionId }));
  };

  // Save results to localStorage
  const saveToLocalStorage = () =>
    localStorage.setItem("pollData", JSON.stringify(questions));

  // Check if all questions have been answered
  const allAnswered = questions.length === Object.keys(selectedOptions).length;

  return (
    <div className={classes.formPaper}>
      <h3>{widgetId}</h3>
      <ProgressBar
        totalQuestions={questions.length}
        questionsAnswered={Object.keys(selectedOptions).length}
      />

      {questions.map((questionData) => (
        <PollQuestion
          key={questionData.id}
          questionData={questionData}
          selectedOptions={selectedOptions}
          onOptionSelect={handleOptionSelect}
        />
      ))}

      <PollResults questions={questions} />
      <Animation />

      <Button
        onClick={saveToLocalStorage}
        disabled={!allAnswered}
        text="Save Poll Results"
      />
    </div>
  );
};

export default PollWidget;
