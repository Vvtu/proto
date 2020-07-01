import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  footnote: {
    marginTop: '-25px',
  },
}));

export interface BUTTONS_BLOCK_PROPS_INTERFACE {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  isLast: boolean;
}

export default function ButtonsBlock(props: BUTTONS_BLOCK_PROPS_INTERFACE) {
  const classes = useStyles();
  const { activeStep, handleBack, handleNext, isLast } = props;

  return (
    <React.Fragment>
      <div className={classes.buttons}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} className={classes.button}>
            Назад
          </Button>
        )}
        <Button onClick={() => {}} className={classes.button} disabled>
          Отменить изменния
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="button"
          onClick={handleNext}
        >
          {isLast ? 'Подтвердить' : 'Сохранить'}
        </Button>
      </div>
      <Typography variant="body2" color="textSecondary" className={classes.footnote}>
        {'* - обязательные поля'}
      </Typography>
    </React.Fragment>
  );
}
