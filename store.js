// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './src/reducers';

// const initialState = {};

// const middelware = [thunk];

// const store = createStore(rootReducer,
//     initialState,
//     compose(applyMiddleware(...middelware)
//     ,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//     )
//     );

// export default store;


import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers';

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));