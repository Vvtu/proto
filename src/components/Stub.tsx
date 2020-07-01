import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Stub(props: { name: string }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {`Извините, модуль "${props.name}" еще не имплементирован`}
      </Typography>
      <Grid container spacing={3}></Grid>
    </React.Fragment>
  );
}
