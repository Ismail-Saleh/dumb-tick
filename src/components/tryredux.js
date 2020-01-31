import {createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import axios from 'axios'
import promise from 'redux-promise-middleware'
// reducer menggunakan initial state
const initialState = {
    fetching :false ,
    fetched : false,
    error  : null,
    category :[]
}

const reducer= function(state=initialState,action){
    switch (action.type) {
        case 'FETCH_CATEGORY_PENDING':
            return {...state,fetching:true,fetched:false}

        case 'FETCH_CATEGORY_FULFILLED':
                return {...state,fetching:false,fetched:true, category:action.payload}  

        case 'FETCH_CATEGORY_REJECTED':
                return {...state,fetching:false,error:action.payload}
    
        default:
            break;
    }
    
    return state;
}

// middleware
const middleware = applyMiddleware(logger, promise)
// store
const store = createStore(reducer,middleware)
// subscribe
store.subscribe(()=>{
    console.log('current log=', store.getState());
})
// dipatch
// store.dispatch((dispatch)=>     {

//     dispatch({type: 'FETCH_CATEGORY_PENDING'});
//     axios.get('http://localhost:5000/api/v1/category').then((response)=>{
//         dispatch ({type : 'FETCH_CATEGORY_FULLFILLED',payload : response.data});
//     })
//     .catch((err)=>{
//         dispatch ({type : 'FETCH_CATEGORY_REJECTED',payload:err});
//     })

// });


// dispatch dengan promise middleware
store.dispatch({
    type: 'FETCH_CATEGORY',
    payload : axios.get('http://localhost:5000/api/v1/categories')
})