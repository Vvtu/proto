import React, { useState } from 'react';
import TopBar from "../components/TopBar"
import Widget from './Widget';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Copyright from '../components/Copyright';

import { customerFormSteps } from '../customerForm';

import TransitionsModal from '../components/TransitionsModal';

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

const TIP_MESSAGE = "Извините, этот модуль еще не разработан.";

export default function Main() {
    const classes = useStyles();

    const [errorFired, setErrorFired] = useState<string>('');

    return (
        <React.Fragment>
            <TopBar />
            <Container className={classes.container}>
                <Widget
                    setErrorFired={setErrorFired}
                    link={"/customer-form"}
                    label={`ОРП`} tip={"ОРП это такая большая форма с многими полями"}
                    subNames={customerFormSteps} >
                </Widget>
                <Widget setErrorFired={setErrorFired} label={`ОИВ`} tip={TIP_MESSAGE} />
                <Widget setErrorFired={setErrorFired} label={`Проект`} tip={TIP_MESSAGE} />
                <Widget setErrorFired={setErrorFired} label={`Бизнес-план`} tip={TIP_MESSAGE} />
                <Widget setErrorFired={setErrorFired} label={`Документ`} tip={TIP_MESSAGE} />
            </Container>
            <Copyright />
            {errorFired && <TransitionsModal
                message={errorFired}
                onClose={() => setErrorFired('')}
            />}
        </React.Fragment>
    );
}