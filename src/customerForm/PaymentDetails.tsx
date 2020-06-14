import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import ButtonsBlock from '../components/ButtonsBlock';
import { useFormik } from 'formik';

import * as Yup from 'yup';

import { getReuest } from '../utils';

// const initialPamentDetailes = {
//     account: '',
//     bankName: '',
//     bik: '',
//     comment: 'dsfsdfsdfsf',
//     contactType: '',
//     contactValue: '',
//     correspAcc: '',
//     description: '',
//     fullName: '',
//     inn: '',
//     kpp: '',
//     ogrn: '',
//     okpo: '',
//     oktmo: '',
//     okved: '',
//     orgForm: '',
//     shareCapital: '',
//     shortName: '',
// };

const ОБЯЗАТЕЛЬНОЕ_ПОЛЕ = 'Обязательное поле';
const ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ = 'Должно быть целым числом';
const ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ = 'Должно быть положительным';

export const pamentDetailesValidationSchema = Yup.object().shape({
    shortName: Yup.string().required(ОБЯЗАТЕЛЬНОЕ_ПОЛЕ),
    comment: Yup.string().required(ОБЯЗАТЕЛЬНОЕ_ПОЛЕ),
    bankName: Yup.string().required(ОБЯЗАТЕЛЬНОЕ_ПОЛЕ),
    inn: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ).positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    kpp: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ).positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    ogrn: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ).positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    bik: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ).positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    account: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ).positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    correspAcc: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ).positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    okpo: Yup.number().integer(ДОЛЖНО_БЫТЬ_ЦЕЛЫМ_ЧИСЛОМ).positive(ДОЛЖНО_БЫТЬ_ПОЛОЖИТЕЛЬНЫМ),
    okved: Yup.string().required(ОБЯЗАТЕЛЬНОЕ_ПОЛЕ),
});

type FormikInputType = {
    field: any;
    form: any;
};

// const CustomTextInput = ({
//     field, // { name, value, onChange, onBlur }
//     form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//     ...props
// }: CustomTextInputType) => (
//     <div>
//         <TextField
//             error={touched?.field?.name && errors?.field?.name && true}
//             helperText={touched?.field?.name && errors?.field?.name}
//             {...field}
//             {...props}
//         />
//     </div>
// );

const FormikInput = ({ formik, name, label }: { formik: any; name: string; label: string }) => {
    const error = formik.touched[name] && formik.errors[name];
    const value = formik.values[name];
    return (
        <FormControl>
            <TextField
                error={error}
                helperText={error}
                id={name}
                label={label}
                fullWidth
                onChange={formik.handleChange}
                value={value}
                onBlur={formik.handleBlur}
                inputProps={{ dirty: value }}
            />
        </FormControl>
    );
};

export default function PaymentDetails(props: any) {
    const [serverData, setServerData] = useState({});
    useEffect(() => {
        getReuest('/v0/organizations')
            .then((data) => {
                console.log('data = ', data);
                setServerData(data[0]);
            })
            .catch((error) => {
                throw new Error(error);
            });
    }, []);

    const formik = useFormik({
        // enableReinitialize: true,
        initialValues: serverData,
        onSubmit: (values) => {
            console.log('onSubmit values = ', values);
            alert(JSON.stringify(values, null, 2));
        },
        // onSubmit: (values, { resetForm }) => {
        //     // onSubmit(values);
        //     // resetForm();
        // },
        validationSchema: pamentDetailesValidationSchema,
    });

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

                <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={4}>
                        <FormikInput formik={formik} name="inn" label="ИНН" />
                    </Grid>
                </Grid>

                <button type="submit">submit</button>

                {/* <Grid item xs={12} md={12}>
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
                    <Grid item xs={12} md={4}>
                        {' '}
                        <TextField
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
                    <Grid item xs={12} md={4}>
                        {' '}
                        <TextField
                            required
                            id="cardNumber6"
                            label="Расчетный счет"
                            fullWidth
                            autoComplete="cc-number"
                        />
                    </Grid>
                </Grid> */}
            </Grid>
            <ButtonsBlock {...props} />
        </form>
    );
}
