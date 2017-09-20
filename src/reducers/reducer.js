import { CHANGE_VIEW, ADD_ITEM, HISTORY, REMOVE_CART, REMOVE_ITEM,ADD_PRODUCT } from '../actions/actions.js';

function viewReducer(state = 1, action) {
  
    switch( action.type ) {
            case CHANGE_VIEW:
            return action.tab;
        default:
            return state;
        }
}



function productReducer(state = [] , action ) {
    
    switch( action.type ) {
        case ADD_PRODUCT:
        return [...state, action];
        case REMOVE_ITEM:
            let removed = state.filter(function(e) {
                return e.id !== action.id;
            })
            return removed
        default:
            return state;
        }
    
  
}

function cartReducer(state =[], action) {
    switch( action.type ) {
        case ADD_ITEM:
            return [...state, action]
        case REMOVE_CART: 
            let removed = state.filter(function(e) {
                return e.id !== action.id;
            });
            return removed;
        default:
            return state;
                        }
}
function historyReducer(state =[], action ) {
    
    switch( action.type ) {
        case HISTORY:
            return [...state, action.action];
        default:
            return state;
                        }
}







export {viewReducer,productReducer,cartReducer, historyReducer};