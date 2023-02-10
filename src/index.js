import React from 'react';
import ReactDOM from 'react-dom/client';
//модифікація
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {setStore} from "./redux/store/store";
import {history} from "./services";



const root = ReactDOM.createRoot(document.getElementById('root'));
const store=setStore()
root.render(

<Provider store={store}>
    <BrowserRouter history={history}>
        <App />
    </BrowserRouter>
</Provider>







);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
