import { useEffect,useState,useContext  } from "react";
import {useNavigate}from "react-router-dom"

import {AiOutlineSearch} from "react-icons/ai";
import{AiOutlineHeart} from "react-icons/ai"
import{AiOutlineShoppingCart} from "react-icons/ai"



import  Search  from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../Utils/context";

import "./Header.scss";

const Header = () => {

    const  [scrolled, setScrolled] =useState(false);
    const  [showCart, setShowCart] =useState(false);
    const  [showSearch, setShowSearch] =useState(false);
    const {cartCount} =useContext(Context);
    const navigate = useNavigate()


    const handleScroll = () =>{
        
        const offset = window.scrollY;
        if (offset >200){
                 setScrolled(true);
                 }else{
                    setScrolled(false);
                 }
        // console.log(offset);
    }
    useEffect(
        ()=>{
window.addEventListener("scroll",handleScroll)
        },[]
    )
    return <>
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
            <ul className="left">

                 <li onClick={()=> navigate("/")}>Home</li>                
                <li>About</li>
                <li>Categories</li>
            </ul>
                
            <div className="center" onClick={() => navigate("/")}>
            RAHUL SPEAKERS. </div>
            <div className="right">
                
         
           <AiOutlineSearch onClick={()=> setShowSearch(true)}/>
           <AiOutlineHeart/>          
            <span className="cart-icon" onClick={()=> setShowCart(true)}> 
            <AiOutlineShoppingCart/>
        {!!cartCount && <span>{cartCount}</span>  }           
            </span>
        </div>
        </div>    
    </header>
   { showCart && <Cart  setShowCart={setShowCart}/>}
 { showSearch  && <Search setShowSearch={setShowSearch} />}
    </>
};

export default Header;
