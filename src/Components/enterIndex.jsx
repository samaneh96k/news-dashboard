import React from 'react';
import { NavLink } from 'react-router-dom';
const Index = () => {
    return (  <div>
<h5>خوش آمدید</h5>
        <NavLink to="/login">برای ورود به داشبورد کلیک کنید </NavLink>
    </div>);
}
 
export default Index;