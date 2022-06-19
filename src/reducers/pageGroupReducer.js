export const pageGroupReducer=(state=[],action)=>{
switch(action.type){

    case "INIT":
        return [...action.payload];
    case "ADD_GROUP":
        return [...action.payload];
    case "DELETE_GROUP":
        return [...action.payload];
    case "UPDATE_GROUP":
        return [...action.payload];
    default:
        return state;



}
}