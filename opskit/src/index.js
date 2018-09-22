import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducer'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
(<Provider store={store}>
<App />
</Provider>
),
 document.getElementById('root'));
registerServiceWorker();
