import { makeStyles } from "@material-ui/styles";
type styleProps = {
  tertiary: boolean;
  width?: string;
};
const useStyles = makeStyles((theme?: any) => ({
  root: {
    height: "45px",
    width: (styleProps: styleProps) => styleProps.width,
    minWidth: "80px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "unset",
      width: "inherit",
    },
  },
  contained: {
    background: theme.palette.gradient.yellow,
    color: theme.palette.text.secondary,

    "&:hover": {
      background: theme.palette.primary[800],
    },
    "&:focus": {
      background: theme.palette.primary[700],
      outline: "none",
    },
    "&:active": {
      background: theme.palette.onSurface.highEmphasis,
    },
  },
  outlined: {
    height: "40px",
    border: (styleProps: styleProps) =>
      styleProps.tertiary
        ? `2px solid ${theme.palette.borderColor.onSurface}`
        : `2px solid ${theme.palette.onSurface.highEmphasis}`,
    color: theme.palette.onSurface.highEmphasis,
    background: "#EBEAEE",

    "&:hover": {
      borderColor: (styleProps: styleProps) =>
        styleProps.tertiary
          ? `2px solid ${theme.palette.borderColor.onSurface}`
          : theme.palette.primary[800],
      color: theme.palette.primary[800],
    },
    "&:focus": {
      borderColor: (styleProps: styleProps) =>
        styleProps.tertiary
          ? `2px solid ${theme.palette.borderColor.onSurface}`
          : theme.palette.primary[700],
      color: theme.palette.primary[700],
      outline: "none",
    },
    "&:active": {
      borderColor: (styleProps: styleProps) =>
        styleProps.tertiary
          ? `2px solid ${theme.palette.borderColor.onSurface}`
          : theme.palette.onSurface.highEmphasis,
      color: theme.palette.onSurface.highEmphasis,
    },
    "&.Mui-disabled": {
      background: "transparent!important",
      color: "rgba(6, 6, 30, 0.38)",
    },
  },
  text: {
    // color: theme.palette.onSurface.highEmphasis,
    background: "#EBEAEE",
    color: "rgba(6, 6, 30, 0.38)",
    borderRadius: "8px",
    "&:hover": {
      color: theme.palette.primary[800],
    },
    "&:focus": {
      color: theme.palette.primary[700],
      outline: "none",
    },
    "&:active": {
      color: theme.palette.onSurface.highEmphasis,
    },
    "&.Mui-disabled": {
      background: "transparent!important",
    },
  },
  sizeLarge: {
    width: "170px",
    height: "58px",
  },
  sizeSmall: {
    width: "75px",
    height: "45px",
  },

  disabled: {
    "&.Mui-disabled": {
      background: theme.palette.onSurface.btnDisabled,
      color: theme.palette.onSurface.disabled,
    },
  },
}));
export default useStyles;
