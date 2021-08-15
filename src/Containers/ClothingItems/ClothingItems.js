import React, { Component } from 'react';
import ClothingItem from './ClothingItem/ClothingItem';
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
                            this.state.totalPrice + (this.PRICE_CHART[item]) : 
                            this.state.totalPrice - (this.PRICE_CHART[item])
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
            console.log(this.state.checkoutContinued)
        }
        let containerClass = ['allItems'].concat(this.state.checkoutContinued ? 'overlay' : null).join(' ');
        return (
            <div className={classes.allItems}>
                {items}
                <div className={classes.priceBar}>BAG PRICE : {this.state.totalPrice}$</div>
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
        );
    }
};


export default ClothingItems;
