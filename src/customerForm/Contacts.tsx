import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function CompanyRegisterInfo() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Контакты
      </Typography>
            <Grid container spacing={3}>
                <Grid item sm={12} >
                    <TextField
                        required
                        id="legalForm"
                        name="legalForm"
                        label="Телефон"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item sm={12} >
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Факс"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item sm={12}>
                    <TextField
                        id="email"
                        label="Адрес эл. почты"
                        name="email"
                        autoComplete="email"
                        fullWidth
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}