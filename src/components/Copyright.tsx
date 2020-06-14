
import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://zachestnyibiznes.ru/company/ul/1177700019023_9710040879_ANO-ITR">
                АНО ИТР
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}