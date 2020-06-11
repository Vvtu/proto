import React from 'react';
import TopBar from "../components/TopBar"
import Widget from './Widget';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    link: { textDecoration: "none" },
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

export default function Main() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TopBar />
            <Container className={classes.center}>
                <Widget link={"/customer-form"} label={`Форма ОРП`} />
                <Widget link={"/"} label={`Форма ОИВ`} />
                <Widget link={"/"} label={`Проект`} />
                <Widget link={"/"} label={`Бизнес-план`} />
                <Widget link={"/"} label={`Документ`} />

            </Container>
        </React.Fragment>
    );
}