import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  formPaper: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(8),
    marginRight: theme.spacing(7),

    [theme.breakpoints.down("sm")]: {
      width: "unset",
      marginBottom: theme.spacing(6),
      marginTop: "3rem",
      marginRight: "unset",
      padding: theme.spacing(6),
    },
  },
  adjustment: { display: "flex" },
  pollCard: {
    background: "#61BDDC",
    borderRadius: "20px",
    margin: "10px",
    padding: "20px",
  },
  questionText: {
    color: "#333",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  optionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
  },
  optionText: {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: "normal",
  },
  voteCount: {
    background: "#fff",
    borderRadius: "50%",
    minWidth: "35px",
    minHeight: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.2)",
  },
}));

export default useStyles;
