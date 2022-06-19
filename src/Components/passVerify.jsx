import React from 'react';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
const VerifyPass = () => {
    const loginContext = useContext(UserContext);

    const {
        mobile,
        verifycode,
        setverifycode,
        validator
    } = loginContext;
    return (  <div>
<p>کد تایید را وارد کنید</p>
<p>{mobile}</p>
<input type="text"
                                name="verifycode"
                                className="input-field"
                                placeholder="کد تایید"
                                aria-describedby="verifycode"
                                value={verifycode}
                                onChange={(e) => {
                                    setverifycode(e.target.value);
                                    validator.current.showMessageFor("verifycode");
                                }}
                            />
                            {validator.current.message(
                                "verifycode",
                                verifycode,
                                "required|min:5"
                            )}
                            <button className="btn btn-default"> ورود </button> 
                           
    </div>);
}
 
export default VerifyPass;