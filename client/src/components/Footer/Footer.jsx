import React from "react";
import "./Footer.scss";
import {FaLocationArrow}from "react-icons/fa"
import { AiOutlineMobile,AiOutlineMail } from "react-icons/ai";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            {/*Start 1 */}

            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Illum nisi sunt atque eius labore ut aut, esse nihil minima! Deleniti tempore perferendis m
                 agni consequuntur. Facere laborum dolorum natus asperiores pariatur.</div>
            </div>
            {/*Start 2 */}
            <div className="col">  
            <div className="title">Contact</div> 

            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">Chaukara, Agra, Utter Pradesh, 283201</div>
            </div>

            <div className="c-item">
                <AiOutlineMobile/>
                <div className="text">Phone: 8630040546</div>
            </div>

            <div className="c-item">
                <AiOutlineMail/>
                <div className="text">Email: rahulkushwah8057@gmail.com </div>
            </div>
            
             </div>
             {/* Start 3 */}
            <div className="col">
            <div className="title">Categories</div>
            <div className="text">Headphones </div>
            <div className="text">Smart Watches </div>
            <div className="text">Bluetooth Speakers </div>
            <div className="text">Wireless Earbuds </div>
            <div className="text">Home Theatre </div>
            <div className="text">Projectors Theatre </div>
            </div>

             {/* Start 4  */}
            <div className="col">
            <div className="title">Pages</div>
            <div className="text">Home </div>
            <div className="text"> About </div>
            <div className="text">Privacy Policy </div>
            <div className="text">Returns  </div>
            <div className="text">Terms & Conditions </div>
            <div className="text">Contact Us </div>
            </div>               
           

        </div>
        {/*Bottom bar start */}
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">RAHULNURSERY 2023 ALL RIGHTS RESERVED.</div>
            <img src={Payment} alt="" />

            </div>
            {/* <img src={Payment} alt="" /> */}
        </div>
        </footer>
    ;
};

export default Footer;
