import { makeStyles } from "@material-ui/styles";
type styleProps = {
  tertiary: boolean;
  width?: string;
};
const useStyles = makeStyles((theme?: any) => ({
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
    "@keyframes fill-2": {
      "0%": { width: "0%" },
      "33%": { width: "50px" },
      "66%": { width: "25px" },
      "100%": { width: "101px" },
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
}));
export default useStyles;
