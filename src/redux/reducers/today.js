const initialState = {
    is_loading :false ,
    fetched : false,
    error  : null,
    dataToday :[],
    dataTommorow :[]
}

const today= (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_TODAY_PENDING':
            return {...state,is_loading:true,fetched:false}
     
        case 'GET_TODAY_FULFILLED':
            return {...state,is_loading:false,fetched:true, dataToday:action.payload.data} 

        case 'GET_TODAY_REJECTED':
            return {...state,is_loading:false,error:action.payload}

            // Tommorow
            case 'GET_TOMMOROW_PENDING':
                return {...state,is_loading:true,fetched:false}
         
            case 'GET_TOMMOROW_FULFILLED':
                return {...state,is_loading:false,fetched:true, dataTommorow:action.payload.data} 
    
            case 'GET_TOMMOROW_REJECTED':
                return {...state,is_loading:false,error:action.payload}
         
        
        default:
            break;
    }
    
    return state;
}

export default today