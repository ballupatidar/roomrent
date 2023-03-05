import './Footer.css'
import {  useState,useEffect } from 'react';


function Footer(){

    const [ FooterContent ,setFooterContent]= useState([]);

    useEffect(()=>{
        if(localStorage.getItem("role")=="admin"){
            setFooterContent(<div></div>)
        }
        else if(localStorage.getItem("role")=="user"){
            setFooterContent(<div>{/* Footer Start */}
            <div class="footer wow fadeIn" data-wow-delay="0.3s">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="footer-contact">
                            <h2>Office Contact</h2>
                            <p><i class="fa fa-map-marker-alt"></i>xxx Street, New dehli, INDIA</p>
                            <p><i class="fa fa-phone-alt"></i>+xxx xxx xxxxx</p>
                            <p><i class="fa fa-envelope"></i>info@example.com</p>
                            <div class="footer-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-youtube"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="footer-link">
                            <h2>Services Areas</h2>
                            <a href="">Building Construction</a>
                            <a href="">House Renovation</a>
                            <a href="">Architecture Design</a>
                            <a href="">Interior Design</a>
                            <a href="">Painting</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="footer-link">
                            <h2>Useful links</h2>
                            <a href="">About Us</a>
                            <a href="">Contact</a>
                            <a href="">Service</a>
                            <a href="">login</a>
                            <a href="">Register</a>
           
                            
                       </div>
                    </div>
                </div>
            </div>
            <div class="container footer-menu">
                <div class="f-menu">
                    <a href="">Terms of use</a>
                    <a href="">Privacy policy</a>
                    <a href="">Cookies</a>
                    <a href="">Help</a>
                    <a href="">FQAs</a>
                </div>
            </div>
            <div class="container copyright">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; <a href="#">RoomRent.com</a>, All Right Reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <p>Designed By <a href="">REACTBATCH</a></p>
                    </div>
                </div>
            </div>
           </div>
           {/* Footer End */}</div>);
        }
        else{
           setFooterContent(
            <div>{/* Footer Start */}
           <div class="footer wow fadeIn" data-wow-delay="0.3s">
           <div class="container">
               <div class="row">
                   <div class="col-md-6 col-lg-4">
                       <div class="footer-contact">
                           <h2>Office Contact</h2>
                           <p><i class="fa fa-map-marker-alt"></i>xxx Street, New dehli, INDIA</p>
                           <p><i class="fa fa-phone-alt"></i>+xxx xxx xxxxx</p>
                           <p><i class="fa fa-envelope"></i>info@example.com</p>
                           <div class="footer-social">
                               <a href=""><i class="fab fa-twitter"></i></a>
                               <a href=""><i class="fab fa-facebook-f"></i></a>
                               <a href=""><i class="fab fa-youtube"></i></a>
                               <a href=""><i class="fab fa-instagram"></i></a>
                               <a href=""><i class="fab fa-linkedin-in"></i></a>
                           </div>
                       </div>
                   </div>
                   <div class="col-md-6 col-lg-4">
                       <div class="footer-link">
                           <h2>Services Areas</h2>
                           <a href="">Building Construction</a>
                           <a href="">House Renovation</a>
                           <a href="">Architecture Design</a>
                           <a href="">Interior Design</a>
                           <a href="">Painting</a>
                       </div>
                   </div>
                   <div class="col-md-6 col-lg-4">
                       <div class="footer-link">
                           <h2>Useful links</h2>
                           <a href="">About Us</a>
                           <a href="">Contact</a>
                           <a href="">Service</a>
                           <a href="">login</a>
                           <a href="">Register</a>
          
                           
                      </div>
                   </div>
               </div>
           </div>
           <div class="container footer-menu">
               <div class="f-menu">
                   <a href="">Terms of use</a>
                   <a href="">Privacy policy</a>
                   <a href="">Cookies</a>
                   <a href="">Help</a>
                   <a href="">FQAs</a>
               </div>
           </div>
           <div class="container copyright">
               <div class="row">
                   <div class="col-md-6">
                       <p>&copy; <a href="#">RoomRent.com</a>, All Right Reserved.</p>
                   </div>
                   <div class="col-md-6">
                       <p>Designed By <a href="">REACTBATCH</a></p>
                   </div>
               </div>
           </div>
          </div>
          {/* Footer End */}</div>);
        }
    },[])
    
    return(
        <div>
 {
    FooterContent
 }
</div>
    );
}
export default Footer;