const initialState = {
    is_loading :false ,
    fetched : false,
    error  : null,
    dataPayment :[]
}

const event= (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_PAYMENT_PENDING':
            return {...state,is_loading:true,fetched:false}
     
        case 'GET_PAYMENT_FULFILLED':
            return {...state,is_loading:false,fetched:true, dataPayment:action.payload.data} 

        case 'GET_PAYMENT_REJECTED':
            return {...state,is_loading:false,error:action.payload}
     
    
        default:
            break;
    }
    
    return state;
}

export default event