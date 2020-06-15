import React from 'react';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },

    paper: {
        position: 'relative',
        height: 350,
        width: 350,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 40,
        '&:hover': {
            top: -3,
            left: -3,
            boxShadow: '3px 3px 6px 2px rgba(0,0,0,0.50)',
            '&::before': {
                content: '""',
                position: 'absolute',
                height: 6,
                top: 0,
                left: -1,
                right: -2,
                backgroundColor: '#3f51b5',
            },
        },
    },
    center: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '30px 0 30px 30px',
    },
    itemHeight: {
        height: 16,
    },

    marginBottom: {
        marginBottom: 12,
    },
}));

export default function Widget(props: any) {
    const classes = useStyles();
    const { label, link, tip, subNames = [], setErrorFired } = props;
    return (
        <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => {
                if (!link) {
                    setErrorFired(`Извините, модуль "${label}" еще не имплементирован.`);
                }
            }}
        >
            <div className={classes.center}>
                <div>
                    <RouterLink to={link || '/'} className={classes.link}>
                        <Tooltip title={tip}>
                            <Typography variant="h6" color="inherit" noWrap>
                                {label}
                            </Typography>
                        </Tooltip>
                    </RouterLink>

                    {subNames.length > 0 && (
                        <>
                            <Divider className={classes.marginBottom} />
                            {subNames.map((subName: string, index: number) => (
                                <List key={subName} component="nav" aria-label="sub item">
                                    <ListItem
                                        button
                                        component={RouterLink}
                                        to={`${link}/${index}`}
                                        className={classes.itemHeight}
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    variant="subtitle1"
                                                    color="primary"
                                                    noWrap
                                                >
                                                    {`${index + 1}. ${subName}`}
                                                </Typography>
                                            }
                                            className={classes.link}
                                        />
                                    </ListItem>
                                </List>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </Paper>
    );
}
