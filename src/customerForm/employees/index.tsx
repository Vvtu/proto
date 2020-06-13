import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

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

export default function Employees(props: any) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {`${props.name} - (Извините, этот модуль еще не имплементирован)`}
            </Typography>
            <Grid container spacing={3}>


                {/* <Grid item sm={12} md={4}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Индекс"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid> */}
            </Grid>
        </React.Fragment>
    );
}