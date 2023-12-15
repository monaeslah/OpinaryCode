import { Typography, Button, CircularProgress } from "@material-ui/core";
import { FC } from "react";
import { ButtonTypeMap } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import useStyles from "../Assets/styles/button";
import { clsx } from "clsx";

type Version = "primary" | "secondary" | "tertiary" | "text" | "searchedBG";

interface ButtonProps {
  size?: ButtonTypeMap["props"]["size"];
  version?: Version;
  text: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (arg?: any) => void;
  fullWidth?: boolean;
  width?: string;
  style?: any;
  textStyle?: any;
  className?: string;
}

const Btn: FC<ButtonProps> = ({
  size = "small",
  version = "primary",
  text = "",
  disabled = false,
  loading = false,
  onClick,
  fullWidth,
  width,
  style,
  textStyle,
  className,
}) => {
  const styleProps =
    version === "tertiary"
      ? { tertiary: true, width: width }
      : { tertiary: false, width: width };
  const classes = useStyles(styleProps);
  const { t } = useTranslation();

  const whichVariant = (): ButtonTypeMap["props"]["variant"] => {
    if (version === "primary") {
      return "contained";
    } else if (version === "secondary" || version === "tertiary") {
      return "outlined";
    } else if (version === "text") {
      return "text";
    }
  };

  return (
    <Button
      size={size}
      fullWidth={fullWidth}
      variant={whichVariant()}
      disableElevation
      classes={{
        contained: classes.contained,
        outlined: classes.outlined,
        text: classes.text,
        sizeLarge: classes.sizeLarge,
        sizeSmall: classes.sizeSmall,
        disabled: classes.disabled,
        root: clsx(
          classes.root,
          className,
          { [classes.sizeLarge]: size === "large" },
          { [classes.sizeSmall]: size === "small" }
        ),
      }}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {loading && version !== "text" ? (
        <CircularProgress color="inherit" size={20} />
      ) : (
        <Typography variant="button" style={textStyle}>
          {loading && version === "text" ? t("general.loading") : text}
        </Typography>
      )}
    </Button>
  );
};

export default Btn;
