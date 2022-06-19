import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { successMessage, errorMessage } from "../../utils/Message";
import { decodeToken } from "../../utils/decodeToken";
import { addUser } from "../../actions/user";
import { loginUsers } from "../../services/pageService";
import { registerUser } from "../../services/pageService";
import { forgetpass } from "./../../services/pageService";

const ContextUser = ({ children }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [verifycode, setverifycode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [policy, setPolicy] = useState();

  const [, forceUpdate] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        min: "کمتر از 5 کاراکتر نباید باشد",
       
      },
      element: message =>
        <div style={{ color: "red" }}>
          {message}
        </div>
    })
  );

  const resetStates = () => {
    setFullname("");
    setMobile("");
    setPassword("");
    setConfirmPassword("");
    setPolicy();
  };

  const handleLogin = async event => {
    event.preventDefault();
    const user = { mobile, password };
    console.log(user);
    try {
      if (user) {
        const { status, data } = await loginUsers(user);
        if (status === 200) {
          successMessage("ورود موفقیت آمیز بود.");
          localStorage.setItem("token", data.token);
          dispatch(addUser(decodeToken(data.token).payload.user));

          navigate("/dash");
          resetStates();
        }
      } else {
        validator.current.showMessages();

        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
      dispatch(hideLoading());
      errorMessage("مشکلی پیش آمده.");
    }
  };

  const handleRegister = async event => {
    event.preventDefault();
    const user = {
      fullname,
      mobile,
      password,
      confirmPassword: confirmpassword
    };

    try {
      if (validator.current.allValid()) {
        const { status } = await registerUser(user);
        if (status === 201) {
          successMessage("کاربر با موفقیت ساخته شد.");

          navigate("../", { replace: true });
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      errorMessage("مشکلی در ثبت نام پیش آمده.");
      dispatch(hideLoading());
      console.log(ex);
    }
  };
  const handleVerify = async event => {
    event.preventDefault();
    const user = { mobile };
    const { status } = await forgetpass(user);
    if (status === 404) {
      errorMessage("شماره موبایل یافت نشد");
    }
    if (status === 200) {
      successMessage("کد ارسال شد");
    }
  };
  return (
    <UserContext.Provider
      value={{
        fullname,
        setFullname,
        email,
        setEmail,
        password,
        setPassword,
        setConfirmPassword,
        confirmpassword,
        policy,
        setPolicy,
        validator,
        handleLogin,
        handleRegister,
        mobile,
        setMobile,
        verifycode,
        setverifycode,
        handleVerify
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextUser;
