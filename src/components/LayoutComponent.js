import React, {Component} from 'react';
import Products from './Products';
import CartView from './CartView';
import Form from './Form';
import History from './History';
import {actionChangeView, actionAddItem, actionHistory, actionAddProduct,actionRemoveItem,actionRemoveCart} from '../actions/actions.js';
import {connect} from 'react-redux';
var inputs ={
    name: undefined,
    price: undefined,
    amount: undefined
    
}



class LayoutComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClickProducts = this.handleClickProducts.bind(this);
		this.handleClickCart = this.handleClickCart.bind(this);
		this.handleClickForm = this.handleClickForm.bind(this);
		this.handleClickHistory = this.handleClickHistory.bind(this);
        this.handleClickAddProduct = this.handleClickAddProduct.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleClickRemoveProduct = this.handleClickRemoveProduct.bind(this);
        this.handleClickRemoveCart = this.handleClickRemoveCart.bind(this);
        this.enterName = this.enterName.bind(this);
        this.enterPrice = this.enterPrice.bind(this);
        this.enterAmount = this.enterAmount.bind(this);
	}
	render() { 
		var view;
        if( this.props.tab === 1 ) {
            view = <Products products={this.props.products} handleOnClick={this.handleOnClick} />;
        } else if (this.props.tab === 2){
            view = <History history={this.props.history} />
        } else if(this.props.tab === 3) {
            view = <Form products={this.props.products} handleClickAddProduct={this.handleClickAddProduct} handleClickRemoveProduct={this.handleClickRemoveProduct} />
        } else if(this.props.tab === 4 ) {
            view = <CartView cart={this.props.cart} handleClickRemoveCart={this.handleClickRemoveCart}/>
        }
        
        let cartLength = this.props.cart.length;
        let num;
        if(cartLength === 0) {
            num = '';
        } else if(cartLength === 1) {
            num = cartLength + ' case'
        } else {
            num = cartLength + ' cases'
        }
		return (
			<div className="container">
                <div className="navbar navbar-dark bg-primary">
                <ul className="navbar-nav" >
                    <li className="nav-item" onClick={this.handleClickProducts}>Products</li>
                    <li className="nav-item" onClick={this.handleClickCart}>Cart</li>
                    <li className="nav-item" onClick={this.handleClickForm}>Form</li>
                    <li className="nav-item" onClick={this.handleClickHistory}>History</li>                          
                    <p className="cartNumber">{num}</p>
                    </ul>
                </div>
                <div className="tabbody">     
                    {view}
                </div>
		  </div>
		);
	}
    
    handleOnClick(a) {
        let p = this.props.products;
        function index(keyX, value) {
            var i=0;
            for(var key in p) {
                var current = p[key];
                if(current[keyX] === value) {
                    return i;
                }
                i++;
            }
            return -1
        }
        let result = index('id', a);
        let buy = this.props.products[result];
        
        let action = actionAddItem(buy.id, buy.name, buy.price, buy.amount);
        this.props.dispatch(action);
        this.props.dispatch(actionHistory(action))
    }
    handleClickAddProduct(e,x) {
        var n = x.name;
        var p = x.price;
        var a = x.amount;
        var i = x.image;
        
        try {
            this.props.dispatch(actionAddProduct(n,p,a,i))
            this.props.dispatch(actionHistory(actionAddProduct(n,p,a,i)));
            inputs ={name: undefined, price: undefined, amount: undefined, imgUrl: undefined}
        }
        catch(error) {
            console.log('Error!' + error);
        }
    }
    enterName(e) {
        inputs.name = e.target.value;
    }
    enterPrice(e) {
        inputs.price = e.target.value;
    }
    enterAmount(e) {
        inputs.amount = e.target.value;
    }
    
    handleClickRemoveCart(e) {
        let action = actionRemoveCart(e);
        this.props.dispatch(action);
        this.props.dispatch(actionHistory(action))
    }
    
    handleClickRemoveProduct(e) {
        let x = e.target.id;
        let action = actionRemoveItem(x);
        this.props.dispatch(action);
        this.props.dispatch(actionHistory(action));
    }
   
    
	handleClickProducts(e) {
		this.changeTab(1);
	}
	handleClickCart(e) {
		this.changeTab(4);
	}
	handleClickForm(e) {
		this.changeTab(3);
	}
	handleClickHistory(e) {
		this.changeTab(2);
	}
    
	changeTab(tab) {
        
		let action = actionChangeView(tab);
		this.props.dispatch(action);
		this.props.dispatch(actionHistory(action));
        
	}
}



function mapStateToProps(state) {
	
	return {
		tab: state.tab,
		products: state.products,
		cart: state.cart,
		history: state.history,
		form: state.form
	}
}

export default connect(mapStateToProps)(LayoutComponent);

