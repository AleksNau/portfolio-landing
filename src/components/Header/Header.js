import React from "react";
import "./Header.scss";
import Menu from '../Menu/Menu';

const Header = () => {
    return (
        <header className="header">
            <Menu type={'header'}/>
        </header>
    );
};

export default Header;