import React from 'react';

function Products(props) {
    let i=0;
    
    const list = props.products.map( x => 
        <li key={i++} className="product">
                <img src={x.imgUrl} alt="Case" /> 
                <br />
                <span className="productName">{x.name}</span>
                <span className="productPrice">SEK {x.price}</span>
                <span className="productAmount">Cases left {x.amount}</span>
            <div className="btn">
                <button onClick={onClick} className="addBtn" id={x.name+x.price} >Add to Cart</button>
            </div>
        </li>
    )
    return (
        <div className="list">
           <h2>Products</h2> 
           <ul>{list}</ul>
    </div>
                                    
    )
    
    function onClick(x) {
        props.handleOnClick(x.target.id);
    }
}
export default Products;