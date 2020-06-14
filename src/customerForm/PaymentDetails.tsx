import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonsBlock from '../components/ButtonsBlock';
import { useFormik } from 'formik';

import { putRequest } from '../utils';

import * as Yup from 'yup';

import { getRequest } from '../utils';

const initialPamentDetailes = {
    account: '',
    bankName: '',
    bik: '',
    comment: '',
    contactType: '',
    contactValue: '',
    correspAcc: '',
    description: '',
    fullName: '',
    inn: '',
    kpp: '',
    ogrn: '',
    okpo: '',
    oktmo: '',
    okved: '',
    orgForm: '',
    shareCapital: '',
    shortName: '',
};

const ОБЯЗАТЕЛЬНОЕ_ПОЛЕ = 'Обязательное поле';
const ДОЛЖНО_БЫТЬ_ЧИСЛОМ = 'Должно быть числом';
const ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ = 'Должно быть целым числом';
const ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ = 'Должно быть положительным';

export const pamentDetailesValidationSchema = Yup.object().shape({
    shortName: Yup.string().required(ОБЯЗАТЕЛЬНОЕ_ПОЛЕ),
    comment: Yup.string().required(ОБЯЗАТЕЛЬНОЕ_ПОЛЕ),
    bankName: Yup.string().required(ОБЯЗАТЕЛЬНОЕ_ПОЛЕ),
    inn: Yup.number()
        .typeError(ДОЛЖНО_БЫТЬ_ЧИСЛОМ)
        .integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    kpp: Yup.number()
        .typeError(ДОЛЖНО_БЫТЬ_ЧИСЛОМ)
        .integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    ogrn: Yup.number()
        .typeError(ДОЛЖНО_БЫТЬ_ЧИСЛОМ)
        .integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    bik: Yup.number()
        .typeError(ДОЛЖНО_БЫТЬ_ЧИСЛОМ)
        .integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    account: Yup.number()
        .typeError(ДОЛЖНО_БЫТЬ_ЧИСЛОМ)
        .integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    correspAcc: Yup.number()
        .typeError(ДОЛЖНО_БЫТЬ_ЧИСЛОМ)
        .integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    okpo: Yup.number()
        .typeError(ДОЛЖНО_БЫТЬ_ЧИСЛОМ)
        .integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ)
        .positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
});

type FormikInputType = {
    field: any;
    form: any;
};

const handleChange = (event: any, formik: any) => {
    // get name and value from event.target
    // is the same as const name = event.target.name
    const { name, value } = event.target;
    // make sure you have name prop in
    // your textfield and it is same name as your initial state
    formik.setFieldValue(name, value); // this call formik to set your value
};

const FormikInput = ({ formik, name, label }: { formik: any; name: string; label: string }) => {
    const error = formik.touched[name] && formik.errors[name];
    const value = formik.values[name];
    return (
        <TextField
            required
            error={error}
            helperText={error}
            id={name}
            name={name}
            label={label}
            fullWidth
            onChange={(event) => handleChange(event, formik)}
            value={value}
            onBlur={formik.handleBlur}
            InputLabelProps={{ shrink: !!value || formik.touched[name] }}
        />
    );
};

export default function PaymentDetails(props: any) {
    const [serverData, setServerData] = useState({});
    useEffect(() => {
        getRequest('/v0/organizations')
            .then((data) => {
                console.log('data 4444 = ', data);
                setServerData({ ...initialPamentDetailes, ...data[0] });
            })
            .catch((error) => {
                throw new Error(error);
            });
    }, []);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: serverData,
        onSubmit: (values) => {
            console.log('onSubmit values = ', values);
            putRequest('/v0/organizations', { ...initialPamentDetailes, ...values });
        },
        validationSchema: pamentDetailesValidationSchema,
    });
    const newHandleNext = () => {
        formik.handleSubmit();
        if (formik.isValid) {
            props.handleNext();
        }
        console.log('newHandleNext');
    };
    console.log('serverData = ', serverData);
    console.log('formik.values = ', formik.values);
    console.log('formik = ', formik);
    return (
        <form
            onSubmit={() => {
                console.log('submit 222');
                formik.handleSubmit();
            }}
        >
            <Typography variant="h6" gutterBottom>
                Платежные реквизиты
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <FormikInput
                        formik={formik}
                        name="shortName"
                        label="Наименование организации"
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <FormikInput formik={formik} name="inn" label="ИНН" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormikInput formik={formik} name="kpp" label="КПП" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormikInput formik={formik} name="okpo" label="ОКПО" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormikInput formik={formik} name="bik" label="БИК" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormikInput formik={formik} name="ogrn" label="ОГРН" />
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormikInput formik={formik} name="account" label="Расчетный счет" />
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormikInput formik={formik} name="correspAcc" label="Корреспонденский счет" />
                </Grid>

                <Grid item xs={12} md={12}>
                    <FormikInput formik={formik} name="bankName" label="Наименование банка" />
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormikInput formik={formik} name="comment" label="Комментарий" />
                </Grid>
            </Grid>
            <ButtonsBlock {...props} handleNext={newHandleNext} />
        </form>
    );
}
