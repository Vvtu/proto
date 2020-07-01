import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ButtonsBlock, { BUTTONS_BLOCK_PROPS_INTERFACE } from '../../components/ButtonsBlock';

import EmployeePanel from './EmployeePanel';

import { data } from './employeesData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

export default function Employees(props: BUTTONS_BLOCK_PROPS_INTERFACE) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Сотрудники
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {(data || []).map((emplData) => (
            <Grid item sm={12} key={emplData.id}>
              <EmployeePanel expanded={expanded} setExpanded={setExpanded} emplData={emplData} />
            </Grid>
          ))}
        </Grid>
      </div>
      <ButtonsBlock {...props} />
    </React.Fragment>
  );
}
