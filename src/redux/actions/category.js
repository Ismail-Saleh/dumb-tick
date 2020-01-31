import axios from 'axios'
export const category=()=> {
    return{
        type: 'GET_CATEGORY',
        payload : axios.get('https://dumbtick-apis.herokuapp.com/api/v1/categories')
    }
}
