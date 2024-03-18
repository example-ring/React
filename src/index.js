import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
// import App_useMemo from './ch09/App_useMemo';
// import Counter_useEffect from './ch08/Counter_useEffect';
// import Counter from './ch07/Counter';
// import Clock from "./ch04/Clock"
// import CommentList0 from './ch05/CommentList0';
// import CommentList from './ch05/CommentList';
// import NotificationList from './ch06/NotificationList';
import Library from './ch03/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

