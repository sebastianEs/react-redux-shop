import React from 'react';

function CartView(props) {
    function onClick(e) {
        let x = e.target.id
        props.handleClickRemoveCart(x);
        console.log('X ', x)
    }
    
    function checkout() {
        if(!alert('your purchase is now completed!')){window.location.reload();}
        console.log('buyer Checked out!')
    } 
    
    let i=0;
    let price = 0;
    const list = props.cart.map( x => <li key={i++}>
        <table>
            <tbody>
                <tr>
                    <td>{x.name}</td>
                    <td>{x.price} SEK</td>
                    <td>{x.amount}</td>
                    <td><button onClick={onClick} className="btnDelete" id={x.name + x.price}>X</button></td>
                </tr>
            </tbody>
        </table>
    </li>)
                                
    let l = list.length;
    props.cart.forEach(function(value) {
        price = price + value.price;
    });
    
    return (
         <div className="cart">
             <h2>Cart</h2>
             <h4>Your cart contains {l} cases</h4>
             <ul>{list}
             <table>
                 <thead>
                     <tr>
                         <th>Total:</th>
                         <th>{price} -</th>
                     </tr>
                 </thead>
             </table>
             </ul>
             <br />
             <button className="checkoutBtn" onClick={checkout}>Checkout</button>
         </div>
    )
}
export default CartView;