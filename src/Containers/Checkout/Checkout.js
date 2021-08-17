import React, { Component } from 'react';
import classes from './Checkout.module.css';
import ContactData from '../ContactData/ContactData';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';



class Checkout extends Component {
    PRICE_CHART = {
            'shirt': 5.4,
            'trouser': 7.9,
            'shoes': 15.0,
            'cap': 3.1,
            'hoodie': 5.6,
            'jeans': 11.3
        };

    state={
        orderContinued: false
    }

    render() {
        let quantity = 0;
        Object.keys(this.props.itemsPicked).map( item => (
            quantity = parseInt(quantity) + parseInt(this.props.itemsPicked[item])
        ));

        let itemData = (

                        Object.keys(this.props.itemsPicked).map( item => (
                                                    <tr key={item}>
                                                        <td>{item.toUpperCase()}</td>
                                                        <td>{this.props.itemsPicked[item]}</td>
                                                        <td>{Number.parseFloat(this.props.itemsPicked[item] * this.PRICE_CHART[item]).toFixed(2)}$</td>
                                                    </tr>
                                                    )

                        )
        );

        const continueOrder = ()=>{
            this.setState({orderContinued : true})
        }


        return (

            <BrowserRouter>
            <Route path="/contactData">
                <ContactData itemsPicked={this.props.itemsPicked} totalPrice={this.props.totalPrice}/>
            </Route>
                {
                this.state.orderContinued ?
                <Redirect to="/contactData"/>:
                <div className={classes.summary}>
                    <h1>REVIEW YOUR ORDER</h1>
                    <table className={classes.table}>
                        <thead>
                        <tr>
                            <td>ITEM</td>
                            <td>QUANTITY</td>
                            <td>AMOUNT</td>
                        </tr>
                        </thead>
                        <tbody>
                            {itemData}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td>TOTAL</td>
                            <td>{quantity}</td>
                            <td>{this.props.totalPrice}$</td>
                        </tr>
                        </tfoot>
                    </table>
                    <button className={classes.changeButton} onClick={()=>window.history.go()}>CHANGE ORDER</button>
                    <button className={classes.continueButton} onClick={continueOrder}>CONTINUE</button>
                </div>
                }
            </BrowserRouter>

        )
    }
}


export default Checkout;
