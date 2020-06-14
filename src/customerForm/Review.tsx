import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonsBlock from '../components/ButtonsBlock';
import { getRequest } from '../utils';

const fullList = [
    {
        name: 'Регистрационная информация',
        list: [
            'Организационно - правовая форма',
            'Полное наименование ОРП',
            'Сокращенное наименование ОРП',
            'ИНН',
            'КПП',
            'ОГРН',
            'ОКПО',
            'ОКВЭД основной',
            'Размер уставного капитала',
        ],
    },
    {
        name: 'Адреса(Юридический, Фактический, Почтовый)',
        list: [
            'Тип адреса',
            'Индекс',
            'Страна',
            'Регион',
            'Город',
            'Внутригородской район',
            'Район',
            'Поселение',
            'Доп.территория',
            'Улица',
            'Строение',
            'Дом',
            'Корпус',
            'Квартира',
            'Адрес полной строкой',
        ],
    },

    {
        name: 'Контакты организации',
        list: ['Тип контакта'],
    },

    {
        name: 'Сотрудники',
        list: [
            'ФИО сотрудника',
            'Должность  сотрудника',
            'Является руководителем ?',
            'Документ, удостоверяющий полномочия сотрудника',
            'Тип контакта сотрудника',
            'Значение контакта сотрудника',
            'Логин в ГИС Капиталовложения',
            'Логин в ЕСИА',
            '5. Владельцы',
            'Тип владельца',
            'Доля акций, принадлежащих владельцу',
            'Доля в уставном капитале',
            'ОПФ владельца',
            'Наименование владельца',
            'ИНН владельца',
            'КПП владельца',
            'ОГРН владельца',
            'ФИО владельца',
            'Дата рождения владельца',
            'Место рождения',
            'Гражданство',
            'Реквизиты документа, удостоверяющего личность',
            'Данные документа, подтверждающего право иностранного гражданина или лица без гражданства на пребывание(проживание) в РФ',
            'Адрес места жительства(регистрации) или места пребывания на территории РФ',
            'ИНН',
            'Тип контакта владельца',
            'Значение контакта владельца',
            'Бенефициарный владелец ?',
            'Налоговый резидент РФ ?',
        ],
    },
    {
        name: 'Платежные реквизиты',
        list: [
            'ОКТМО',
            'Наименование учреждения Банка России(кредитной организации)',
            'БИК',
            'Корреспондентский счет',
            'Расчетный счет',
            'Комментарий',
        ],
    },
];

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    header: {
        backgroundColor: '#bbb',
    },
    text: {
        backgroundColor: 'white',
    },
});

const rows: any[] = [];

fullList.forEach(({ name, list }) => {
    rows.push({ title: name, format: 'header' });
    list.forEach((elem) => {
        rows.push({ title: elem, format: 'text' });
    });
});

export default function Review(props: any) {
    const classes = useStyles();
    const [serverData, setServerData] = useState<{ [key: string]: any }>({});

    const getFieldValue = (name: string): string => {
        switch (name) {
            case 'ИНН':
                return serverData['inn'];
            case 'КПП':
                return serverData['kpp'];
            case 'ОГРН':
                return serverData['ogrn'];
            case 'ОКВЭД основной':
                return serverData['okved'];
            case 'ОКПО':
                return serverData['okpo'];
            case 'Сокращенное наименование ОРП':
                return serverData['shortName'];

            case 'БИК':
                return serverData['bik'];
            case 'Комментарий':
                return serverData['comment'];
            case 'Наименование учреждения Банка России(кредитной организации)':
                return serverData['bankName'];
            case 'Расчетный счет':
                return serverData['account'];
            case 'Корреспондентский счет':
                return serverData['correspAcc'];

            default:
                return '-------';
        }
    };

    useEffect(() => {
        getRequest('/v0/organizations')
            .then((data) => {
                console.log('data 4444 = ', data);
                setServerData(data[0]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableBody>
                        {rows.map(({ title, format }) => (
                            <TableRow key={title}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    className={format === 'header' ? classes.header : classes.text}
                                >
                                    {title}
                                </TableCell>
                                {format === 'header' ? (
                                    <TableCell align="right" className={classes.header}></TableCell>
                                ) : (
                                    <TableCell align="right" className={classes.text}>
                                        {getFieldValue(title)}
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ButtonsBlock {...props} />
        </React.Fragment>
    );
}
