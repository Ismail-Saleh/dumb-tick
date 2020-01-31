import axios from 'axios'
export const myTiket=(ticket)=>{
    return{
        type: "GET_TICKET",
        payload : axios.get(`https://dumbtick-apis.herokuapp.com/api/v1/myTicket/${ticket}`)
    }
}