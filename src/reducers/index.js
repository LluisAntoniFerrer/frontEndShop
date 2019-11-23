import { combineReducers } from 'redux'

//Dependencias de Reducers
import products from './products.js'
import init from './init.js'
import auth from './auth.js'
import user from './user.js'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

let rootReducer = combineReducers({
    products,
    init,
    auth,
    user
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunk))
export default store