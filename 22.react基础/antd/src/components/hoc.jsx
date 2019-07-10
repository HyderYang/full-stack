import React from 'react'

const rungo = (props) => {
  return (
    <div>
      {props.stage} - {props.name}
    </div>
  )
};

// const hRungo = (Comp) => {
//   return (props) => {
//     return <Comp {...props} name="高阶组件" />
//   }
// };

// 高阶组件扩展生命周期
const hRungo = (Comp) => {

  class NewComponent extends React.Component{
    componentDidMount() {
      console.log('高阶组件DidMount')
    }

    render() {
      return (
        <div>
          <Comp {...this.props} name={"高阶组件"}/>
        </div>
      );
    }
  }

  return NewComponent;
};

// 链式调用
const withLog = (Comp) => {
  console.log(Comp.name + '渲染了');
  return (props) => {
    return (
      <Comp {...props} />
    )
  }
};

class Hoc extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default withLog(hRungo(rungo));
