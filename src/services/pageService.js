
import  http from './httpService';
import config from "./config.json";
//Login api function

export const registerUser=(user)=> {
    return http.post(`${config.localapi}/api/login/register`,JSON.stringify(user));
};

export const loginUsers=(user)=> {
    return http.post(`${config.localapi}/api/login/logining`,JSON.stringify(user));
};
export const forgetpass=(user)=> {
    return http.post(`${config.localapi}/api/login/forget`,JSON.stringify(user));
};



   export const getGroupPage=()=> {
        return http.get(`${config.localapi}/api/GroupPage`);
    };
    export const getSingleGroup= (groupId) => {
        return http.get(`${config.localapi}/api/GroupPage/${groupId}`);
    };
   export const createGroupPage=(groupPage)=>{
        return http.post(`${config.localapi}/api/GroupPage`,groupPage);
    };
 export const deleteGroup=(groupId)=>{
        return http.delete(`${config.localapi}/api/GroupPage/${groupId}`);
    };
     export const updateGroup=(groupId,pageGroup)=>{
        return http.put(`${config.localapi}/api/GroupPage/${groupId}`,pageGroup);
    };

//api for cms Page

// export const getPage=(Id)=> {
//     return http.get(`${config.localapi}/api/page/getListPage/${Id}`);
// };
    export const createCmsPage=(Page,groupId)=>{
        return http.post(`${config.localapi}/api/page/addpage/${groupId}`,Page);
    };
    export const updatePage=(Id,PageId,page,select)=>{
        return http.put(`${config.localapi}/api/page/${Id}/${PageId}`,[page,select]);
    }; 
     export const DeletePage=(Id,PageId)=>{
        return http.delete(`${config.localapi}/api/page/${Id}/${PageId}`);
    };
    export const GetCommentPage=(Id,PageId)=>{
        return http.get(`${config.localapi}/api/page/CommentPage/${Id}/${PageId}`);
    };
    export const DeletedComment=(Id,PageId,CommentId)=>{
        return http.delete(`${config.localapi}/api/page/${Id}/${PageId}/${CommentId}`);
    };