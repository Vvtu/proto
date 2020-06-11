import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  link: { textDecoration: "none" },
  linkFocused: {
    color: "red",
    textDecoration: "underline",
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
        </Toolbar>
      </AppBar>
    </>
  );
}
