import React from 'react'
import Cms from './Cms';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (<BrowserRouter> <Cms/>
     <ToastContainer />
    </BrowserRouter> );
}
 
export default App;