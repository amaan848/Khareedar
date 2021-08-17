import axios from 'axios';
import React, { Component } from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import ShowOrders from '../../Components/ShowOrders/ShowOrders';



class Orders extends Component{
    
    state={
        allOrders: null,
        loading: true
    };

    componentDidMount(){
    let token = window.localStorage.getItem('token');
    let userId = window.localStorage.getItem('userId');
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('https://khareedar-41ddc-default-rtdb.firebaseio.com/orderDetails.json'+ queryParams)
    .then(response=>{
        this.setState({allOrders : response.data , loading : false})
    })
    .catch(error=>{
        console.log(error.data)
        this.setState({loading : false})
    })
    }

    
    render(){
        let loadedPage = (
            this.state.loading ?
                <Spinner/>:
                <ShowOrders allOrders={this.state.allOrders}/>        
        );
    return (
        <div>
            <h1>YOUR ORDERS</h1>
            <div>{loadedPage}</div>
        </div>
    )
}
}

export default Orders