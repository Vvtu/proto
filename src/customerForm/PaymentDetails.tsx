import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonsBlock from '../components/ButtonsBlock'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getReuest } from '../utils'

const initialPamentDetailes = {
    "account": '',
    "bankName": '',
    "bik": '',
    "comment": "dsfsdfsdfsf",
    "contactType": '',
    "contactValue": '',
    "correspAcc": '',
    "description": '',
    "fullName": '',
    "inn": '',
    "kpp": '',
    "ogrn": '',
    "okpo": '',
    "oktmo": '',
    "okved": '',
    "orgForm": '',
    "shareCapital": '',
    "shortName": '',
};

const ОБЯЗАТЕЛЬНОЕ_ПОЛЕ = "Обязательное поле";
const ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ = "Должно быть целым числом";

export const pamentDetailesValidationSchema = Yup.object().shape({
    shortName: Yup.string()
        .required(ОБЯЗАТЕЛЬНОЕ_ПОЛЕ),
    comment: Yup.string(),
    bankName: Yup.string(),
    inn: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive('Должно быть положительным'),
    kpp: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive('Должно быть положительным'),
    ogrn: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive('Должно быть положительным'),
    bik: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive('Должно быть положительным'),
    account: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive('Должно быть положительным'),
    okpo: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive('Должно быть положительным'),
    okved: Yup.string(),
    comment: Yup.string(),
    exercise: Yup.string(),
    pageNumber: Yup.number()
        .typeError('Должно быть числом')
        .integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive('Должно быть положительным')
        .max(10000),
});

export default function PaymentDetails(props: any) {

    useEffect(() => {
        getReuest("/v0/organizations/11111").then((data) => {
            console.log('data = ', data);
        })
    }, []);

    const formik = useFormik({
        initialValues: initialPamentDetailes,
        onSubmit: (values, { resetForm }) => {
            // onSubmit(values);
            // resetForm();
            console.log('onSubmit values = ', values);
        },
        validationSchema: QRCodeValidationSchema,
    });

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Платежные реквизиты
      </Typography>

            <Grid container spacing={3}>

                <Grid item xs={12} md={12}>
                    <TextField
                        required
                        id="cardNumber2"
                        label="Наименование организации"
                        fullWidth
                        autoComplete="cc-number"
                    />
                </Grid>

                <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            required
                            id="cardNumber"
                            label="ОКТМО"
                            fullWidth
                            autoComplete="cc-number"
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12} md={12}>
                    <TextField
                        required
                        id="cardNumber2"
                        label="Наименование учреждения Банка России (кредитной организации)"
                        fullWidth
                        autoComplete="cc-number"
                    />
                </Grid>

                <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={4}>                    <TextField
                        required
                        id="cardNumber4"
                        label="БИК"
                        fullWidth
                        autoComplete="cc-number"
                    />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            required
                            id="cardNumber5"
                            label="Корреспондентский счет"
                            fullWidth
                            autoComplete="cc-number"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={4}>                    <TextField
                        required
                        id="cardNumber6"
                        label="Расчетный счет"
                        fullWidth
                        autoComplete="cc-number"
                    />
                    </Grid>
                </Grid>

            </Grid>
            <ButtonsBlock {...props} />
        </React.Fragment>
    );
}