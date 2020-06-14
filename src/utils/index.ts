//http://localhost:8081/swagger-ui.html#

import { AnyAaaaRecord } from 'dns';

const baseUrl = 'http://localhost:8081';

export const getRequest = (url: string) => {
    return fetch(`${baseUrl}${url}`).then((response) => {
        return response.json();
    });
};

export const putRequest = (url: string, data: any) => {
    return fetch(`${baseUrl}${url}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((response) => {
        return response.json();
    });
};
