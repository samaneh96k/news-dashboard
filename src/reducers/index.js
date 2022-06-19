import {combineReducers} from "redux";
import { GroupReducer } from "./GroupReducer";
import { pageGroupReducer } from './pageGroupReducer';
import { pageReducer } from './pageReducer';
import { userReducer } from './userReducer';


export const reducers=combineReducers({
    pageGroups:pageGroupReducer,
   singleGroup:GroupReducer,
    Pages:pageReducer,
    user:userReducer

  
});