export const GroupReducer=(state=[],action)=>{
    switch(action.type){
    
        case "GET_GROUP":
            return [...action.payload];
        case "DELETE_COMMENT":
                return [...action.payload];
        default:
            return state;
    
    
    
    }
    }