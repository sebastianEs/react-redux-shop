import React from 'react';

let inputs ={
    name: undefined,
    price: undefined,
    amount: undefined,
    imgUrl: undefined
}
function Form(props) {
    let i = 0;
    const list = props.products.map( x => <li key={i++}>
        <table>
            <tbody>
                <tr>
                    <td>{x.name}</td>
                    <td>{x.price}</td>
                    <td>{x.amount}</td>
                    <td><button onClick={props.handleClickRemoveProduct} className="btn btn-danger" id={x.name + x.price}>Delete</button></td>
                </tr>
            </tbody>
        </table>
    </li>)
        
        return (
        <div className="form">
            <h2>Form</h2>
            <p>Add a new item to products</p>
              <input type="text" onChange={enterName} name="name" value={inputs.name} placeholder="Name" />
              <input type="number" onChange={enterPrice} name="number" value={inputs.price} placeholder="Price" />
              <input type="number" onChange={enterAmount} name="amount" value={inputs.amount} placeholder="Amount" />
              <input type="text" onChange={enterUrl} name="url" value={inputs.imgUrl} placeholder="url" />
              <button type="reset" className="btn btn-primary" onClick={addProduct}>Add</button>
            <h4>Current Products</h4>
              <ul className="FormList">{list}</ul>
             </div>

        );
    
    function addProduct(e) {
        props.handleClickAddProduct(e,inputs);
        inputs ={name: undefined, price: undefined, amount: undefined, imgUrl: undefined}
        }
        function enterName(e) {
            inputs.name = e.target.value;
        }
        function enterPrice(e) {
            inputs.price = e.target.value;
        }
        function enterAmount(e) {
            inputs.amount = e.target.value;
        }
        function enterUrl(e) {
            inputs.imgUrl = e.target.value;
        }
    
    
}
export default Form