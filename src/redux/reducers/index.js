import filters from './filters'
import sushi from './sushi'
import cart from './cart';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    filters,
    sushi,
    cart,
});

export default rootReducer;