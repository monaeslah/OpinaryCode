import { FC } from "react";

import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import useStyles from "../commons/Assets/styles/footer";

const Footer: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.contentContainer}>
      <Typography variant="body2">{t("footer.copyRight")}</Typography>

      <a href="https://www.opinary.com/privacy">
        {" "}
        <Typography variant="body2">{t("footer.privacy")}</Typography>
      </a>
      <a href="https://www.opinary.com/imprint">
        <Typography variant="body2">{t("footer.imprint")}</Typography>
      </a>
      <a href="https://www.opinary.com/terms">
        <Typography variant="body2">{t("footer.terms")}</Typography>
      </a>
    </div>
  );
};

export default Footer;
