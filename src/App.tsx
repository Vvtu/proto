import React from 'react';
import TopBar from "./components/TopBar"

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
}));


export default function App() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TopBar />

        </React.Fragment>
    );
}