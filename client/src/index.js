import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
//import store from './store/reduxStore';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Reducer/authReducer';
import noteReducer from './Reducer/noteReducer';



const store = configureStore({
  reducer: {
    auth: authReducer,
    note: noteReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  // <React.StrictMode>
  //   <Provider store={store}>
  //   <App/>
  //   </Provider>
  // </React.StrictMode>
);
{/*  */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

