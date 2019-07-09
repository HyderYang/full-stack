import React from 'react';
import Logo from './logo.png';
import './app.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  username = function(user){
    return user.fname + ' ' + user.lname;
  };

  render() {
    const name = 'Jerry';
    const vDom = <h1>虚拟DOM</h1>;

    return (
      <div>
        App组件
        <hr/>
        {name}
        <hr/>
        <p>{this.username({fname: '张', 'lname': '三'})}</p>
        <hr/>
        <img src={Logo} style={{width: 100, height: '100px'}}
             alt='logo' className='img'
        />
        <hr/>
        {vDom}
      </div>
    )
  }
}
