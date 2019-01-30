// import {createStore} from "redux";
// import reducer from '../reducer/index';
// let defaultState={
//   rows:[]
// }
// export const configureStore =(initialState=defaultState)=>{
//   return createStore(reducer,initialState);
// }

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import {rootReducer} from '../reducer/index';
const persistConfig = {
  key: 'ToDoList',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return {store,persistor}
}