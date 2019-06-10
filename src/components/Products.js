import React from 'react';

function Products(props) {
    let i=0;
    const list = props.products.map( x => <li key={i++}>
        <div className="card">
            <div className="card-img-top">
                <img className="img" src={x.imgUrl} alt="" />
            </div>
            <div className="card-body">
                <span className="card-title">{x.name}: </span>
                <span className="card-text">{x.price} SEK {x.amount} cases left </span>
                <button onClick={onClick} className="btn btn-primary" id={x.name+x.price} >Add to Cart</button>
            </div>
        </div>
    </li>)
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