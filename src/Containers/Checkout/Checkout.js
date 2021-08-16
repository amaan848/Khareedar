import React, { Component } from 'react';
import classes from './Checkout.module.css';
import Khareedar from '../Khareedar/Khareedar';

class Checkout extends Component {
    PRICE_CHART = {
            'shirt': 5.4,
            'trouser': 7.9,
            'shoes': 15.0,
            'cap': 3.1,
            'hoodie': 5.6,
            'jeans': 11.3
        };
        
       
                                                    
    render() {
        let quantity = 0;
        const totalQuantity = Object.keys(this.props.itemsPicked).map( item => (
            quantity = parseInt(quantity) + parseInt(this.props.itemsPicked[item])
        ));
        
        let itemData = (
                       
                        Object.keys(this.props.itemsPicked).map( item => (
                                                    <tr key={item}>
                                                        <td>{item.toUpperCase()}</td>
                                                        <td>{this.props.itemsPicked[item]}</td>
                                                        <td>{(this.props.itemsPicked[item] * this.PRICE_CHART[item]).toFixed(2)}$</td>
                                                    </tr>
                                                    )

                        )
        );

        return (
            <div className={classes.summary}>
                <h1>REVIEW YOUR ORDER</h1>
                <table className={classes.table}>
                    <th>
                        <td>ITEM</td>
                        <td>QUANTITY</td>
                        <td>AMOUNT</td>
                    </th>
                    {itemData}
                    <th>
                        <td>TOTAL</td>
                        <td>{quantity}</td>
                        <td>{this.props.totalPrice.toFixed(2)}$</td>
                    </th>
                </table>
                <button className={classes.changeButton} onClick={()=>window.history.go()}>CHANGE ORDER</button>
                <button className={classes.continueButton} onClick={<Khareedar/>}>CONTINUE</button>
            </div>
        )
    }
}


export default Checkout;