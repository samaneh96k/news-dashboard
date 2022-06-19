import React, { useContext ,useEffect} from "react";
import { dashContext } from './../context/dashContext';
import Pagination from './../Common/Pagination';
import { Link, NavLink } from 'react-router-dom';

const DetailsPage = () => {
    const context = useContext(dashContext);

    const {
     
        groupData,
    
        openEditGroupDialog,
        openDeleteGroupDialog,
            openNewPageDialog,
            
           
    } = context;


    useEffect(()=>{

    },[groupData])
    return (


             <div className="rtl">
                   
                
                    <table className="table">
                        <thead>
                            <tr>
                             
                                 <th scope="col">عنوان خبر</th>
                                <th scope="col">ویرایش</th>
                                <th scope="col">حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupData.map(PageGroup => (
                                <tr key={PageGroup._id}>
                                                                      <td>
{PageGroup.GroupTitle}
                                    </td>
                          
                       <td>
                       <button type="button" className="btn btn-warning" 
                                   onClick={() =>
                                               openEditGroupDialog(PageGroup)
                                               }>ویرایش</button>
                    </td>
                    <td>
                    <button className="btn btn-danger"  
                                    onClick={() =>
                                                openDeleteGroupDialog(PageGroup)
                                            }>حذف</button>
                                    </td>
                                    <td><button className="btn btn-info"  
                                    onClick={() =>
                                        openNewPageDialog(PageGroup._id)
                                            }>افزودن خبر</button></td>
                                            {PageGroup.Pages.length>0?
                                            <td><NavLink to={`/pagenews/${PageGroup._id}`}  
                                            className="btn btn-success">مشاهده اخبار</NavLink></td>
                                            : <td> <label className="btn btn-danger"> خبری ثبت نشده است</label></td>}
                                </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <div className="navbar-fixed-bottom text-center footer">
                  
                </div>
                            </div> 
      
        


        
        
    );
    
};

export default DetailsPage;
