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

const REQUIRED_FIELD = 'обязательное поле';

Yup.addMethod(Yup.string, 'digital', function (anyArgsYouNeed) {
    // @ts-ignore
    return this.matches(/^\d+$/, 'должно содержать только цифры');
});

export const pamentDetailesValidationSchema = Yup.object().shape({
    shortName: Yup.string().required(REQUIRED_FIELD),
    comment: Yup.string().required(REQUIRED_FIELD),
    bankName: Yup.string().required(REQUIRED_FIELD),
    // @ts-ignore
    inn: Yup.string().digital().required(REQUIRED_FIELD),
    // @ts-ignore
    kpp: Yup.string().digital().required(REQUIRED_FIELD),
    // @ts-ignore
    ogrn: Yup.string().digital().required(REQUIRED_FIELD),
    // @ts-ignore
    bik: Yup.string().digital().required(REQUIRED_FIELD),
    // @ts-ignore
    account: Yup.string().digital().required(REQUIRED_FIELD),
    // @ts-ignore
    correspAcc: Yup.string().digital().required(REQUIRED_FIELD),
    // @ts-ignore
    okpo: Yup.string().digital().required(REQUIRED_FIELD),
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
                console.error(error);
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
