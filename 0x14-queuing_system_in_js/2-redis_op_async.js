import { createClient, print } from 'redis';
import { promisify } from 'util';

const client = createClient();
const getAsync = promisify(client.get).bind(client);

client.connect();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err.message}`);
});


function setNewSchool(schoolName, value) {
    client.set(schoolName, value, print);
}

async function displaySchoolValue(schoolName) {
    console.log(await getAsync(schoolName));
}

(async () => {
    await displaySchoolValue('Holberton');
    setNewSchool('HolbertonSanFrancisco', '100');
    await displaySchoolValue('HolbertonSanFrancisco');
})
