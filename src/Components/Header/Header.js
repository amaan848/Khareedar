import React from 'react';
import classes from './Header.module.css';

const Header = props => {
    const clearLocalStorage=()=>{
        window.localStorage.clear();}
    return (
        <div className={classes.navbar}>
            <p>KHAREEDAR</p>
            {window.localStorage.isAuth ? <button onClick={clearLocalStorage}><a href="/">LOG OUT</a></button>: null}
        </div>
    )
}

export default Header;