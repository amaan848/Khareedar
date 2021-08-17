import React, { Component } from 'react';
import classes from './ShowOrder.module.css';

class ShowOrder extends Component {
    state={
        cap: '',
        hoodie: '',
        jeans: '',
        shoes: '',
        trouser: '',
        shirt: '',
        name: '',
        totalPrice: ''
    };
    componentDidMount(){
        this.setState({
            name: this.props.name,
            cap: this.props.cap,
            hoodie: this.props.hoodie,
            shirt: this.props.shirt,
            trouser: this.props.trouser,
            shoes: this.props.shoes,
            jeans: this.props.jeans,
            totalPrice: this.props.totalPrice
        })
        
    }
    render() {
        
        return (
            <div>
                <h3>To : {this.state.name}</h3>
            <div className={classes.order}>      
                <span>Cap - {this.state.cap}pcs</span>
                <span>Hoodie - {this.state.hoodie}pcs</span>
                <span>Jeans - {this.state.jeans}pcs</span>
                <span>Shirt - {this.state.shirt}pcs</span>
                <span>Trouser - {this.state.trouser}pcs</span>
                <span>Shoes - {this.state.shoes}pcs</span>
                <span>Price - {this.state.totalPrice}$</span>
            </div>
            </div>
        )
    }
}


export default ShowOrder;