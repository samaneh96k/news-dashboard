
import React, { useEffect } from "react";

import { useDispatch, useSelector} from "react-redux";
import {
    
    Routes,
    Navigate,
    Route,
    
} from "react-router-dom";
import {
  
    useNavigate,
  
  } from "react-router-dom";

import NotFound from './../Components/NotFound';
import Details from './../Components/PageGroup/Details';
import { isEmpty } from "lodash";
import AdminContext2 from './../Components/context/AdminContext2';
import PegesCms from './../Components/Pages/index';
import CommentPage from './../Components/Pages/Comment';
import { decodeToken } from './../utils/decodeToken';
import { clearUser } from "../actions/user";
import { addUser } from './../actions/user';
import Login from './../Components/Login';
import Index from "../Components/enterIndex"
import ContextUser from "../Components/context/ContextUser";
import ForgetPass from './../Components/forgetPass';
import VerifyPass from './../Components/passVerify';





const Cms = () => {


    
    const Detailsgroups=useSelector((state)=>state.pageGroups);    
    const DetailsPages=useSelector((state)=>state.Pages);
    const user = useSelector((state) => state.user);
    const navigate=useNavigate();
    useEffect(() =>{}, [DetailsPages]) 
    useEffect(() =>{}, [Detailsgroups])
    const dispatch= useDispatch();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            const dateNow = Date.now() / 1000;

            if (decodedToken.payload.exp < dateNow) {
                localStorage.removeItem("token");
                dispatch(clearUser());
            } else dispatch(addUser(decodedToken.payload.user));
        }
    }, []);

    useEffect(() => {
        if (!user){
           return navigate("/");
        }
     },[user]);
    return ( 
<Routes>
   
 {/* <Route path="/" element={<Index/>}></Route> */}
 <Route path="/login" element={<ContextUser><Login/></ContextUser>}/>
 <Route path="/forgetpass" element={<ContextUser><ForgetPass/></ContextUser>}/>
 <Route path="/verifypass" element={<ContextUser><VerifyPass/></ContextUser>}/>
  <Route path="/"  element={<AdminContext2 pageGroups={Detailsgroups} Pages={DetailsPages}>
                                    <Details/></AdminContext2>}></Route>
 <Route path="/pagenews/:id" element={<AdminContext2 pageGroups={Detailsgroups} Pages={DetailsPages}><PegesCms /></AdminContext2>}></Route>
 <Route path="/pagenews/commentpage/:id/:Pageid" element={<AdminContext2 pageGroups={Detailsgroups} Pages={DetailsPages}><CommentPage  /></AdminContext2>}></Route>
 <Route path="*" element={   <NotFound/>} />
</Routes>
    )
    

}
 
export default Cms;
{/* {isEmpty(user)?
 <Route path="/dash" element={<Navigate replace to="/login" />} />: */}