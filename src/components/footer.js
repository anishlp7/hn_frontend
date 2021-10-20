import React from "react";
import { footerData } from "../data/footerData";
import "../styles/footer.css";

const Footer = () => {
    return(
        <footer className="footerContainer">
            <div></div>
            <div style={{display:"flex"}}>
                {
                    footerData.map((data) => {
                        return(
                            <div style={{padding:"0 1rem"}}>
                            <p className="footerHdrStyle">{data.name}</p>
                            <ul className="footerListStyle">
                            {
                                
                                data.children.map((childVal) => {
                                    return(
                                        <li>{childVal.name}</li>
                                    )
                                })
                                
                            }
                            </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div></div>
        </footer>
    )
}

export default Footer;