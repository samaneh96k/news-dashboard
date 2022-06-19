import React, { useContext ,useEffect} from "react";
import { dashContext } from './../context/dashContext';
import Pagination from './../Common/Pagination';
import { Link } from 'react-router-dom';
import DetailsPage from './../Pages/Details';

const Details = () => {
    const context = useContext(dashContext);

    const {
        currentPage,
        perPage,
        handlePageChange,
        groupData,
        setSearch,
        filteredGroup,
        openNewGroupDialog,
            openEditCourseDialog,
            openDeleteCourseDialog,
            openNewPageDialog,
            openEditPageDialog,
            openDeletePageDialog,GroupList
           
    } = context;


    useEffect(()=>{

    },[groupData])
    return (


             <div className="rtl">
                   
                    <div className="row inline-block">
                     
                      <button
                            className="btn btn-primary"
                            onClick={() => {openNewGroupDialog()}}
                        >
                            <span
                                className="fa fa-plus"
                                style={{
                                    verticalAlign: "middle",
                                    marginLeft: "1em",
                                }}
                            ></span>
                            اضافه کردن گروه جدید
                        </button>
                     
                        <input
                            type="text"
                            placeholder="جستجوی "
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control"
                            style={{
                                width: "50%",
                                float: "left",
                                marginLeft: "2em",
                            }}
                        />
                    </div>
                    <DetailsPage/>
                  
                    <div className="navbar-fixed-bottom text-center footer">
                    <Pagination
                        totalCourse={filteredGroup.length}
                        currentPage={currentPage}
                        perPage={perPage}
                        onPageChange={handlePageChange}
                    />
                </div>
                            </div> 
      
        


        
        
    );
    
};

export default Details;
