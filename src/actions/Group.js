import { getSingleGroup } from "../services/pageService";

export const getSingleGroupPage = GroupId => {

    return async dispatch => {
      const res=  await getSingleGroup(GroupId);
        await dispatch({ type:"GET_GROUP",payload: res.data});
    };
};