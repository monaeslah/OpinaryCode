import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme?: any) => ({
  background: {
    height: "100%",
  },
  container: {
    minHeight: "100%",
    background: theme.palette.background.contentContainer,
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(11),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      // paddingLeft: theme.spacing(5),
      // paddingRight: theme.spacing(5),
    },
  },
  openDrawer: {
    [theme.breakpoints.up("md")]: {
      margin: "50px",
    },
  },
  closedDrawer: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(9),
    },
  },
  bannerDiv: {
    height: "48px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(6, 6, 5, 6),
    marginLeft: "auto",
    "& img": {},
  },
  headerImg: {
    [theme.breakpoints.up("md")]: {
      // marginTop: theme.spacing(9),
      display: "none",
    },
  },
}));
export default useStyles;
