import './Contact.css'
import axios from 'axios';
import { useState } from 'react';
import { _apiURLUser } from '../apiURL';
import { _apiURLCategory } from '../apiURL';
function Contact(){

    const [responseData ,setResponseData ] = useState([]);
    
    // web service to call web api (dummy api)

    axios.get(_apiURLUser+"test").then((response)=>{
//console.log(response)
setResponseData(response.data.msg);  
}).catch((error)=>{
  console.log("inveleid url resource invokred")
})

return(
<div>

    
<div>
   {/* About Start */}
   <div class="about wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row align-items-center">
                    
                    <div class="col-lg-12 col-md-12">
                     <div class="about-text"> 
                             <h1>Welocome to RoomRent</h1>
                             <h2>Contact component</h2>
                            <h2>ApI response</h2>
                                    <p>{responseData} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}
</div>


</div>
);}

export default Contact
