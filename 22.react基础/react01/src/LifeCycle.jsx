import React from 'react'

class LifeCycle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      msg: '父组件消息: ' + props.prop
    };
    console.log('构造函数')
  }

  componentWillMount() {
    // 可以访问属性/状态
    // 进行 api 调用
    // 不能做Dom操作
    console.log('准备挂载');
  }

  componentDidMount() {
    // 组件已挂载 进行状态更新操作
    console.log('挂载完毕');
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // 父组件传递属性有变化 判断是否做响应
    console.log('父组件传递属性 准备更新组件');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // 父组件传递属性 组件是否需要更新? 返回boolean值
    // true 放行更新
    // false 禁止更新 不再执行下面的生命周期函数
    console.log('组件是否应该更新?');
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('组件将要更新');

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('组件更新完毕');

  }

  render() {
    console.log('渲染页面');
    return (
      <div>
        组件声明周期演示
        <h1>
         {this.state.msg}
        </h1>
      </div>
    );
  }
}

class LifeParent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      prop: 'foo'
    }
  }

  change = () => {
    this.setState({
      prop: 'new foo'
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.change}>改变值</button>
        <hr/>
        <LifeCycle prop={this.state.prop}/>
      </div>
    );
  }
}

export default LifeParent;
