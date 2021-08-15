import React, { Component } from 'react';

import shirtimage from '../../../assets/shirt.jpeg';
import capimage  from '../../../assets/cap.jpeg';
import hoodieimage  from '../../../assets/hoodie.jpeg';
import jeansimage  from '../../../assets/jeans.jpeg';
import shoesimage  from '../../../assets/shoes.jpeg';
import trouserimage  from '../../../assets/trouser.png';

import classes from './ClothingItem.module.css';


class ClothingItem extends Component{

   render(){       
       let imageURL = null;
    switch(this.props.item){
        case 'shirt':
            imageURL=shirtimage ;
            break;
        case 'cap':
            imageURL=capimage ;
            break;
        case 'hoodie':
            imageURL=hoodieimage ;
            break;
        case 'jeans':
            imageURL=jeansimage ;
            break;
        case 'shoes':
            imageURL=shoesimage ;
            break;
        case 'trouser':
            imageURL=trouserimage ;
            break;
        default:
            imageURL=null;
    }

    const decreaseQuantity = ()=>{
      let presentQuan = this.props.quantity
      this.props.setQuantity(presentQuan - 1);
    }

    const increaseQuantity = ()=>{
      let presentQuan = this.props.quantity
      this.props.setQuantity(presentQuan + 1);
    }

    const isDisabled = this.props.quantity === 0 ? true : false

    return (
        <div>
            <div className={classes.counterItems}>
                <button className={classes.signs} onClick={decreaseQuantity} disabled={isDisabled}>-</button>
                <div className={classes.itemContainer}>
                    <img src={imageURL} alt="Could'nt load"/>
                </div>
                <button className={classes.signs} onClick={increaseQuantity}>+</button>
            </div>
            <p className={classes.nums}>Quantity : {this.props.quantity}</p>
            <hr/>
        </div>
    )
}
}


export default ClothingItem;