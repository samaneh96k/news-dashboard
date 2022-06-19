export const pageCommentReducer=(state=[],action)=>{
    switch(action.type){
    
        case "GET_COMMENT":
            return [...action.payload];
        case "ADD_COMMENT":
            return [...action.payload];
        case "DELETE_COMMENT":
            return [...action.payload];
        case "UPDATE_COMMENT":
            return [...action.payload];
        default:
            return state;
    
    
    
    }
    }