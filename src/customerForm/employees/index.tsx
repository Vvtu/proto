import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';




export default function Employees(props: any) {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {`Извините, модуль "${props.name}" еще не имплементирован`}
            </Typography>
            <Grid container spacing={3}>

            </Grid>
        </React.Fragment>
    );
}