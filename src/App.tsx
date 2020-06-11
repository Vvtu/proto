import React from 'react';
import TopBar from "./components/TopBar"
import Paper from '@material-ui/core/Paper';

import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    link: { textDecoration: "none" },
    linkFocus: { color: 'red' },
    toolbarButtons: {
        marginLeft: "auto",
    },
    center: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'start',
        height: "700px",

    },
    paper: {
        height: 400,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TopBar />
            <Container className={classes.center}>
                <Paper className={classes.paper}>
                    <RouterLink to={"/customer-form"} className={classes.link}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Форма ОРП
              </Typography>
                    </RouterLink>
                    <RouterLink to={"/"} className={classes.link}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Форма ОИВ
              </Typography>
                    </RouterLink>
                    <RouterLink to={"/"} className={classes.link}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Проект
              </Typography>
                    </RouterLink>
                    <RouterLink to={"/"} className={classes.link}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Бизнес-план
              </Typography>
                    </RouterLink>


                    <RouterLink to={"/"} className={classes.link}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Документ
              </Typography>
                    </RouterLink>

                </Paper>
            </Container>
        </React.Fragment>
    );
}