import React from 'react';
import TopBar from "../components/TopBar"
import Widget from './Widget';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Copyright from '../components/Copyright';

import { customerFormSteps } from '../customerForm';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: 40,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#ddd'
    },
}));

export default function Main() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TopBar />
            <Container className={classes.container}>
                <Widget link={"/customer-form"}
                    label={`ОРП`} tip={"ОРП это такая большая форма с многими полями"}
                    subNames={customerFormSteps} >
                </Widget>
                <Widget link={"/"} label={`ОИВ`} tip={"Извините, этот модуль еще не разработан."} />
                <Widget link={"/"} label={`Проект`} tip={"Извините, этот модуль еще не разработан."} />
                <Widget link={"/"} label={`Бизнес-план`} tip={"Извините, этот модуль еще не разработан."} />
                <Widget link={"/"} label={`Документ`} tip={"Извините, этот модуль еще не разработан."} />
            </Container>
            <Copyright />
        </React.Fragment>
    );
}