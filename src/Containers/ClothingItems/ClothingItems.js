import React, { Component } from 'react';
import ClothingItem from './ClothingItem/ClothingItem';
import Checkout from '../Checkout/Checkout';
import classes from './ClothingItems.module.css';



class ClothingItems extends Component {
    state = {
        itemsPicked: {
            'shirt': 0,
            'trouser': 0,
            'shoes': 0,
            'cap': 0,
            'hoodie': 0,
            'jeans': 0
        },
        totalPrice : 0,
        checkoutContinued : false
    };

      PRICE_CHART = {
            'shirt': 5.4,
            'trouser': 7.9,
            'shoes': 15.0,
            'cap': 3.1,
            'hoodie': 5.6,
            'jeans': 11.3
        };


       

    render() {
        const  setQuantity = (item) => (quantity) => {
            const newState = {
                itemsPicked: {
                    ...this.state.itemsPicked,
                    [item]: quantity
                },
                totalPrice: quantity > this.state.itemsPicked[item] ? 
                            (Number.parseFloat(this.state.totalPrice) + Number.parseFloat(this.PRICE_CHART[item])).toFixed(2) : 
                            (Number.parseFloat(this.state.totalPrice) - Number.parseFloat(this.PRICE_CHART[item])).toFixed(2)  
            }
            this.setState(newState)
        }
        const itemsPicked  = ['shirt','trouser','shoes','cap','hoodie','jeans'];
        const items = itemsPicked.map((item =>
            <ClothingItem
                item={item}
                key={item}
                quantity={this.state.itemsPicked[item]}
                setQuantity={setQuantity(item)}
            />
        ))
        let orderDisabled = true;
        itemsPicked.map((item) => {
            if(this.state.itemsPicked[item] === 0 && orderDisabled){
                orderDisabled = true;
            }
            else{
                orderDisabled = false;
            }
    })

        const cancelCheckout = ()=>{
            window.history.go()
        }

        const continueCheckout = ()=>{
            this.setState({checkoutContinued : true})
        }       
        
        return (
           <div>
               {
               this.state.checkoutContinued ? 
               <Checkout itemsPicked={this.state.itemsPicked} totalPrice={this.state.totalPrice}/>:
               <div className={classes.cont}>
                {items}
                <div className={classes.priceBar}>BAG PRICE : {Number.parseFloat(Math.abs(this.state.totalPrice)).toFixed(2)}$</div>
                <div className={classes.checkout}>
                    <button className={classes.cancelButton} onClick={cancelCheckout}>CANCEL</button>
                    <button 
                        disabled={orderDisabled} 
                        className={classes.orderButton}
                        onClick={continueCheckout}>
                            CHECKOUT
                    </button>
                </div>
               </div> 
            }   
            </div>
        );
    }
};


export default ClothingItems;
