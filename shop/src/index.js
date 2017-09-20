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
        id: 'Iphone 6s Case150',
        price: 150,
        "imgUrl": 'https://d2zmgde9txxwg2.cloudfront.net/media/catalog/product/cache/1/small_image/239x/9df78eab33525d08d6e5fb8d27136e95/i/n/incipio-ngp-iphone-6s-case-black-ab_1.jpg',
         amount: 8
    },
     {
        name: 'Iphone 7s Case',
        id: 'Iphone 7s Case250',
        price: 250,
        imgUrl: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/MY/MMY32/MMY32?wid=572&hei=572&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1473023567662',
        amount: 6
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
        imgUrl: 'https://target.scene7.com/is/image/Target/52208712_Alt01?wid=3000&qlt=70&fmt=pjpeg',
        amount: 5
    },
     {
        name: 'Samsung Galaxy s6 Case',
        id: 'Samsung Galaxy s6 Case220',
        price: 220,
        imgUrl: 'https://d2zmgde9txxwg2.cloudfront.net/media/catalog/product/cache/1/small_image/239x/9df78eab33525d08d6e5fb8d27136e95/i/n/incipio-shock-absorbing-dualpro-samsung-galaxy-s6-edge-case-cyan-gray-r-main_1.jpg',
        amount: 6
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
