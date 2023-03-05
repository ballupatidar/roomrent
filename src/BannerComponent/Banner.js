import './Banner.css';
import { useState,useEffect } from 'react';

function Banner(){
   const [BannerContent , setBannerContent] =useState();
 
    useEffect(()=>{
        if(localStorage.getItem("role")=="admin"){
           setBannerContent(<div>
            
           </div>)
        }
        else if(localStorage.getItem("role")=="user"){
           setBannerContent(<div> {/* Carousel Start */}
           <div id="carousel" class="carousel slide" data-ride="carousel">
               <ol class="carousel-indicators">
                   <li data-target="#carousel" data-slide-to="0" class="active"></li>
                   <li data-target="#carousel" data-slide-to="1"></li>
                   <li data-target="#carousel" data-slide-to="2"></li>
               </ol>
                <div class="carousel-inner">
                   <div class="carousel-item active">
                       <img src="assets/img/service-4.jpg" alt="Carousel Image"/>
                       <div class="carousel-caption">
              <p class="animated fadeInRight">We Are Professional</p>
                           <h1 class="animated fadeInLeft">For Your Dream Project</h1>
                           <a class="btn animated fadeInUp"
                               href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                       </div>
                   </div>
   
                   <div class="carousel-item">
                       <img src="assets/img/carousel-2.jpg" alt="Carousel Image"/>
                       <div class="carousel-caption">
                           <p class="animated fadeInRight">Professional Builder</p>
                           <h1 class="animated fadeInLeft">We Build Your Home</h1>
                           <a class="btn animated fadeInUp"
                               href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                       </div>
                   </div>
   
                   <div class="carousel-item">
                       <img src="assets/img/carousel-3.jpg" alt="Carousel Image"/>
                       <div class="carousel-caption">
                           <p class="animated fadeInRight">We Are Trusted</p>
                           <h1 class="animated fadeInLeft">For Your Dream Home</h1>
                           <a class="btn animated fadeInUp"
                               href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                       </div>
                   </div>
               </div>
   
               <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="sr-only">Next</span>
               </a>
           </div>
           {/* Carousel End */}</div>)
        }
        else{
           setBannerContent(<div> {/* Carousel Start */}
           <div id="carousel" class="carousel slide" data-ride="carousel">
               <ol class="carousel-indicators">
                   <li data-target="#carousel" data-slide-to="0" class="active"></li>
                   <li data-target="#carousel" data-slide-to="1"></li>
                   <li data-target="#carousel" data-slide-to="2"></li>
               </ol>
                <div class="carousel-inner">
                   <div class="carousel-item active">
                       <img src="assets/img/service-4.jpg" alt="Carousel Image"/>
                       <div class="carousel-caption">
              <p class="animated fadeInRight">We Are Professional</p>
                           <h1 class="animated fadeInLeft">For Your Dream Project</h1>
                           <a class="btn animated fadeInUp"
                               href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                       </div>
                   </div>
   
                   <div class="carousel-item">
                       <img src="assets/img/carousel-2.jpg" alt="Carousel Image"/>
                       <div class="carousel-caption">
                           <p class="animated fadeInRight">Professional Builder</p>
                           <h1 class="animated fadeInLeft">We Build Your Home</h1>
                           <a class="btn animated fadeInUp"
                               href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                       </div>
                   </div>
   
                   <div class="carousel-item">
                       <img src="assets/img/carousel-3.jpg" alt="Carousel Image"/>
                       <div class="carousel-caption">
                           <p class="animated fadeInRight">We Are Trusted</p>
                           <h1 class="animated fadeInLeft">For Your Dream Home</h1>
                           <a class="btn animated fadeInUp"
                               href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                       </div>
                   </div>
               </div>
   
               <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="sr-only">Next</span>
               </a>
           </div>
           {/* Carousel End */}</div>)}
    },[]);

    return(
        <div>
    {BannerContent}
       
        </div>
    );
}

export default Banner;