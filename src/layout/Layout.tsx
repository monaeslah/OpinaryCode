import { ReactChild, useState, FC } from "react";

import { Paper } from "@material-ui/core";
import clsx from "clsx";

import useStyles from "../commons/Assets/styles/layout";

import { useTranslation } from "react-i18next";
// import mobileMenu from "../commons/images/mobile-menu.svg";

import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.background}>
      <Paper
        elevation={0}
        className={clsx(classes.container, {
          [classes.openDrawer]: openDrawer,
          [classes.closedDrawer]: !openDrawer,
        })}
      >
        <div className={classes.header}>
          {/* <img
            className={classes.headerImg}
            src={mobileMenu}
            alt=""
            onClick={() => setOpenMobileDrawer(!openMobileDrawer)}
          /> */}
        </div>
        <div className={classes.contentContainer}>{children}</div>

        <Footer />
      </Paper>
    </div>
  );
};

export default Layout;
