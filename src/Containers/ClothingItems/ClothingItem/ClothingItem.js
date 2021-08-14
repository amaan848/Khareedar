import React from 'react';

import shirt from '../../../assets/shirt.jpeg';
import cap from '../../../assets/cap.jpeg';
import hoodie from '../../../assets/hoodie.jpeg';
import jeans from '../../../assets/jeans.jpeg';
import shoes from '../../../assets/shoes.jpeg';
import trouser from '../../../assets/trouser.png';

import classes from './ClothingItem.module.css';

const ClothingItem = (props) => {
    let imageURL = null;
    switch(props.item){
        case 'shirt':
            imageURL=shirt;
            break;
        case 'cap':
            imageURL=cap;
            break;
        case 'hoodie':
            imageURL=hoodie;
            break;
        case 'jeans':
            imageURL=jeans;
            break;
        case 'shoes':
            imageURL=shoes;
            break;
        case 'trouser':
            imageURL=trouser;
            break;
        default:
            imageURL=null;
    }

   
    return (
        <div>
            <div className={classes.counterItems}>
                <div className={classes.signs}>-</div>
                <div className={classes.itemContainer}>
                    <img src={imageURL} alt="Could'nt load"/>
                </div>
                <div className={classes.signs}>+</div>
            </div>
            <p className={classes.nums}>{props.number}</p>
        </div>
    )
}


export default ClothingItem;