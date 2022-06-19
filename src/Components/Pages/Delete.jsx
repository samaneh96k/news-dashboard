import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handlePageDelete } from '../../actions/Page';
const DeletePage = ({ showDialog, closeDialog, pages,pageGroupId }) => {
    const dispatch= useDispatch();
 
    useEffect(() =>{},[pages])

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
           پاک کردن  {}
       </h3>
       <hr />
       <p> مطمئن هستی می خوای  {} رو پاک کنی؟</p>
   </div>
   <button
       className="btn btn-danger "
       style={{ margin: "1em" }}
       onClick={async e =>
        dispatch( handlePageDelete(pageGroupId,pages._id))&&
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
}
 
export default DeletePage;