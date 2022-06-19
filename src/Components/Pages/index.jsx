
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { dashContext } from './../context/dashContext';
import { useSelector } from 'react-redux';
import { getSingleGroupPage } from './../../actions/Group';
import { NavLink } from 'react-router-dom';

const PegesCms = () => {

    const {id}=useParams();
    const dispatch = useDispatch();
    
const group=useSelector(state=>state.singleGroup)


    const context = useContext(dashContext);

    const {
       
            openEditPageDialog,
            openDeletePageDialog,
            openNewPageDialog
           
    } = context;


    useEffect(()=>{
dispatch(getSingleGroupPage(id))
    },[])

    return ( 
      <div>
           
<div className="rtl">
<button className="btn btn-info"  
                                    onClick={() =>
                                        openNewPageDialog(id)
                                            }>افزودن خبر</button>
<table className="table">
     
    
  <thead>
    <tr>
     
         <th scope="col">عنوان خبر</th>  
          <th scope="col"> خبر</th> 
          <th scope="col"> کلمات کلیدی</th>  
           <th scope="col"> انتخاب سردبیر</th> 
          <th scope="col">تصویر</th> 
        <th scope="col">ویرایش</th>
        <th scope="col">حذف</th>
    </tr>
</thead>
{
       group.map(Page => (
<tbody>
    <tr key={Page._id}>
        <td scope="col">{Page.Title}</td>
        <td scope="col">{Page.ShortText}</td>
        <td scope="col">{Page.TagsPage}</td>  
        <td scope="col"><input type="checkbox" checked={Page.AddToSlide}/></td>
        <td scope="col" className="position-relative w-5 "><div > 
        <img style={{width: '100%', height: '100%'}} className="border-radius object-cover position-absolute " src={`http://localhost:3002/${Page.imageUrl}`}/></div></td>
        <td scope="col"><button type="button" className="btn btn-warning ml-2"
           onClick={() =>
            openEditPageDialog(id,Page)
                       }><i className="fa fa-pencil-square-o"></i></button></td>
        <td scope="col"><button type="button" className="btn btn-danger"
           onClick={() =>
                       openDeletePageDialog(id,Page)
                       }><i className="fa fa-trash"></i></button></td>
                       {Page.PageComment.length>0? <td><NavLink to={`/pagenews/commentpage/${id}/${Page._id}`} className="btn btn-primary"> کامنت ها ی خبر</NavLink></td>:
                       <label className="btn btn-warning">کامنتی ثبت نشده</label>}
                       
    </tr>
</tbody>
       
       
         ))
}
 </table>
</div>
      </div>

    )
    
    
   
    }
    
    
    
 
        
        
        
       

 
export default PegesCms;