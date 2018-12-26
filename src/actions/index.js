import axios from 'axios';
const URL = 'http://localhost:3004';

export function artistsListAll(){
    
    const request = axios.get(`${URL}/artists?_limit=6`)
    .then(response => response.data)
    
    return{
        type: "GET_ARTISTS_ALL",
        payload: request 
    }
}

export function artistsList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`).then(
        response => response.data
    );

    return {
        type: "GET_ARTISTS",
        payload: request
    }
}
export function artistDetail(id){
    const request = axios.get(`${URL}/artists?id=${id}`).then(
        response => response.data
    );

    return {
        type: "GET_ARTISTS_DETAIL",
        payload: request
    }
}

export function listaction(){
    const request = axios.get(`${URL}/artists`)
    .then(response => response.data);
    return {
        type: "LIST_ACTION",
        payload: request
    }
}

export function photoAction(){
    const request = axios.get(`${URL}/artists`)
    .then(response => response.data);
    return {
        type: "PHOTO",
        payload: request
    }
}

export function albumList(){
    const request = axios.get(`${URL}/artists`)
    .then(response => response.data);
    return {
        type: "ALBUM",
        payload: request
    }
}

export function mixaction(){
    const request = axios.get(`${URL}/artists`).then(response => response.data);
    return {
        type: 'MIX',
        payload: request
    }
}
export function practiceAction(){
    const request = axios.get(`${URL}/artists`).then( response => response.data);
    return {
        type: "PRACTICE",
        payload: request
    }
}
export function lastAction(){
    const req = axios.get(`${URL}/artists`).then(response => response.data);
    return{
        type: "LAST",
        payload: req
    }
}
export function practiceActionOne(){
    const request = axios.get(`${URL}/artists`).then( response => response.data);
    return {
        type: "PRACTICE_ONE",
        payload: request
    }
}