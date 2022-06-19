import { useDispatch } from 'react-redux';
import { handleGroupDelete } from './../../actions/groupPage';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DialogContent } from '@reach/dialog';
import { DialogOverlay } from '@reach/dialog';

const DeletePageGroup = ({ showDialog, closeDialog, pageGroup }) => {

  
const dispatch= useDispatch();
useEffect(() =>{},[pageGroup])

    return (
        <DialogOverlay
            isOpen={showDialog}
            onDismiss={closeDialog}
            style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
        >
            <DialogContent
                style={{
                    border: "solid 5px hsla(0, 0%, 0%, 0.5)",
                    borderRadius: "10px",
                    boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
                }}
            >
 
      
      
       <div className="card text-center">
       <h3 style={{ fontSize: "2rem" }}>
           پاک کردن  {pageGroup.GroupTitle}
       </h3>
       <hr />
       <p> مطمئن هستی می خوای  {pageGroup.GroupTitle} رو پاک کنی؟</p>
   </div>
   <button
       className="btn btn-danger "
       style={{ margin: "1em" }}
       onClick={() =>
        dispatch( handleGroupDelete(pageGroup._id))&&
        closeDialog() 
       }
   >
       مطمئنم پاک کن
   </button>
   <button to="/GroupPage"
       className="btn btn-warning mr-5"
       style={{ margin: "1em" }}
       onClick={closeDialog}
   >
       انصراف
   </button>
   </DialogContent>
        </DialogOverlay>
    
             

          );
};


 
export default DeletePageGroup;