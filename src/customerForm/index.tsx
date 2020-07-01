import React, { useCallback } from 'react';
import { generatePath } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Typography from '@material-ui/core/Typography';

import CompanyRegisterInfo from './CompanyRegisterInfo';
import AddressForm from './AddressForm';
import Contacts from './Contacts';
import Employees from './Employees';
import PaymentDetails from './PaymentDetails';
import Review from './Review';
import Copyright from '../components/Copyright';
import TopBar from '../components/TopBar';
import Stub from '../components/Stub';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 0,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    width: '100%',
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
}));

const Holders = () => <Stub name={'Владельцы'} />;

const FormsArray = [
  { title: 'Регистрация', component: CompanyRegisterInfo },
  { title: 'Адреса', component: AddressForm },
  { title: 'Контакты', component: Contacts },
  { title: 'Сотрудники', component: Employees },
  { title: 'Владельцы', component: Holders },
  { title: 'Платежные реквизиты', component: PaymentDetails },
  { title: 'Полный список', component: Review },
];

export const customerFormSteps = FormsArray.map((item) => item.title);

export const CUSTOMER_FORM = '/customer-form/:step?';

type PROPS_TYPE = {
  history: {
    push: (path: string) => void;
  };
  match: {
    params: { step?: string };
  };
};
export default function CustomerForm(props: PROPS_TYPE) {
  const classes = useStyles();
  const {
    history,
    match: { params },
  } = props;
  const activeStep = parseInt(params.step || '0', 10);

  const setActiveStep = useCallback(
    (step: number) => {
      const path = generatePath(CUSTOMER_FORM, {
        ...params,
        step,
      });
      history.push(path);
    },
    [history, params],
  );

  console.log('CustomerForm activeStep = ', activeStep);

  const [completed, setCompleted] = React.useState(new Set<number>());

  const handleNext = useCallback(() => {
    const newCompleted = new Set([...completed]);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);
    setActiveStep(activeStep + 1);
  }, [activeStep, completed, setActiveStep]);

  const handleBack = (): void => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = (step: number) => (): void => {
    setActiveStep(step);
  };

  const Content = FormsArray[activeStep].component;
  if (!Content) {
    throw new Error(`Component not implemented for step =${activeStep}`);
  }
  return (
    <React.Fragment>
      <TopBar />

      <main>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            ОРП (Отдел по работе с клиентами)
          </Typography>
          <Stepper nonLinear activeStep={activeStep} className={classes.stepper}>
            {FormsArray.map(({ title }, index) => (
              <Step key={title}>
                <StepButton onClick={handleStep(index)} completed={completed.has(index)}>
                  {title}
                </StepButton>
              </Step>
            ))}
          </Stepper>

          <Content
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            isLast={activeStep === customerFormSteps.length - 1}
          />
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
