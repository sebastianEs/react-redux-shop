import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
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
        console.log('remove item ?', x);
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
                        <td onClick={(e) => this.onClick(e)} className="btn btn-danger" id={x.name + x.price}>X</td>
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
                <section>
                <input type="button" value="Open" className="btn btn-success" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
            </div>
       )
    }
};