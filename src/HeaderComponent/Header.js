import './Header.css'
import { useState , useEffect} from 'react';


function Header(){


    const [HeaderContent ,setHeaderContent] =useState();

 useEffect(()=>{
     if(localStorage.getItem("role")=="admin"){
        setHeaderContent(<div>
            {/* Top Bar Start*/}
     <div class="top-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-12">
                        <div class="logo">
                            <h1>ADMIN</h1>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md- d-none d-lg-block">
                        <div class="row">
                            <div class="col-6">
                                <div class="top-bar-item">
                                    <div class="top-bar-icon">
                                        <i class="flaticon-call"></i>
                                    </div>
                                    <div class="top-bar-text">
                                        <h3>welcome</h3>
                                        <p>admin </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="top-bar-item">
                                    <div class="top-bar-icon">
                                        <i class="flaticon-send-mail"></i>
                                    </div>
                                    <div class="top-bar-text">
                                        <h3>track ID</h3>
                                 <p>{localStorage.getItem("email")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
        {/* Top Bar End */}
        </div>
        )
     }
     else if(localStorage.getItem("role")=="user"){
        setHeaderContent( <div>
            {/* Top Bar Start*/}
     <div class="top-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-12">
                        <div class="logo">
                            <h1>RoomRent </h1>
                            
                        </div>
                    </div>
                    <div class="col-lg-8 col-md- d-none d-lg-block">
                        <div class="row">
                            <div class="col-6">
                                <div class="top-bar-item">
                                    <div class="top-bar-icon">
                                        <i class="flaticon-call"></i>
                                    </div>
                                    <div class="top-bar-text">
                                        <h3>Call Us</h3>
                                        <p>xxx xxx xxx</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="top-bar-item">
                                    <div class="top-bar-icon">
                                        <i class="flaticon-send-mail"></i>
                                    </div>
                                    <div class="top-bar-text">
                                        <h3>Email Us</h3>
                                        <p>xxxxx@email.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
        {/* Top Bar End */}
        </div> );
     }
     else{
        setHeaderContent(<div>
            {/* Top Bar Start*/}
     <div class="top-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-12">
                        <div class="logo">
                            <h1>RoomRent user</h1>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md- d-none d-lg-block">
                        <div class="row">
                            <div class="col-6">
                                <div class="top-bar-item">
                                    <div class="top-bar-icon">
                                        <i class="flaticon-call"></i>
                                    </div>
                                    <div class="top-bar-text">
                                        <h3>call us</h3>
                                        <p>xxx xxx xxx</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="top-bar-item">
                                    <div class="top-bar-icon">
                                        <i class="flaticon-send-mail"></i>
                                    </div>
                                    <div class="top-bar-text">
                                        <h3>Email us</h3>
                                        <p>xxxxx@email.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
        {/* Top Bar End */}
        </div>)
     }

     },[]);

    return(

<div>{ HeaderContent }</div>
    );
}
export default Header;






//  <div>
//             {/* Top Bar Start*/}
//      <div class="top-bar">
//             <div class="container-fluid">
//                 <div class="row align-items-center">
//                     <div class="col-lg-4 col-md-12">
//                         <div class="logo">
//                             <h1>RoomRent</h1>
//                         </div>
//                     </div>
//                     <div class="col-lg-8 col-md- d-none d-lg-block">
//                         <div class="row">
//                             <div class="col-6">
//                                 <div class="top-bar-item">
//                                     <div class="top-bar-icon">
//                                         <i class="flaticon-call"></i>
//                                     </div>
//                                     <div class="top-bar-text">
//                                         <h3>Call Us</h3>
//                                         <p>xxx xxx xxx</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-6">
//                                 <div class="top-bar-item">
//                                     <div class="top-bar-icon">
//                                         <i class="flaticon-send-mail"></i>
//                                     </div>
//                                     <div class="top-bar-text">
//                                         <h3>Email Us</h3>
//                                         <p>xxxxx@email.com</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
    
        
//         {/* Top Bar End */}
        // </div> 