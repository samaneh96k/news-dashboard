import React from 'react';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { NavLink } from 'react-router-dom';
const ForgetPass = () => {
    const loginContext = useContext(UserContext);

    const {
        mobile,
        setMobile,
        handleVerify,
        validator
    } = loginContext;
    return (  <div>
<p>شماره تماس خودرا وارد کنید</p>
<form onSubmit={(e) => handleVerify(e)}>
<input type="text"
                                name="mobile"
                                className="input-field"
                                placeholder="موبایل"
                                aria-describedby="mobile-phone"
                                value={mobile}
                                onChange={(e) => {
                                    setMobile(e.target.value);
                                    validator.current.showMessageFor("mobile");
                                }}
                            />
                            {validator.current.message(
                                "mobile",
                                mobile,
                                "required|min:10"
                            )}
                          <button type="submit">
                             ارسال کد 
                               </button> 
                            </form>
                           
    </div>);
}
 
export default ForgetPass;