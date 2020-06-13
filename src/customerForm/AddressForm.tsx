import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ButtonsBlock from '../components/ButtonsBlock'


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    tabWidth: {
        width: 400,
        "&:hover": {
            textDecoration: "underline",
        },
    }
});

export default function AddressForm(props: any) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item sm={12} md={12}>
                    <Paper className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Юридический адрес" className={classes.tabWidth} />
                            <Tab label="Фактический адрес" className={classes.tabWidth} />
                            <Tab label="Почтовый адрес" className={classes.tabWidth} />
                        </Tabs>
                    </Paper>
                </Grid>

                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Индекс"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>

                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Регион"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Город"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Внутригородской район"
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Район"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>

                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Поселение"
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>

                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Доп. территория"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="country1"
                        name="country"
                        label="Улица"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="country2"
                        name="country"
                        label="Строение"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="country3"
                        name="country"
                        label="Дом"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>

                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="country5"
                        name="country"
                        label="Корпус"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="country6"
                        name="country"
                        label="Квартира"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item sm={12} md={12}>
                    <TextField
                        required
                        id="country7"
                        name="country"
                        label="Адрес полной строкой"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
            </Grid>
            <ButtonsBlock {...props} />
        </React.Fragment>
    );
}