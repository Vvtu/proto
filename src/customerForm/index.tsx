import React from 'react';
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
import Employees from './employees';
import PaymentDetails from './PaymentDetails';
import Review from './Review';
import Copyright from '../components/Copyright';
import TopBar from '../components/TopBar';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: 0,
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
}));


export const customerFormSteps = ['Регистрация', 'Адреса', 'Контакты', 'Сотрудники', 'Владельцы', 'Платежные реквизиты', 'Полный список'];

const Emps = () => <Employees name={"Сотрудники"} />;
const Holders = () => <Employees name={"Владельцы"} />;

const FormsArray = [CompanyRegisterInfo, AddressForm, Contacts, Emps, Holders, PaymentDetails, Review];

export const CUSTOMER_FORM = '/customer-form/:step?';

type PROPS_TYPE = {
    history: any;
    match: {
        params: { step?: string; };
    }
};
export default function CustomerForm(props: PROPS_TYPE) {
    const classes = useStyles();
    const { history, match: { params } } = props;
    const activeStep = parseInt(params.step || '0', 10);

    const setActiveStep = (step: number) => {
        const path = generatePath(CUSTOMER_FORM, {
            ...params,
            step
        });
        history.push(path);
    }
    console.log('activeStep  = ', activeStep)

    const [completed, setCompleted] = React.useState(new Set<number>());

    const handleNext = () => {
        const newCompleted = new Set([...completed]);
        newCompleted.add(activeStep);
        setCompleted(newCompleted);
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const Content = FormsArray[activeStep];
    if (!Content) {
        throw new Error(`Component not implemented for step =${activeStep}`)
    }
    return (
        <React.Fragment>
            <TopBar />

            <main>

                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        ОРП форма
          </Typography>
                    <Stepper nonLinear activeStep={activeStep} className={classes.stepper}>
                        {customerFormSteps.map((label, index) => (
                            <Step key={label}>
                                <StepButton onClick={handleStep(index)}
                                    completed={completed.has(index)}
                                >
                                    {label}
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