import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()]).then((values) => {
        const body = values[0]['body']
        const firstName = values[1]['firstName']
        const lastName = values[1]['lastName']
        console.log(`${body} ${firstName} ${lastName}`);
    }).catch(() => console.log('Signup system offline'));
}
