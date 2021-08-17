import React, { Component } from 'react';
import classes from './ContactData.module.css';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';


class ContactData extends Component {
    state = {
        orderData: {
            name: '',
            address: '',
            country: '',
            zipCode: '',
            mail: '',
            delivery: 'fastest'
        },
        loading: false
    };
    componentDidMount(){
        this.setState({itemsPicked: this.props.itemsPicked , totalPrice: this.props.totalPrice})
    }

    orderDataChangeHandler = (name) => (event) => {
        this.setState({
            ...this.state,
            orderData: {
                ...this.state.orderData,
                [name]: event.target.value
            }
        })
    }

    formIsValid = (orderDetails)=>{
        let isValid = true;
        Object.keys(orderDetails).map((detail) => {
            if(orderDetails[detail] !== '' && isValid){
                isValid = true;
            }else{
                isValid = false;
            }
        })

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!orderDetails['mail'].match(validRegex)) {
            return false
        }
        return isValid;
    }



    render() {
        const submitOrder = ()=>{
            this.setState({ loading : true})

            const orderDetails = {
                ...this.state,
                userId: window.localStorage.getItem('userId')

            };

            if (this.formIsValid(this.state.orderData)) {
                axios.post('https://khareedar-41ddc-default-rtdb.firebaseio.com/orderDetails.json' , orderDetails)
                    .then(()=>{
                        this.setState(()=>({ loading : false}))
                        window.history.go()
                    })
                    .catch((err)=>{
                        console.log(err)
                        this.setState({loading: false})})
            } else {
                alert('Invalid form')
                this.setState({loading: false})
            }

        }
        return (
            <div>
                {
                    this.state.loading ?
                        <Spinner/>:
                        <div className={classes.form}>
                            <h1>DELIVERY ADDRESS</h1>
                            <input type="text" required placeholder="Name" onChange={this.orderDataChangeHandler("name")}/>
                            <input type="text" required placeholder="Address" onChange={this.orderDataChangeHandler("address")} />
                            <input type="text" required placeholder="Country" onChange={this.orderDataChangeHandler("country")} />
                            <input type="number" required placeholder="ZIP CODE" onChange={this.orderDataChangeHandler("zipCode")}/>
                            <input type="email" required placeholder="Mail" onChange={this.orderDataChangeHandler("mail")} />
                            <select type="select" placeholder="Delivery Type"  onChange={this.orderDataChangeHandler("delivery")}>
                                <option value="fastest" >Fastest</option>
                                <option value="cheapest">Cheapest</option>
                            </select>
                            <button onClick={()=>window.history.back()}>BACK TO MAIN PAGE</button>
                            <button onClick={submitOrder} >ORDER</button>
                        </div>
                }
            </div>
        )

    }
}
export default ContactData;
