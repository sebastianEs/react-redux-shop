const ADD_ITEM = 'ADD_ITEM',
      ADD_PRODUCT = 'ADD_PRODUCT',
      CHANGE_VIEW = 'CHANGE_VIEW',
      HISTORY = 'HISTORY',
      REMOVE_ITEM = 'REMOVE_ITEM',
      REMOVE_CART = 'REMOVE_CART'
      
function actionChangeView(newTab) {
    return {
        type: CHANGE_VIEW,
        tab: newTab
    }
}     

function actionAddItem(id, name, price, imgUrl) {
    return {
        type: ADD_ITEM,
        id: id,
        name: name,
        price: price,
        img: imgUrl,
        amount: 1
        
    }
}    

function actionAddProduct(name,price,imgUrl,amount) {
    return {
        type: ADD_PRODUCT,
        id: name + price,
        name: name,
        price: price,
        img: imgUrl,
        amount: amount
    }
}

function actionHistory(action) {
    return {
        type: HISTORY,
        action
    }
}      

function actionRemoveItem(id,name,price,amount) {
    return {
        type: REMOVE_ITEM,
        id: id,
        name: name,
        price: price,
        amount: amount
    }
}

function actionRemoveCart(id,name,price,amount) {
    return {
        type: REMOVE_CART,
        id: id,
        name: name,
        price: price,
        amount: amount
    }
}



export {ADD_ITEM,ADD_PRODUCT,actionAddProduct, actionAddItem, CHANGE_VIEW, actionChangeView, HISTORY, actionHistory, REMOVE_ITEM, actionRemoveItem, REMOVE_CART, actionRemoveCart};
      