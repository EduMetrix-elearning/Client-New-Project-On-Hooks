import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartCountReducer, productCountReducer } from './reducers/reducer'
import { loginReducer } from './reducers/loginReducer'


const reducer = combineReducers({
    Cart: cartCountReducer,
    ProductsCount: productCountReducer,
    Login: loginReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;