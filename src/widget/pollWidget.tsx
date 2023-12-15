import React, { useState, useEffect } from "react";
import PollQuestion from "./Question";
import PollResults from "./Results";
import jsonData from "./questions.json";

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

  return (
    <div>
      {questions.map((questionData) => (
        <PollQuestion
          key={questionData.id}
          questionData={questionData}
          selectedOptions={selectedOptions}
          onOptionSelect={handleOptionSelect}
        />
      ))}
      <PollResults questions={questions} />
      <button onClick={saveToLocalStorage} disabled={!allAnswered}>
        Save Poll Results
      </button>
    </div>
  );
};

export default PollWidget;
