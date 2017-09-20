import React from 'react';

function Products(props) {
    let i=0;
    
    const list = props.products.map( x => <li key={i++}>
        <div className="product">
            <img src={x.imgUrl} alt="image" />
            
            <span className="productName">{x.name}</span>
            <br />
            <span className="productPrice">SEK {x.price}</span>
            <br />
            <span className="productAmount">{x.amount} cases left in stock</span>
        </div>
        <div className="btn">
            <button onClick={onClick} className="addBtn" id={x.name+x.price} >Add to Cart</button>
        </div>
    </li>)
    return (
        <div className="list">
           <h2>Products</h2> 
           <p>High quality cases from big brands like Apple, Samsung and Huawei</p>
           <ul>{list}</ul>
    </div>
                                    
    )
    
    function onClick(x) {
        props.handleOnClick(x.target.id);
    }
}
export default Products;