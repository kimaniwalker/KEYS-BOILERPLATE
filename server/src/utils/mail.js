import mailgunLoader from 'mailgun-js';
import { config } from '../config';


let mailgun = mailgunLoader({ apiKey: config.MAILGUN_API_KEY, domain:'sandboxbc2a8220421648b3bc7044e84d51c5fb.mailgun.org'});


function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    };
    console.log(data);
    return mailgun.messages().send(data);
    
}

export { sendEmail };