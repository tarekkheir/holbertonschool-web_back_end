import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName), uploadPhoto(fileName)]);

  for (const result of results) {
    arr.push({ status: result.status, value: result.value || `Error: ${result.reason.message}` });
  }
  return arr;
}
