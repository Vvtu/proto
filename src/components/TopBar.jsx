import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";
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
  link: { textDecoration: "none" },
  toolbarButtons: {
    marginLeft: "auto",
  },
}));

export default function CustomerFrom() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Link>
            <RouterLink to={"/"} className={classes.link}>
              <Typography variant="h6" color="inherit" noWrap>
                ГИС прототип
              </Typography>
            </RouterLink>
          </Link>
          <div className={classes.toolbarButtons}>
            <Tooltip title="Авторизация">
              <RouterLink to={"/login"} className={classes.link}>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
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
