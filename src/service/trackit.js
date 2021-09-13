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

function postCreateHabit (body, config) {
    const promise = axios.post(`${BASE_URL}/habits`, body, config)
    return promise;
}

function getHabits (config) {
    const promise = axios.get(`${BASE_URL}/habits`, config)
    return promise;
}

function deleteHabit (habitIDEliminate, config) {
    const promise = axios.delete(`${BASE_URL}/habits/${habitIDEliminate}`, config)
    return promise;
}

function getTodayHabits (config) {
    const promise = axios.get(`${BASE_URL}/habits/today`, config)
    return promise;
}

function checkHabit (habitId) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`)
    return promise;
}

function uncheckHabit (habitId) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`)
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