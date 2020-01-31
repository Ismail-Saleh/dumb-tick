import axios from 'axios'
export const today=()=> {
    return{
        type: 'GET_TODAY',
        payload : axios.get('https://dumbtick-apis.herokuapp.com/api/v1/events')
    }
}

export const tommorow=()=>{
    return{
        type    : 'GET_TOMMOROW',
        payload : axios.get('https://dumbtick-apis.herokuapp.com/api/v1/tomorow')
    }
}