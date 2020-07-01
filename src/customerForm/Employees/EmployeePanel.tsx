import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { EPML_DATA_INTERFACE } from './employeesData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: '#eee',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

type PropsType = {
  expanded: string | false;
  setExpanded: (panel: string | false) => void;
  emplData: EPML_DATA_INTERFACE;
};

export default function EmployeePanel(props: PropsType) {
  const classes = useStyles();
  const { expanded, setExpanded, emplData } = props;

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === emplData.id}
      onChange={handleChange(emplData.id)}
      TransitionProps={{ unmountOnExit: true }}
      className={classes.paper}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.heading}>{emplData.position}</Typography>
        <Typography className={classes.secondaryHeading}>{emplData.fio}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <TextField
              required
              id="fio"
              name="fio"
              label="Фамилия Имя Отчество"
              fullWidth
              value={emplData.fio}
            />
          </Grid>
          <Grid item sm={12} md={8}>
            <TextField
              id="position"
              name="position"
              label="Должность"
              fullWidth
              value={emplData.position}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <FormControlLabel
              id="isChief"
              control={
                <Checkbox
                  color="secondary"
                  name="isChief"
                  value={emplData.isChief ? 'Yes' : 'No'}
                />
              }
              label="Является руководителем?"
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              id="document"
              label="Документ, удостоверяющий полномочия сотрудника"
              name="document"
              value={emplData.document}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              id="contractType"
              label="Тип контакта сотрудника"
              name="contractType"
              value={emplData.contractType}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              id="contractValue"
              label="Значение контакта сотрудника"
              name="contractValue"
              value={emplData.contractValue}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              id="loginGis"
              label="Логин в ГИС Капиталовложения"
              name="loginGis"
              value={emplData.loginGis}
              fullWidth
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              id="loginEsia"
              label="Логин в ЕСИА"
              name="loginEsia"
              value={emplData.loginEsia}
              fullWidth
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
