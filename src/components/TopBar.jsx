import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Tooltip from "@material-ui/core/Tooltip";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  whiteColor: {
    color: "white",
    fontWeight: "bold",
  },
}));

export default function CustomerForm() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <RouterLink to={"/"} className={classes.link}>
            <Tooltip title={"Переход на главную страницу"}>
              <Typography variant="h6" noWrap className={classes.whiteColor}>
                ГИС прототип
              </Typography>
            </Tooltip>
          </RouterLink>
          <div className={classes.toolbarButtons}>
            <Tooltip title="Авторизация">
              <RouterLink to={"/login"} className={classes.link}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  className={classes.whiteColor}
                >
                  <AccountCircle />
                </IconButton>
              </RouterLink>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
