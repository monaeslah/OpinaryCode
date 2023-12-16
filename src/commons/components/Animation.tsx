import React from "react";
import useStyles from "../Assets/styles/animation";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
interface ProgressBarProps {
  totalQuestions: number;
  questionsAnswered: number;
}
const Animation: React.FC<ProgressBarProps> = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bg} />
      <div className={classes.bar} />
      <div className={`${classes.bar} ${classes.fill1}`} />
      <div className={classes.bar} />
    </>
  );
};

export default Animation;
