import axios from 'axios'
export const event=(eventDetail)=> {
    return{
        type: 'GET_EVENT',
        payload : axios.get(`https://dumbtick-apis.herokuapp.com/api/v1/event/${eventDetail}`)
    }
}



