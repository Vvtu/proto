import React from 'react';
import { generatePath } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
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
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    footnote: {
        marginTop: "-25px"
    }
}));


export const customerFormSteps = ['Регистрация', 'Адреса', 'Контакты', 'Сотрудники', 'Владельцы', 'Платежные реквизиты', 'Полный список'];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <CompanyRegisterInfo />;
        case 1:
            return <AddressForm />;
        case 2:
            return <Contacts />;
        case 3:
            return <Employees name={"Сотрудники"} />;
        case 4:
            return <Employees name={"Владельцы"} />;
        case 5:
            return <PaymentDetails />;
        case 6:
            return <Review />;
        default:
            throw new Error(`Unknown step = ${step}`);
    }
}
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

    function Footnote() {
        return (
            <Typography variant="body2" color="textSecondary" className={classes.footnote}>
                {'* - обязательные поля'}
            </Typography>
        );
    }

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
                    <React.Fragment>
                        {activeStep === customerFormSteps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                </Typography>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>

                                    {getStepContent(activeStep)}

                                    <div className={classes.buttons}>

                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                Назад
                                            </Button>
                                        )}
                                        <Button onClick={() => { }} className={classes.button} disabled>
                                            Отменить изменния
                                            </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === customerFormSteps.length - 1 ? 'Подтвердить' : 'Сохранить'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                    <Footnote />

                </Paper>
                <Copyright />
            </main>
        </React.Fragment>
    );
}