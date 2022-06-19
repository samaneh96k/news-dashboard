import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useState, useEffect } from 'react';
import { handlePageUpdate } from '../../actions/Page';
import { useDispatch } from 'react-redux';
const EditePage = ({ showDialog, closeDialog, pages,pageGroupId }) => {
    const [title, setTitle] = useState();
    const [ShortText, setShortText] = useState();
    const [TagsPage, setTagsPage] = useState();
    const [image, setImageUrl] = useState();
    const [Text, setText] = useState();
    const [GroupId, setGroupId] = useState();
    const [PageId, setPageId] = useState();
    const dispatch = useDispatch();
    const [AddToSlide, setAddToSlide] = useState(false);
  
    const handleChange = () => {
        setAddToSlide(!AddToSlide);}
   
          
     useEffect(() => {

         setTitle(pages.Title);
         setPageId(pages._id);
         setShortText(pages.ShortText)
         setText(pages.Text);
        setImageUrl(pages.imageUrl);
        setTagsPage(pages.TagsPage);  
        setAddToSlide();
             return () => {
                 setTitle();
                 setPageId();
                 setShortText()
                 setText();
                 setImageUrl();
                 setTagsPage();
                 setAddToSlide();
             }
         }, [pages])
     
    const handleSubmit =async event => {
        event.preventDefault();
        let data = new FormData();
        data.append("Title", title);
        data.append("ShortText", ShortText);
        if (event.target.Image.files[0])
        data.append("imageUrl", event.target.Image.files[0]);
     else data.append("imageUrl", image);
        data.append("Text", Text);
        data.append("TagsPage", TagsPage);
        data.append("AddToSlide", AddToSlide);
     
    
        let select = {"AddToSlide":AddToSlide}

                //Dispatch
               dispatch(handlePageUpdate(pageGroupId,pages._id,[data,select]));
           closeDialog();
         
     
          
    };
    return (  <DialogOverlay
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
            <div className="inner form-layer">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        style={{ marginBottom: 3 }}
                        className="form-control"
                        placeholder="عنوان خبر"
                        aria-describedby="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
 <input
                            type="text"
                            name="ShortText"
                            style={{ margin: 5}}
                            className="form-control"
                            placeholder="خلاصه خبر"
                            aria-describedby="ShortText"
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
                            aria-describedby="TagsPage"
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
                            aria-describedby="Text"
                            value={Text}
                            onChange={(e) => {
                                setText(e.target.value);
                               
                            }}
                        />
<input
                            type="file"
                            name="Image"
                            style={{ marginBottom: 3 }}
                            className="form-control mb-2"
                            aria-describedby="imageUrl"
                            onChange={(e) => {
                                setImageUrl(true);
                               
                            }}
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
                    <button
                        type="submit"
                        className="btn btn-success "
                        style={{ margin: "1em" }}
                    >
                        ویرایش 
                    </button>
                    <button
                        className="btn btn-warning mr-5"
                        style={{ margin: "1em" }}
                        submit={closeDialog}
                    >
                        انصراف
                    </button>
                </form>
            </div>
        </DialogContent>
    </DialogOverlay>  );
}
 
export default EditePage;