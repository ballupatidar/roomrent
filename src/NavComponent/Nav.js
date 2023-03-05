import './Nav.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Nav(){


    const [NavContent ,setNavContent] =useState();

 useEffect(()=>{
     if(localStorage.getItem("role")=="admin"){
        setNavContent(
            <div>{/* Nav Bar Start */}
        <div class="nav-bar">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                     
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto">
                            
                            <a  class="nav-item nav-link active"><Link to="/">Admin Home</Link></a> 
                            <a  class="nav-item nav-link"><Link to="/manageusers">MANAGE USERES</Link></a>
                               
                                                    
                            <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown">Category</a>
                            <div class="dropdown-menu ">
                                <a class="dropdown-item"><Link to="/addcategory" >Add Category</Link></a>
                                <a class="dropdown-item"><Link to="/addsubcategory"  >Add Sub Category</Link></a>
                            </div>
                        </div>

                            
                            <a  class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                      </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* Nav Bar End */}
        
</div>
);
     }
     else if(localStorage.getItem("role")=="user"){
        setNavContent(      <div>{/* Nav Bar Start */}
        <div class="nav-bar">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                     
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto">
                            
                            <a  class="nav-item nav-link active"><Link to="/"> User Home</Link></a>
                            <a  class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
        {/* Nav Bar End */}
</div>)
     }
     else{
        setNavContent(      <div>{/* Nav Bar Start */}
        <div class="nav-bar">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                     
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto">
                            
                            <a  class="nav-item nav-link active"><Link to="/">Home</Link></a>
                            <a  class="nav-item nav-link"><Link to="/about">About</Link></a>
                            <a  class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                            <a  class="nav-item nav-link"><Link to="/service">Service</Link></a>
                            <a  class="nav-item nav-link"><Link to="/login">login</Link></a>
                            <a  class="nav-item nav-link"><Link to="/register">Register</Link></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
        {/* Nav Bar End */}
</div>)
     }

     },[]);




    return(
        <div>
       {NavContent}  
    </div>
    );
}
export default Nav;