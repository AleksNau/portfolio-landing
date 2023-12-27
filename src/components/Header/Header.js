import React from "react";
import "./Header.scss";
import Menu from '../Menu/Menu';
import Navigation from "../Navigation/Navigation";

const Header = ({setActive, active}) => {
    return (
        <header className="header">
            <Menu type={'header'} className={"header_menu"}/>
            <button className="header__button-burger" onClick={() => setActive(!active)}>
                <span className="header__button-line"/>
            </button>
            <Navigation active={active} setActive={setActive}/>
        </header>
    );
};

export default Header;