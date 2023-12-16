import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  headLine: { color: theme.palette.surface.highSurface, textAlign: "center" },

  loader: {
    overflow: "hidden",
    width: "100%",
    height: "100%",

    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    zIndex: 100000,
    margin: "auto",
  },
  loaderElement: {
    borderRadius: "100%",
    border: `5px solid #555`,
    margin: "6px",
    animation: "$preloader 0.6s ease-in-out alternate infinite",
    "&:nth-child(1)": {
      animationDelay: "0s",
    },
    "&:nth-child(2)": {
      animationDelay: "0.2s",
    },
    "&:nth-child(3)": {
      animationDelay: "0.4s",
    },
  },
  "@keyframes preloader": {
    "100%": {
      transform: "scale(2)",
    },
  },
}));

export default useStyles;
