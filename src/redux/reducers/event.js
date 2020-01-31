const initialState = {
    is_loading :false ,
    fetched : false,
    error  : null,
    dataEvent :[]
}

const event= (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_EVENT_PENDING':
            return {...state,is_loading:true,fetched:false}
     
        case 'GET_EVENT_FULFILLED':
            return {...state,is_loading:false,fetched:true, dataEvent:action.payload.data} 

        case 'GET_EVENT_REJECTED':
            return {...state,is_loading:false,error:action.payload}
     
    
        default:
            break;
    }
    
    return state;
}

export default event