import { createCmsPage, DeletedComment } from "../services/pageService";
import { successMessage } from './../utils/Message';
import { updatePage ,DeletePage} from './../services/pageService';


export const createNewPage = (Page,groupId)=>{
    return async (dispatch,getState) => {
        const pages=[...getState().Pages];
        // pages=[...Object.fromEntries(Page)]
        const {status,data}= await createCmsPage(Page,groupId);
        if (status === 201) successMessage("خبر با موفقیت ساخته شد");
        await dispatch({type:"ADD_PAGE",
        payload:[...pages]});
    }
}
export const handlePageUpdate=(Id,PageId,[UpdatePage,select])=>{
    return async (dispatch, getState) => {
        const pages = [...getState().Pages];
        const filteredPages = pages.filter(
            (page) => page._id !== PageId
        );
        console.log(UpdatePage,PageId)
        try {

            const { status ,data} = await updatePage(Id,PageId,[UpdatePage,select]);
              await dispatch({
                type: "UPDATE_PAGE",
                payload: [...filteredPages,data]
            });
             if (status === 200) successMessage(" خبر با موفقیت ویرایش شد.");
            
        } catch (error) {
            await dispatch({ type: "UPDATE_PAGE", payload: [...pages] });
     ;
        }}
}


export const handlePageDelete = (Id,PageId) => {
    return async (dispatch, getState) => {
        const pages = [...getState().Pages]; 
         const page = [...pages];
        const filteredPages = page.filter(
            (page) => page._id !==PageId
        );

        try {
            const { status ,data} = await DeletePage(Id,PageId);
            await dispatch({
                type: "DELETE_PAGE",
                payload: [...filteredPages]
            });

            if (status === 200) successMessage(" با موفقیت پاک شد.");
        } catch (ex) {
            await dispatch({ type: "DELETE_PAGE", payload: [...pages] });
        }
    };
};



export const handleCommentDelete = (pageGroupId,pageId,commentId) => {
    return async (dispatch, getState) => {
        const Singlepage = [...getState().singleGroup]; 
         const page = [...Singlepage];
  
        const filteredPages = page.filter(
            (p) => p._id ===pageId
        );
        const [commentFilter]=filteredPages.map(p=>p.PageComment.map(c=>c._id!==commentId).filter(d=>d===true));

        try {
            const { status ,data} = await DeletedComment(pageGroupId,pageId,commentId);
            await dispatch({
                type: "DELETE_COMMENT",
                payload: [...commentFilter]
            });

            if (status === 200) successMessage(" با موفقیت پاک شد.");

        } catch (ex) {
            await dispatch({ type: "DELETE_COMMENT", payload: {...Singlepage} });
        }
    };
};
