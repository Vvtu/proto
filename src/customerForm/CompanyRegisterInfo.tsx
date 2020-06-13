import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { fetchData } from '../utils'

export default function CompanyRegisterInfo() {

    useEffect(() => {
        fetchData().then((data) => {
            console.log('data = ', data);
        })
    }, []);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Регистрационная информация
      </Typography>
            <Grid container spacing={3}>
                <Grid item sm={12} >
                    <TextField
                        required
                        id="legalForm"
                        name="legalForm"
                        label="Организационно-правовая форма"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item sm={12} >
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Полное наименование ОРП"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item sm={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Сокращенное наименование ОРП"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <TextField
                        required
                        id="address2"
                        name="address2"
                        label="ИНН"
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="КПП"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>

                <Grid item sm={12} md={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="ОГРН"
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <TextField
                        required
                        id="country2"
                        name="country"
                        label="ОКПО"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <TextField
                        required
                        id="country3"
                        name="country"
                        label="ОКВЭД основной"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <TextField
                        required
                        id="country4"
                        name="country"
                        label="Размер уставного капитала"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}