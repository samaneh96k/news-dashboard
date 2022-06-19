
import { successMessage } from './../utils/Message';
import { createGroupPage, getGroupPage,
     deleteGroup, updateGroup } from './../services/pageService';

export const getAllGroupPages =()=>{
    return async (dispatch) => {
        const {status,data}= await getGroupPage();
        await dispatch({type:"INIT",payload:data.groups});
    };
};




export const createNewGroupPage = (groupPage)=>{
    return async (dispatch,getState) => {
     
        const {status,data}= await createGroupPage(groupPage);
        const Groups = [...getState().pageGroups];
        successMessage("گروه با موفقیت ساخته شد");
        await dispatch({type:"ADD_GROUP",
        payload: [...Groups,data]});
    }
}
export const handleGroupDelete = (GroupId) => {
    return async (dispatch, getState) => {
        const Groups = [...getState().pageGroups];
        const filteredgroups = Groups.filter(
            (Group) => Group._id !== GroupId
        );

        try {
            await dispatch({
                type: "DELETE_GROUP",
                payload: [...filteredgroups],
            });
            const { status } = await deleteGroup(GroupId);

            if (status === 200) successMessage("گروه خبری با موفقیت پاک شد.");
        } catch (ex) {
            await dispatch({ type: "DELETE_GROUP", payload: [...Groups] });
        }
    };
};
export const handleGroupUpdate=(GroupId,updategroup)=>{
    return async (dispatch, getState) => {
        const Groups = [...getState().pageGroups];
        const filteredgroups = Groups.filter(
            (Group) => Group._id !== GroupId
        );

        try {
            const {status,data} = await updateGroup(GroupId,updategroup);
  
            await dispatch({
                type: "UPDATE_GROUP",
                payload: [...filteredgroups,data.data]
            });
            if (status === 200) successMessage("'گروه خبری' با موفقیت ویرایش شد.");
        } catch (error) {
            await dispatch({ type:"UPDATE_GROUP", payload: [...Groups] });
            console.log(
                "oooooo"
            )
        }}
}