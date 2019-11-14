import { combineReducers } from 'redux'

//Dependencias de Reducers
import products from './products.js'
import home from './home.js'
import auth from './auth.js'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

let rootReducer = combineReducers({
    products,
    home,
    auth
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunk))
export default store