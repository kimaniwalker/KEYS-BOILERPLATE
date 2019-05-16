import * as baseService from './base';

async function postCharge(token, amount) {
    let response = await baseService.makeFetch('/api/donate', {
        method: 'POST',
        body: JSON.stringify({ token, amount }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    let contentType = response.headers.get('Content-Type');

    if (contentType.indexOf('application/json') > -1) {
        return response.json();
    }
    return response.statusText;
}

export { postCharge };