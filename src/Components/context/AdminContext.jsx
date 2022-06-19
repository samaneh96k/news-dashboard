import React, { useEffect, useState } from 'react';
import CreateGroupPage from './../PageGroup/create';

import DeletePageGroup from './../PageGroup/Delete';
import EditGroupPage from './../PageGroup/Update';
import { paginate } from './../../utils/paginate';
import CreatePage from './../Pages/create';
import EditePage from './../Pages/Update';
import DeletePage from './../Pages/Delete';
import Details from './../PageGroup/Details';
import { dashContext } from './dashContext';


const AdminContext = ({pageGroups,children,Pages}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10);
    const [currentGroup, setCurrentGroup] = useState({});
    const [newCourseDialog, setNewCourseDialog] = useState(false);
    const [newPageDialog, setNewPageDialog] = useState(false);
    const [editCourseDialog, setEditCourseDialog] = useState(false);
    const [deleteCourseDialog, setDeleteCourseDialog] = useState(false);
     const [editPageDialog, setEditPageDialog] = useState(false);
    const [deletePageDialog, setDeletePageDialog] = useState(false);
    const [search, setSearch] = useState("");
    const [GroupList, setGroupList] = useState([]);
    const [PageList, setPageList] = useState([]);

    



    const openNewCourseDialog = () => setNewCourseDialog(true);

    const closeNewCourseDialog = () => setNewCourseDialog(false);
    const openNewPageDialog = (pageGroup) => {
        setNewPageDialog(true);
        
        setCurrentGroup(pageGroup);
    }

    const closeNewPageDialog = () => setNewPageDialog(false);

    const openEditCourseDialog = (pageGroup) => {
        setEditCourseDialog(true);
        setCurrentGroup(pageGroup);
    };
    const closeEditCourseDialog = () => setEditCourseDialog(false);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const openDeleteCourseDialog = (pageGroup) => {
        setDeleteCourseDialog(true);
        setCurrentGroup(pageGroup);
    };

    const closeDeleteCourseDialog = () => setDeleteCourseDialog(false);
    const openEditPageDialog = (pageGroup,Pages) => {
        setEditPageDialog(true);
        setCurrentGroup(pageGroup);
        setPageList(Pages);
    };
    const closeEditPageDialog = () => setEditPageDialog(false);
    const openDeletePageDialog = (pageGroup,Pages) => {
        setDeletePageDialog(true);
        setPageList(Pages);
        setCurrentGroup(pageGroup);
    };

    const closeDeletePageDialog = () => setDeletePageDialog(false);
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
            openNewCourseDialog,
            openEditCourseDialog,
            openDeleteCourseDialog,
            openNewPageDialog,
            openDeletePageDialog,
            openEditPageDialog,
            setSearch,
            groupData,
            filteredGroup,
            PageList

           }}
        
    >
        <CreateGroupPage 
        showDialog={newCourseDialog}
        closeDialog={closeNewCourseDialog}
        pageGroup={currentGroup}/>
        <DeletePageGroup
        
        showDialog={deleteCourseDialog}
        closeDialog={closeDeleteCourseDialog}
        pageGroup={currentGroup}/>
      <EditGroupPage
      showDialog={editCourseDialog}
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
      pageGroup={currentGroup}
      pages={PageList}/>
    
     
    
       <DeletePage
       showDialog={deletePageDialog}
       closeDialog={closeDeletePageDialog}
       pages={PageList}
       pageGroup={currentGroup}/>
       <Details/>
       

    </dashContext.Provider>

     );
}
 
export default AdminContext ;