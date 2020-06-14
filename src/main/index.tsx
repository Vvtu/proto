import React, { useState } from 'react';
import TopBar from "../components/TopBar"
import Widget from './Widget';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Copyright from '../components/Copyright';

import { customerFormSteps } from '../customerForm';

import TransitionsModal from '../components/TransitionsModal';
// {
//     "id": 11111,
//     "orgForm": null,
//     "fullName": null,
//     "shortName": null,
//     "inn": null,
//     "kpp": null,
//     "ogrn": null,
//     "okpo": null,
//     "okved": null,
//     "shareCapital": null,
//     "contactType": null,
//     "contactValue": null,
//     "oktmo": null,
//     "bankName": null,
//     "bik": null,
//     "correspAcc": null,
//     "account": null,
//     "description": null,
//     "comment": "dsfsdfsdfsf"
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

const OIV_SUBNAMES = [
    "Регистрационная информация",
    "Адрес(Юридический)",
    "Контакты организации",
    "Сотрудники",
    "Платежные реквизиты",
    "Полный список",
]

const PROJECT_SUBNAMES = [
    "Общая информация",
    "Этапы проект",
    "Объекты инфраструктуры",
    "Стабилизационные оговорки",
    "Связанные документы (ссылки)",
    "Полный список",
];

const BUSINESS_PLAN_SUBNAMES = [
    "Общая информация",
    "Показатели эффективности",
    "Меры поддержки",
    "Финансовые показатели",
    "Мультипликативные эффекты",
    "Рабочие места",
    "Выручка и объем реализации",
    "Полный список"
]

const DOCUMENT_SUBNAMES = [
    "Общая информация",
    "Бизнес-процесс",
    "Подписи",
    "Связанные документы (ссылки)",
    "Полный список"
]

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
                <Widget
                    setErrorFired={setErrorFired}
                    label={`ОИВ`} tip={TIP_MESSAGE}
                    subNames={OIV_SUBNAMES}
                />
                <Widget setErrorFired={setErrorFired} label={`Проект`} tip={TIP_MESSAGE} subNames={PROJECT_SUBNAMES} />
                <Widget setErrorFired={setErrorFired} label={`Бизнес-план`} tip={TIP_MESSAGE} subNames={BUSINESS_PLAN_SUBNAMES} />
                <Widget setErrorFired={setErrorFired} label={`Документ`} tip={TIP_MESSAGE} subNames={DOCUMENT_SUBNAMES} />
            </Container>
            <Copyright />
            {errorFired && <TransitionsModal
                message={errorFired}
                onClose={() => setErrorFired('')}
            />}
        </React.Fragment>
    );
}