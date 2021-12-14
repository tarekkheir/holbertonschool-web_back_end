export default function getResponseFromAPI(promise) {
    promise.then((resolve) => {
        console.log('Got a response from the API');
    }, (reject) => {
        console.log('Got a response from the API');
    })
}
