const initialState = {
    is_loading :false ,
    fetched : false,
    error  : null,
    dataTicket :[]
}

const myTiket= (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_TICKET_PENDING':
            return {...state,is_loading:true,fetched:false}
     
        case 'GET_TICKET_FULFILLED':
            return {...state,is_loading:false,fetched:true, dataTicket:action.payload.data} 

        case 'GET_TICKET_REJECTED':
            return {...state,is_loading:false,error:action.payload}
     
    
        default:
            break;
    }
    
    return state;
}

export default myTiket