import {createElement, Component} from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render() {
    // return (
    //   <div>
    //     App组件
    //   </div>
    // )
    return createElement(
      "div",
      {id: 'div1', className: 'div-warp'},
      "hello I am ",
      4 * 7,
      " years old"
    )
  }
}
