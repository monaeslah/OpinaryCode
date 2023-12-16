import React from "react";
import useStyles from "../commons/Assets/styles/progressBar";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
interface ProgressBarProps {
  totalQuestions: number;
  questionsAnswered: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({
  totalQuestions,
  questionsAnswered,
}) => {
  const progressPercentage = (questionsAnswered / totalQuestions) * 100;
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            height: "20px",
            width: `${progressPercentage}%`,
            backgroundColor: progressPercentage === 100 ? "#4caf50" : "#ffeb3b",
            borderRadius: "10px",
            transition: "width 0.4s ease-in-out",
          }}
        />
        {progressPercentage < 100 ? (
          <span style={{ padding: "5px" }}>
            <div className={classes.loader}>
              <div className={classes.loaderElement}></div>
              <div className={classes.loaderElement}></div>
              <div className={classes.loaderElement}></div>
              {/* ... */}
            </div>
          </span>
        ) : (
          <span style={{ padding: "5px" }}>
            {" "}
            <Typography variant="h4" className={classes.headLine}>
              {t("general.done")}
            </Typography>
          </span>
        )}
      </div>
    </>
  );
};

export default ProgressBar;
