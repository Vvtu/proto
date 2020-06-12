import React from 'react';
import Paper from '@material-ui/core/Paper';

import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    link: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },

    paper: {
        height: 300,
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        marginRight: 40,
        marginBottom: 40,
    },
}));

export default function Widget(props: any) {
    const classes = useStyles();
    const { label, link, tip } = props;
    return (
        <Paper className={classes.paper}>
            <RouterLink to={link} className={classes.link}>
                <Tooltip title={tip} >

                    <Typography variant="h6" color="inherit" noWrap>
                        {label}
                    </Typography>
                </Tooltip>

            </RouterLink>
        </Paper>
    );
}