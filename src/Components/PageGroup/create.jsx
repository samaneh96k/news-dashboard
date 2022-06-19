import React, {  useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { createNewGroupPage } from '../../actions/groupPage';
import { DialogContent } from '@reach/dialog';
import { DialogOverlay } from '@reach/dialog';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const CreateGroupPage = ({ showDialog, closeDialog}) => {


const [GroupTitle, setGroupTitle] = useState();


const dispatch = useDispatch();



const handleSubmit =async event => {
    event.preventDefault();
    
    try {
       
     
            let data = {GroupTitle}
         
         console.log(JSON.stringify(data));

            //Dispatch
          await dispatch(await createNewGroupPage(JSON.stringify(data)));
       closeDialog();
       

    } catch (ex) {
        console.log("خطااااااا");
    }
};
useEffect(()=>{

},[])
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
        <div className="rtl text-center pt-10" >
     


   
    <form onSubmit={handleSubmit} method="post" >
    <input
                            type="text"
                            name="GroupTitle"
                            style={{ margin: 5}}
                            className="form-control"
                            placeholder="عنوان گروه"
                            aria-describedby="title"
                            value={GroupTitle}
                            onChange={(e) => {
                                setGroupTitle(e.target.value);
                               
                            }}
                        />
                       
                        
                                <button
                            type="submit"
                            className="btn btn-success "
                            style={{ margin: "1em" }}
                        >
                            ثبت گروه
                        </button>
                           <button
                            type="submit"
                            className="btn btn-warning "
                            style={{ margin: "1em" }}
                       onClick={closeDialog} >
                            انصراف
                        </button>
                       
    </form>






    </div>
    </DialogContent>
        </DialogOverlay> )

}
 
export default CreateGroupPage;