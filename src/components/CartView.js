import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    onClick(e) {
        let x = e.target.id
        this.props.handleClickRemoveCart(x);
    }
    
    render() {
        let i=0;
        let price = 0;
        const list = this.props.cart.map( x => {
                return <tbody key={i++}>
                    <tr>    
                        <td>{x.name}</td>
                        <td>{x.price} SEK</td>
                        <td>{x.amount}</td>
                        <td><button onClick={this.props.onClick} className="btnDelete" id={x.name + x.price}>X</button></td>
                    </tr>
                </tbody>
            }
        )
                                    
        let l = list.length;
        this.props.cart.forEach(function(value) {
            price = price + value.price;
        });
        return (
            <div className="cart">
                <h2>Cart</h2>
                <h4>Your cart contains {l} cases</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Total:</th>
                            <th>{price} -</th>
                        </tr>
                    </thead>
                    {list}
                </table>
                <br />
                <input type="button" value="Checkout" className="checkoutBtn"  onClick={() => this.openModal()} />
                   <Modal 
                       visible={this.state.visible}
                       width="400"
                       height="300"
                       effect="fadeInUp"
                       onClickAway={() => this.closeModal()}
                   >
                       <div className="modal">
                            <div className="modal-content">
                                <h1>Purchase Complete</h1>
                                <a href="javascript:void(0);" onClick={() => this.closeModal()}>Done</a>

                            </div>
                       </div>
                   </Modal>
            </div>
       )
    }
};