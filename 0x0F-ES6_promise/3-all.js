import uploadPhoto from './utils'
import createUser from './utils'

export default function handleProfileSignup() {
    Promise.all([uploadPhoto, createUser]).then((values) => {
        console.log(values[0] + values[1]);
    }).catch(() => console.log('Signup system offline'));
}
