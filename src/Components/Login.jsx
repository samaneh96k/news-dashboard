import React from 'react';
import "../loginStyle.css";
import { useContext, useState } from 'react';
import { UserContext } from './context/UserContext';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [loginn, setLogin] = useState("login");
  const [registerr, setRegister] = useState("register");
  const [btn, setBtn] = useState("btnLogin");

  const loginContext = useContext(UserContext);

  const {
    mobile,
    setMobile,
      handleLogin,
      fullname,
      setFullname,
      
      password,
      confirmpassword,
      setPassword,
      setConfirmPassword,
    
      handleRegister,
      validator
  } = loginContext;
  const register=()=>{
    setLogin("login2");
    setRegister("register2");
    setBtn("btnLogin2");
    }
 const login=()=>{
      setLogin("login");
    setRegister("register");
    setBtn("btnLogin");
    }
    return ( 


        <div className="hero rtl">
        <div className="form-box">
          <div className="button-box">
            <div className={btn} ></div>
            <button type="button" className="toggle-btn" onClick={login}>ورود</button>
            <button type="button" className="toggle-btn" onClick={register}>ثبت نام</button>
          </div>
          <div className="social-icons">
           <a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/rmj1tdKw/fb.png" alt="fb"/></a>
           <a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/L57ZzjR2/tw.png" alt="tw"/></a>
          <a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/kG5xNnbF/gp.png" alt="gp"/></a>
          </div>
          <form className={`${loginn} form-groupp`} onSubmit={(e) => handleLogin(e)}>
            <input  type="text"
                                name="mobile"
                                className="input-field"
                                placeholder="موبایل"
                                aria-describedby="mobile" 
                                 value={mobile}
                                onChange={(e) => {
                                    setMobile(e.target.value);
                                    validator.current.showMessageFor("mobile");
                                }}/>
                                 {validator.current.message(
                                "mobile",
                                mobile,
                                "required|min:10"
                            )}
            <input  type="password"
                                name="password"
                                className="input-field"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor(
                                        "password"
                                    );
                                }}/>
                                   {validator.current.message(
                                "password",
                                password,
                                "required|min:5"
                            )}
                            <NavLink to="/forgetpass">رمز خود را فراموش کردم</NavLink>
            <input type="checkbox" className="check-box"/><span>به خاطر بسپار</span>
            <button type="submit" className="submmit-btn">ورود</button>
          </form> 
          <form  className={`${registerr} form-groupp`}  onSubmit={(e) => handleRegister(e)}>
            <input  type="text"
                                name="fullname"
                                className="input-field"
                                placeholder="نام و نام خانوادگی"
                                aria-describedby="username"
                                value={fullname}
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                    validator.current.showMessageFor(
                                        "fullname"
                                    );
                                }}/>
                                {validator.current.message(
                                "fullname",
                                fullname,
                                "required|min:5"
                            )}
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



            <input  type="password"
                                name="password"
                                className="input-field"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor(
                                        "password"
                                    );
                                }}
                            />
                            {validator.current.message(
                                "password",
                                password,
                                "required|min:5"
                            )}
                             <input  type="password"
                                name="ConfirmPassword"
                                className="input-field"
                                placeholder="تکرار رمز عبور "
                                aria-describedby="ConfirmPassword"
                                value={confirmpassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    validator.current.showMessageFor(
                                        "ConfirmPassword"
                                    );
                                }}
                            />
                            {validator.current.message(
                                "ConfirmPassword",
                                confirmpassword,
                                "required|min:5"
                            )}
            
            <button type="submit" className="submmit-btn">Register</button>
          </form>
        </div>
      
      </div> 
      
     );
}
 
export default Login;