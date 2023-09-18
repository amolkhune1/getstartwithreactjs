// import { createStore, applyMiddleware } from 'redux';
import {configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const store=configureStore({
  reducer:rootReducer,
  middleware:[logger,thunk]
});

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, thunk))
// );
export default store;
