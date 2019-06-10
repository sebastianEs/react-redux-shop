import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {viewReducer, productReducer, historyReducer, cartReducer} from './reducers/reducer.js';

let initialState = {
    products: [
     {
        name: 'Iphone 6s Case',
        id: 'Iphone 6s Case200',
        price: 200,
        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/M/KY/MKY02/MKY02?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=0',
        amount: 8
    },
     {
        name: 'Iphone X Case',
        id: 'Iphone X Case250',
        price: 250,
        imgUrl: 'https://cdn.shopify.com/s/files/1/1384/0075/products/ROKFORM-iX-Speculo-Clear-Image01_1798b645-fe94-4ede-96bb-5c494301a004_2048x.jpg?v=1527266000',
        amount: 10
    },
     {
        name: 'Huawei Honor 8 case',
        id: 'Huawei Honor 8 case120',
        price: 120,
        imgUrl: 'http://www.after-service.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/h/o/honor-8-case_5__4.jpg',
        amount: 4
    },
      {
        name: 'IPHONE 7 CASE WHITE',
        id: 'IPHONE 7 CASE WHITE225',
        price: 225,
        imgUrl: 'http://www.prestigioplaza.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/7/9/79986-5728_ip7-pr_1.jpg',
        amount: 5
    },
     {
        name: 'Samsung Galaxy S8 Case',
        id: 'Samsung Galaxy S8 Case190',
        price: 190,
        imgUrl: 'https://incipio.com/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/d/u/dualpro-samsung-galaxy-s8-case-iridescent-black-black_ab.jpg',
        amount: 5
    },
     {
        name: 'Nokia 5 Case',
        id: 'Nokia 5 Case150',
        price: 150,
        imgUrl: 'https://images.mobilefun.co.uk/graphics/450pixelp/64084.jpg',
        amount: 5
    }],
    cart: [],
    history: [],
    tab: 1
}

let rootReducer = combineReducers({
    tab: viewReducer,
    products: productReducer,
    history: historyReducer,
    cart: cartReducer
});

const store = createStore(rootReducer, initialState);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
