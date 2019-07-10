import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import CommentList from './components/CommentList'
// import Dialog from './components/Dialog'
import Hoc from './components/hoc'

// ReactDOM.render(<Dialog />, document.getElementById('root'));
ReactDOM.render(<Hoc stage='测试高阶组件' />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
