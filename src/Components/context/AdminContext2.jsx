import React, { useEffect, useState } from 'react';
import CreateGroupPage from '../PageGroup/create';

import DeletePageGroup from '../PageGroup/Delete';
import EditGroupPage from '../PageGroup/Update';
import { paginate } from '../../utils/paginate';
import CreatePage from '../Pages/create';
import EditePage from '../Pages/Update';
import DeletePage from '../Pages/Delete';
import { dashContext } from './dashContext';
import DeleteComment from '../Pages/CommentDelete';



const AdminContext2 = ({pageGroups,children,Pages}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10);
    const [currentGroup, setCurrentGroup] = useState({});
    const [newGroupDialog, setNewGroupDialog] = useState(false);
    const [newPageDialog, setNewPageDialog] = useState(false);
    const [editGroupDialog, setEditGroupDialog] = useState(false);
    const [deleteGroupDialog, setDeleteGroupDialog] = useState(false);
     const [editPageDialog, setEditPageDialog] = useState(false);
    const [deletePageDialog, setDeletePageDialog] = useState(false);
    const [deleteCommentDialog, setDeleteCommentDialog] = useState(false);
    const [search, setSearch] = useState("");
    const [GroupList, setGroupList] = useState([]);
    const [PageList, setPageList] = useState([]);
    const [Comment, setComment] = useState();

    



    const openNewGroupDialog = () => setNewGroupDialog(true);

    const closeNewCourseDialog = () => setNewGroupDialog(false);
    const openNewPageDialog = ( pageGroup) => {
        setNewPageDialog(true);
        
        setCurrentGroup(pageGroup);
    }

    const closeNewPageDialog = () => setNewPageDialog(false);

    const openEditGroupDialog = (pageGroup) => {
        setEditGroupDialog(true);
        setCurrentGroup(pageGroup);
    };
    const closeEditCourseDialog = () => setEditGroupDialog(false);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const openDeleteGroupDialog = (pageGroup) => {
        setDeleteGroupDialog(true);
        setCurrentGroup(pageGroup);
    };

    const closeDeleteCourseDialog = () => setDeleteGroupDialog(false);


    const openEditPageDialog = (pageGroupId,Pages) => {
        setEditPageDialog(true);
        setCurrentGroup(pageGroupId);
        setPageList(Pages);
    };
    const closeEditPageDialog = () => setEditPageDialog(false);
    
    const openDeletePageDialog = (pageGroupId,Pages) => {
        setDeletePageDialog(true);
        setPageList(Pages);
        setCurrentGroup(pageGroupId);
    };

    const closeDeletePageDialog = () => setDeletePageDialog(false);


    const openDeleteCommentDialog = (pageGroupId,Pages,comment) => {
        setDeleteCommentDialog(true);
        setPageList(Pages);
        setCurrentGroup(pageGroupId);
        setComment(comment)
    };

    const closeDeleteCommentDialog = () => setDeleteCommentDialog(false);


    const filteredGroup = GroupList.filter((group) =>
    group.GroupTitle.includes(search)
);

const groupData=paginate(filteredGroup,currentPage,perPage)
useEffect(() => setGroupList(pageGroups), [pageGroups]); 

    useEffect(() => setPageList(Pages), [Pages]);

    return ( 

        <dashContext.Provider value={{
            currentPage,
            perPage,
            handlePageChange,
            GroupList,
            openNewGroupDialog,
            openDeleteGroupDialog,
            openEditGroupDialog,
            openNewPageDialog,
            openDeletePageDialog,
            openEditPageDialog,
            openDeleteCommentDialog,
            setSearch,
            groupData,
            filteredGroup,
            PageList,
            Comment

           }}
        
    >
        <CreateGroupPage 
        showDialog={newGroupDialog}
        closeDialog={closeNewCourseDialog}
        pageGroup={currentGroup}/>
        <DeletePageGroup
        
        showDialog={deleteGroupDialog}
        closeDialog={closeDeleteCourseDialog}
        pageGroup={currentGroup}/>
      <EditGroupPage
      showDialog={editGroupDialog}
      closeDialog={closeEditCourseDialog}
      pageGroup={currentGroup}/>
      <CreatePage
      showDialog={newPageDialog}
      closeDialog={closeNewPageDialog}
      pageGroup={currentGroup}
 
      pages={PageList}/>
    
      <EditePage 
      
      showDialog={editPageDialog}
      closeDialog={closeEditPageDialog}
      pageGroupId={currentGroup}
      pages={PageList}/>
 
    
       <DeletePage
       showDialog={deletePageDialog}
       closeDialog={closeDeletePageDialog}
       pages={PageList}
       pageGroupId={currentGroup}/>
       <DeleteComment
        showDialog={deleteCommentDialog}
        closeDialog={closeDeleteCommentDialog}
        pageId={PageList}
       pageGroupId={currentGroup}
       commentId={Comment}
       />
    {children}
       

    </dashContext.Provider>

     );
}
 
export default AdminContext2;