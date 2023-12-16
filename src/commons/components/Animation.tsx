import React from "react";
import useStyles from "../Assets/styles/animation";

interface ProgressBarProps {}
const Animation: React.FC<ProgressBarProps> = () => {
  const classes = useStyles();
  return (
    <>
      {/* {/* <div className={classes.bg} /> */}
      <div className={classes.bar} />
      <div className={`${classes.bar} ${classes.fill1}`} />
      <div className={`${classes.bar} ${classes.fill2}`} />
      <div className={classes.bar} />
    </>
  );
};

export default Animation;
