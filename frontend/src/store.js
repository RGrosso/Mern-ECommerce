import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
});

let localStorageItem = null;

localStorageItem = localStorage.getItem("cartItems");
const cartItems = localStorageItem ? JSON.parse(localStorageItem) : [];

localStorageItem = localStorage.getItem("userInfo");
const userInfo = localStorageItem ? JSON.parse(localStorageItem) : null;

const initialState = {
    cart: { cartItems },
    userLogin: { userInfo },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
