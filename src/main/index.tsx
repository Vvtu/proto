import React from 'react';
import TopBar from "../components/TopBar"
import Widget from './Widget';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Copyright from '../components/Copyright';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 40,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
}));

export default function Main() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TopBar />
            <Container className={classes.container}>
                <Widget link={"/customer-form"} label={`ОРП`} />
                <Widget link={"/"} label={`ОИВ`} />
                <Widget link={"/"} label={`Проект`} />
                <Widget link={"/"} label={`Бизнес-план`} />
                <Widget link={"/"} label={`Документ`} />
            </Container>
            <Copyright />
        </React.Fragment>
    );
}