import axios from 'axios'
export const payment=(paymentPost)=> {
    return{
        type: 'GET_PAYMENT',
        payload : axios.get(`https://dumbtick-apis.herokuapp.com/api/v1/order/${paymentPost}`)
    }
}