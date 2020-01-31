const initialState = {
    is_loading :false ,
    fetched : false,
    error  : null,
    data :[]
}

const category= (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_CATEGORY_PENDING':
            return {...state,is_loading:true,fetched:false}
     
        case 'GET_CATEGORY_FULFILLED':
            return {...state,is_loading:false,fetched:true, data:action.payload.data} 

        case 'GET_CATEGORY_REJECTED':
            return {...state,is_loading:false,error:action.payload}
     
    
        default:
            break;
    }
    
    return state;
}

export default category