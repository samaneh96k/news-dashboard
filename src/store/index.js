
import {createStore,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './../reducers/index';
import { getAllGroupPages } from './../actions/groupPage';
import { loadingBarMiddleware } from 'react-redux-loading-bar';


  export const store=createStore(
    reducers,compose(applyMiddleware(thunk,loadingBarMiddleware()),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    store.subscribe(()=>console.log(store.getState()))
  store.dispatch(getAllGroupPages());