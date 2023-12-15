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
  headLine: {
    fontWeight: 700,
    color: theme.palette.surface.mediumSurface,
    marginBottom: "3px",
    [theme.breakpoints.down("sm")]: { textAlign: "center" },
  },
  title: {
    color: theme.palette.surface.highSurface,
  },
  content: {
    color: theme.palette.surface.mediumSurface,
  },
  contentContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      maxWidth: "500px",
    },
  },

  noteContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    alignSelf: "stretch",
    marginBottom: "10px",
  },
  selected: {
    border: "2px solid green",
    borderRadius: "8px",
  },
}));

export default useStyles;
