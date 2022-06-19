import React from 'react';
import { useSelector } from 'react-redux';
import { dashContext } from './../context/dashContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
const CommentPage = () => {


    const group=useSelector(state=>state.singleGroup) 
   

    const {id,Pageid}=useParams();

    const context = useContext(dashContext);

    const {
    
            openDeleteCommentDialog
    } = context;

    return ( <div className="rtl">


<table className="table">
     
    
     <thead>
       <tr>
        
        
             <th scope="col"> نام</th>
             <th scope="col"> ایمیل</th>
             <th scope="col"> نظر</th>
             <th scope="col"> تاریخ ثبت</th>
           <th scope="col">حذف</th>
       </tr>
   </thead>
   {
          group.map(Page=>Page.PageComment.map(c=>

   <tbody>
       <tr key={Page._id}>
          
           <td scope="col">{c.name}</td>
           <td scope="col">{c.Email}</td>
           <td scope="col">{c.Comment}</td>
           <td scope="col">{c.CreateDate}</td>
           <td scope="col"><button class="btn btn-danger"  onClick={() => {openDeleteCommentDialog(id,Pageid,c._id)}}>حذف</button></td>
         
       </tr>
   </tbody>
          
          
))
   }
    </table>


    </div> );
}
 
export default CommentPage;