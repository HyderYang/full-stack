import React from 'react'

// 包装用户表单 增加数据管理能力 校验
function KFormCreator(Comp) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.options = {};
      this.state = {};
    }

    handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({
        [name]: value
      })
    };

    getFieldDec = (field, option, InputComp) => {
      this.options[field] = option;

      return (
        <div>
          {
            React.cloneElement(InputComp, {
              name: field, // 控件值
              value: this.state[field] || '', // 控件值
              onChange: this.handleChange //时间处理
            })
          }
        </div>
      )
    };

    render() {
      return <Comp {...this.props} getFieldDec={this.getFieldDec} value={this.state}/>
    }
  };
}

// @KFormCreator
class KFormSample extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const {getFieldDec} = this.props;

    return (
      <div>
        {
          getFieldDec('uname', {
            rules: [{required: true, message: '请输入用户名'}]
          }, <input type="text"/>)
        }
        {
          getFieldDec('password', {
            rules: [{required: true, message: '请输入密码'}]
          }, <input type="password"/>)
        }
        {

        }
        <button onClick={this.submitForm}>登录</button>
      </div>
    );
  }

  submitForm = () => {
    console.log(this.props.value)
  }
}

export default KFormCreator(KFormSample);
