import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const list = [
    {
        "Регистрационная информация": [
            "Организационно - правовая форма",
            "Полное наименование ОРП",
            "Сокращенное наименование ОРП",
            "ИНН",
            "КПП",
            "ОГРН",
            "ОКПО",
            "ОКВЭД основной",
            "Размер уставного капитала",
        ]
    },
    {
        "Адреса(Юридический, Фактический, Почтовый)": [
            "Тип адреса",
            "Индекс",
            "Страна",
            "Регион",
            "Город",
            "Внутригородской район",
            "Район",
            "Поселение",
            "Доп.территория",
            "Улица",
            "Строение",
            "Дом",
            "Корпус",
            "Квартира",
            "Адрес полной строкой",
        ]
    },

    {
        "Контакты организации": [
            "Тип контакта"
        ]
    },

    {
        "Сотрудники": [
            "ФИО сотрудника",
            "Должность  сотрудника",
            "Является руководителем ?",
            "Документ, удостоверяющий полномочия сотрудника",
            "Тип контакта сотрудника",
            "Значение контакта сотрудника",
            "Логин в ГИС Капиталовложения",
            "Логин в ЕСИА",
            "5. Владельцы",
            "Тип владельца",
            "Доля акций, принадлежащих владельцу",
            "Доля в уставном капитале",
            "ОПФ владельца",
            "Наименование владельца",
            "ИНН владельца",
            "КПП владельца",
            "ОГРН владельца",
            "ФИО владельца",
            "Дата рождения владельца",
            "Место рождения",
            "Гражданство",
            "Реквизиты документа, удостоверяющего личность",
            "Данные документа, подтверждающего право иностранного гражданина или лица без гражданства на пребывание(проживание) в РФ",
            "Адрес места жительства(регистрации) или места пребывания на территории РФ",
            "ИНН",
            "Тип контакта владельца",
            "Значение контакта владельца",
            "Бенефициарный владелец ?",
            "Налоговый резидент РФ ?",
        ]
    },
    {
        "Платежные реквизиты": [
            "ОКТМО",
            "Наименование учреждения Банка России(кредитной организации)",
            "БИК",
            "Корреспондентский счет",
            "Расчетный счет",
        ]
    }

];


const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();

    return (
        <React.Fragment >
            <Typography variant="h6" gutterBottom>
                Полный список
      </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        $34.06
          </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
          </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
          </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment >
    );
}