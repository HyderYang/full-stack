import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import CommentList from './components/CommentList'
// import Dialog from './components/Dialog'
// import Hoc from './components/hoc'
// import AntdTest from './components/AntdTest'
// import KFormSample from './components/KFormSample'
import RichText from './components/richText'

// ReactDOM.render(<Dialog />, document.getElementById('root'));
ReactDOM.render(<RichText content={"<h1>哈哈</h1>"} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
