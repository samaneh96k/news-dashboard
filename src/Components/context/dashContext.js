import { createContext } from "react";
export const dashContext = createContext({
    currentPage: 1,
    setCurrentPage: () => {},
    perPage: 5,
    currentGroup: {},
    setSearch: () => {},
    openNewGroupDialog: () => {},
    openEditGroupDialog: () => {},
    openDeleteGroupDialog: () => {},
    openNewPageDialog: () => {},
    handlePageChange: () => {},
    openDeleteCommentDialog:()=> {},
    openEditPageDialog: () => {},
    openDeletePageDialog: () => {},
    GroupList: [],
    alog: () => {},
    groupData: [],
    filteredCourses: [],
 
});