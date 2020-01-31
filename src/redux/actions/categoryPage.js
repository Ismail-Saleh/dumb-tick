import axios from 'axios'
export const category=(Idcategory)=> {
    return{
        type: 'GET_CATEGORY',
        payload : axios.get(`https://dumbtick-apis.herokuapp.com/api/v1/category/${Idcategory}/events`)
    }
}