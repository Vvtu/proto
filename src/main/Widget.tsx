import React from 'react';
import Paper from '@material-ui/core/Paper';

import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    link: {
        textDecoration: "none",
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'start',
    },

    paper: {
        height: 200,
        width: 200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
}));

export default function Widget(prop: any) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <RouterLink to={prop.link} className={classes.link}>
                <Typography variant="h6" color="inherit" noWrap>
                    {prop.label}
                </Typography>
            </RouterLink>
        </Paper>
    );
}