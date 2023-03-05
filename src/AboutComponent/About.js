import './About.css';
import axios from 'axios';
import { useState } from 'react';



function About() {

    const [pDetails ,setPostDetails] = useState([]);
    const [apiURL ,setAPIUrl]=useState("https://jsonplaceholder.typicode.com/posts");
    // web service to call web api (dummy api)

    axios.get(apiURL).then((response)=>{
//console.log(response)
setPostDetails(response.data);  
}).catch((error)=>{
  console.log("inveleid url resource invokred")
}

)
  return (
    <div>
 {/* About Start */}
 <div class="about wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row align-items-center">
                    
                    <div class="col-lg-12 col-md-12">
                     <div class="about-text"> 
                             <h1>Welocome to RoomRent</h1>
                            <h2>view an manage post Details</h2>
                            <table class="table table-bordered">
                              <tr>
                             <th> User Id</th>
                             <th> Id</th>
                             <th> Titel</th>
                             <th>Body</th>
                             </tr>
                            
                            {
                              pDetails.map((row)=>(
                            <tr>
                              <td>{row.userId}</td>
                              <td>{row.id}</td>
                              <td>{row.title}</td>
                               <td>{row.body}</td>
                            </tr>
                              ))
                            }
                            </table> 
                
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}


    </div>   
  );
}

export default About;