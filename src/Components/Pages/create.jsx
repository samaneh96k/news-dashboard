import React, {  useState } from 'react';
import { useDispatch} from 'react-redux';

import { DialogContent } from '@reach/dialog';
import { DialogOverlay } from '@reach/dialog';
import { createNewPage } from './../../actions/Page';
import { useEffect } from 'react';
import "@reach/dialog/styles.css";
import ProgressBar from './../../utils/progeressbar';
const CreatePage = ({ showDialog, closeDialog ,pageGroup, pages}) => {



const [Title, setTitle] = useState();
const [ShortText, setShortText] = useState();
const [TagsPage, setTagsPage] = useState();

const [Text, setText] = useState();
const [GroupId, setGroupId] = useState();
const [imageUrl, setImageUrl] = useState();
const [CreateDate, setCreateDate] = useState();
const [AddToSlide, setAddToSlide] = useState(false);
const handleChange = () => {
    setAddToSlide(!AddToSlide);
  };

const [completed, setCompleted] = useState(0);


const dispatch = useDispatch();


useEffect(() => {

  
    setGroupId(pageGroup);

        return () => {
          
            setGroupId();
         
        }
    }, [pageGroup]);

     useEffect(() => {

       setCompleted(20+"%");
       
         setTitle(pages.Title);
         setShortText(pages.ShortText);
         setText(pages.Text);
setImageUrl(pages.imageUrl)
             return () => {
              
               
                setTitle();
                setShortText();
                setText();
                //setImageUrl();
             }
           
         }, [pages]);
const handleSubmit = event => {
    event.preventDefault();

    try {
         let data = new FormData();
         data.append("Title", Title);
         data.append("ShortText", ShortText);
         data.append("imageUrl", event.target.imageUrl.files[0]);
         data.append("Text", Text);
         data.append("CreateDate", Date.now);
         data.append("TagsPage", TagsPage);
         data.append("AddToSlide", AddToSlide);
     
    // let dataa = {
    // Title,
    //  ShortText,
    //  Text
    
    //     }
      
         //let data=[JSON.stringify(dataa),event.target.imageUrl.files[0]]
//       console.log(data)
// console.log(GroupId)
            //Dispatch
        
           
           dispatch( createNewPage(data,GroupId));
       closeDialog();
     
    } catch (ex) {
        console.log("خطااااااا");
    }
};



    return (
        
        
        <DialogOverlay
        isOpen={showDialog}
        onDismiss={closeDialog}
        style={{ background: "hsla(0, 100%, 100%, 0.9)" ,margin:"  5em",zIndex:"50",position:"fixed",left:"0",bottom:"0",width:"700px",padding:"1em"}}
    >
        <DialogContent
            style={{
                border: "solid 5px hsla(0, 0%, 0%, 0.5)",
                borderRadius: "10px",
                boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",zIndex:"1000",padding:"1em",width:"500px"
            }}
        >
        <div className="rtl text-center pt-10" >
     


   
    <form onSubmit={handleSubmit} method="post" >
    <input
                            type="text"
                            name="Title"
                            style={{ margin: 5}}
                            className="form-control"
                            placeholder="عنوان خبر"
                            aria-describedby="title"
                            value={Title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                               
                            }}
                        />
                       <input
                            type="text"
                            name="ShortText"
                            style={{ margin: 5}}
                            className="form-control"
                            placeholder="خلاصه خبر"
                            aria-describedby="title"
                            value={ShortText}
                            onChange={(e) => {
                                setShortText(e.target.value);
                               
                            }}
                        />
                        <input
                            type="text"
                            name="TagsPage"
                            style={{ margin: 5}}
                            className="form-control"
                            placeholder="کلمات کلیدی"
                            aria-describedby="title"
                            value={TagsPage}
                            onChange={(e) => {
                                setTagsPage(e.target.value);
                               
                            }}
                        />
                        <textarea
                           type="text"
                            name="Text"
                            style={{ margin: 5}}
                            className="form-control"
                            placeholder="متن خبر"
                            aria-describedby="title"
                            value={Text}
                            onChange={(e) => {
                                setText(e.target.value);
                               
                            }}
                        />
                        <input
                            type="file"
                            name="imageUrl"
                            style={{ marginBottom: 3 }}
                            className="form-control mb-2"
                            aria-describedby="imageUrl"
                            onChange={(e) => 
                                setImageUrl(true)
                               
                            }
                        />
                        <label  for="AddToSlide">انتخاب</label>
                            <input
                            type='checkbox'
                            name="AddToSlide"
                            style={{ marginBottom: 3 }}
                            className="form-control mb-2"
                            aria-describedby="AddToSlide"
                            onChange={handleChange}
                        />
                         <div  className="justify-center mr-0">
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    </div>
                                <button
                            type="submit"
                            className="btn btn-success "
                            style={{ margin: "1em" }}
                           
                        >
                            
                            ثبت خبر
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
 
export default CreatePage;