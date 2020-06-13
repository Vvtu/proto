import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonsBlock from '../components/ButtonsBlock'

export default function PaymentDetails(props: any) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Платежные реквизиты
      </Typography>

            <Grid container spacing={3}>

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