import React from "react";
import footerCss from './footer.module.css'
import { FaArrowUp } from "react-icons/fa6";

const Footer = () =>{


    return (
        <div className={footerCss.footer}>
           <a href="#top"><button><FaArrowUp /> To The Top</button></a>
            <p>Powered By <a href="https://github.com/Hashir-Akbar" target="_blank">Hashir Akbar</a></p>
        </div>
    )
}

export default Footer;