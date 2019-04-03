import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const initialState = {};
const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

let reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if(!reduxDevTools){
    reduxDevTools = a => a;
}

const store = createStore(
    rootReducer,
    initialState,
    compose(
        reduxDevTools,
        middleware
    )
);

export default store;
