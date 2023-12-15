import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  headLine: { color: theme.palette.surface.highSurface, textAlign: "center" },
  "@global": {
    "@keyframes fill": {
      "0%": { width: "0%" },
      "33%": { width: "30px" },
      "66%": { width: "10px" },
      "100%": { width: "105px" },
    },
    "@keyframes fill-1": {
      "0%": { width: "0%" },
      "33%": { width: "50px" },
      "66%": { width: "20px" },
      "100%": { width: "130px" },
    },
    "@keyframes fill-3": {
      "0%": { width: "0%" },
      "33%": { width: "50px" },
      "66%": { width: "24px" },
      "100%": { width: "109px" },
    },
    "@keyframes fill-4": {
      "0%": { width: "0%" },
      "33%": { width: "98px" },
      "66%": { width: "34px" },
      "100%": { width: "99px" },
    },
    "@keyframes fill-5": {
      "0%": { width: "0%" },
      "33%": { width: "30px" },
      "66%": { width: "10px" },
      "100%": { width: "148px" },
    },
    "@keyframes fill-6": {
      "0%": { width: "0%" },
      "33%": { width: "48px" },
      "66%": { width: "22px" },
      "100%": { width: "140px" },
    },
    "@keyframes colors": {
      "0%": { backgroundColor: "#5a5a5a" },
      "50%": { backgroundColor: "#3a3" },
      "100%": { backgroundColor: "#6a6a6a" },
    },

    html: {
      background: "#F2F2F2",
    },
  },
  logoHolder: {
    background: "#f2f2f2",
    width: 180,
    height: 220,
    position: "relative",
    margin: "0 auto",
    paddingTop: 12,
    paddingBottom: 24,
    transform: "translateZ(0)",
  },
  bg: {
    position: "absolute",
    top: 9,
    left: 8,
    right: 8,
    bottom: 8,
    background:
      "url(http://boutique.flarework.com/wp-content/themes/boutique/img/logo_large.png) center 0 no-repeat",
    backgroundSize: "contain",
    filter: "drop-shadow(0px 6px 25px rgba(0,0,0,0.5))",
  },
  bar: {
    position: "relative",
    height: 8,
    background: "#6a6a6a",
    width: "0%",
    top: 0,
    left: 18,
    marginTop: 8,
    boxShadow: "0 0 3px rgba(192,192,192,0.9)",
    animation: `$fill 5s infinite alternate, $colors 5s infinite alternate`,
  },
  fill1: {
    animation: `$fill-1 5s infinite alternate, $colors 5s infinite alternate`,
  },
  fill2: {
    animation: `$fill-2 5s infinite alternate, $colors 5s infinite alternate`,
  },

  fill3: {
    animation: `$fill-3 5s infinite alternate, $colors 5s infinite alternate`,
  },
  fill4: {
    animation: `$fill-4 5s infinite alternate, $colors 5s infinite alternate`,
  },
  fill5: {
    animation: `$fill-5 5s infinite alternate, $colors 5s infinite alternate`,
  },
  fill6: {
    animation: `$fill-6 5s infinite alternate, $colors 5s infinite alternate`,
  },
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
