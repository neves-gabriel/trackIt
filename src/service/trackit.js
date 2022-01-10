import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postSignUp (body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body)
    return promise;
}

function postLogIn (body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body)
    return promise;
}

function postCreateHabit (token, body) {
    const config = { headers: { "Authorization": 'Bearer ' + token } };
    const promise = axios.post(`${BASE_URL}/habits`, body, config)
    return promise;
}

function getHabits (token) {
    const config = { headers: { "Authorization": 'Bearer ' + token } };
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

function deleteHabit (token, habitID) {
    const config = { headers: { "Authorization": `Bearer ${token}` } }
	const promise = axios.delete(`${BASE_URL}/habits/${habitID}`, config);
	return promise;
}

function getTodayHabits (token) {
    const config = { headers: { "Authorization": 'Bearer ' + token } };
    const promise = axios.get(`${BASE_URL}/habits/today`, config)
    return promise;
}

function checkHabit (token, habitID) {
    const config = { headers: { "Authorization": `Bearer ${token}` } };
	const promise = axios.post(`${BASE_URL}/habits/${habitID}/check`, "", config);
	return promise;
}

function uncheckHabit (token, habitID) {
    const config = { headers: { "Authorization": `Bearer ${token}` } };
	const promise = axios.post(`${BASE_URL}/habits/${habitID}/uncheck`, "", config);
	return promise;
}

function getHabitsHistory () {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`)
    return promise;
}

export {
    postSignUp,
    postLogIn,
    postCreateHabit,
    getHabits,
    deleteHabit,
    getTodayHabits,
    checkHabit,
    uncheckHabit,
    getHabitsHistory
}