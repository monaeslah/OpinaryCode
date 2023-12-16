import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "16px",
    marginTop: "auto",
    color: "rgba(6, 6, 30, 0.60)",
    "& a": {
      textDecoration: "none",
      color: "rgba(6, 6, 30, 0.60)",
      margin: "auto",
      "& p": {
        color: "rgba(6, 6, 30, 0.60)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "10px",
      marginLeft: " auto",
      marginRight: " auto",
    },
  },

  formPaper: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(8),
    marginRight: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      width: "unset",
      marginBottom: theme.spacing(6),
      marginTop: "3rem",
      marginRight: "unset",
      padding: theme.spacing(6),
    },
  },
}));

export default useStyles;
