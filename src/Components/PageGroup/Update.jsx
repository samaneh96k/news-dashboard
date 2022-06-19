import { handleGroupUpdate } from "../../actions/groupPage";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { toast } from "react-toastify";
const EditGroupPage = ({ showDialog, closeDialog, pageGroup }) => {
    const [GroupTitle, setGroupTitle] = useState();
    const [Id, setGroupId] = useState();
    
    const dispatch = useDispatch();
    useEffect(()=>{

    },[])
    useEffect(() => {

        setGroupTitle(pageGroup.GroupTitle);
        setGroupId(pageGroup._id);

            return () => {
                setGroupTitle("");
                setGroupId("");
            }
        }, [pageGroup])
    const handleSubmit =async event => {
        event.preventDefault();
     
        try { 
                let data = {"GroupTitle":GroupTitle}

                //Dispatch
            dispatch ( handleGroupUpdate(pageGroup._id,data));
           
                    closeDialog();}
                     catch(err) {console.log("خطااااا")}
           
         
     
          
    };
    return ( <DialogOverlay
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
            <div className="inner form-layer">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        style={{ marginBottom: 3 }}
                        className="form-control"
                        placeholder="عنوان گروه"
                        aria-describedby="GroupTitle"
                        value={GroupTitle}
                        onChange={(e) => setGroupTitle(e.target.value)}
                    />


                    <button
                        type="submit"
                        className="btn btn-success "
                        style={{ margin: "1em" }}
                    >
                        ویرایش گروه
                    </button>
                    <button
                        className="btn btn-warning mr-5"
                        style={{ margin: "1em" }}
                        onClick={closeDialog}
                    >
                        انصراف
                    </button>
                </form>
            </div>
        </DialogContent>
    </DialogOverlay> );
}
 
export default EditGroupPage;