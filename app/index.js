//index.js
import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './components/App';
import reducers from './reducers/index';


const loggerMiddleware = createLogger();
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),    // for dev tool
    applyMiddleware(
        thunkMiddleware,        // 允许我们 dispatch() 函数
        loggerMiddleware        // 一个很便捷的 middleware，用来打印 action 日志
    )
);


// console.log(store.getState());
// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );


render(
    <Provider store={ store }>
        <App
            url = { 'static/data/voucher.json' }

        />
    </Provider>,
    document.getElementById('root')
);

