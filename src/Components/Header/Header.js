import React from 'react';
import { Link, Route } from 'react-router-dom';
import classes from './Header.module.css';

const Header = props => {
    const clearLocalStorage=()=>{
        window.localStorage.clear();}

    return (
        
        <div className={classes.navbar}>
            <p>KHAREEDAR</p>
            {window.localStorage.isAuth ? <button onClick={clearLocalStorage}><a href="/">LOG OUT</a></button>: null}
            {window.localStorage.isAuth ? <button ><Link to="/orders">MY ORDERS</Link></button>: null}
            
        </div>
    )
}

export default Header;