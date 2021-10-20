import React from 'react';
import HackernoonLogo from '../assets/hn-logo.png';
import {subMenu} from '../data/subMenu';
import '../styles/header.css';

const Header = () => {
    return(
        <React.Fragment>
        <header className="headerContainer">
            <div className="imgAlign">
                <img src={HackernoonLogo} alt='Hackernoon Logo' height="40" />
            </div>
            <div className="rightVals">
                <input type="text" name="search" placeholder="Search..." className="searchStyle" />
                <button type="submit" className="srtBtnStyle">Start Writing</button>
                <button type="submit" className="LogBtnStyle">Log in</button>
            </div>
        </header>

        <div className="subHeaderContainer">
            <ul className="subMenuAlign">
            {
                subMenu.map((subMenu, i) => {
                    return(
                        <li className="listStyle">{subMenu.name}</li>
                    )
                })
            }
            </ul>
        </div>

        <div className="headerFinalStyle"></div>
        </React.Fragment>
    )
}   

export default Header;