import { useState } from 'react';
import './Addcategory.css';
import { _apiURLSubCategory } from '../apiURL';
import axios from 'axios';


function Addcategory() {

const [file,setFile]=useState()
const [catName , setCatName]=useState();
const [output ,setoutput]=useState();

const handleChange=(event)=>{
  setFile(event.target.files[0])
}

const handleSubmit=(event)=>{
  event.preventDefault();
  var fromData=new fromData();
  fromData.append('catnm',catName);
  fromData.append('caticon',file);

  const config={
    'content-type':'multipart/from'
  };
axios.post(_apiURLCategory+"save",fromData,config).then((response)=>{
  setCatName("");
  setoutput("Category Added Successfully...");
});
}
  return (
    <div>
 {/* About Start */}
 <div class="about wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row align-items-center">
                    
                    <div class="col-lg-12 col-md-12">
                     <div class="about-text">        
                      <h2> Add  Category Here!!!!! </h2>
                      <font color="blue">{output}</font>
<form onSubmit={handleSubmit} >

<label>
Category Name:
<input type="text" value={catName}
onChange={e => setCatName(e.target.value)} />
</label>
<br/><br/>

<label>
Category Icon:
<input type="file"
onChange={handleChange} />
</label>
<br/><br/>

<input type="submit" value="Add Category" />

</form>
<br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}


    </div>   
  );
  
  }
export default Addcategory;



