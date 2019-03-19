import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { CookiesProvider  } from 'react-cookie';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducer'

let store = null;
if (process.env.NODE_ENV === 'development') {
    store = createStore(reducers, compose(
    	applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
} else {
    store = createStore(reducers, compose(
    	applyMiddleware(thunk)
    ))
}

ReactDOM.render(
  (
   <LocaleProvider locale={zhCN}>
       <Provider store={store}>
         <CookiesProvider>
          <App />
         </CookiesProvider>
       </Provider>
   </LocaleProvider>
),
 document.getElementById('root'));
registerServiceWorker();
