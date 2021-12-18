export default function getResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .then(() => console.log('Got a response from the API'));
}
