import React from 'react'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date()
    }
  }

  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     this.setState({
  //       date: new Date(),
  //       count: this.state.count + 1
  //     });
  //     this.setState({
  //       count: this.state.count + 1
  //     });
  //   }, 1000);
  // }
  
  // setState 是异步的 不保证更新返回正确结果
  // componentDidMount() {
  //   this.setState({ count: this.state.count + 1 });
  //   this.setState({ count: this.state.count + 1 });
  //   this.setState({ count: this.state.count + 1 });
  //  
  //   console.log(this.state.count);
  // }

  componentDidMount() {
    this.setState((prevState, prevProps) => {
      return {
        count: prevState.count + 1
      }
    });
    this.setState((prevState, prevProps) => {
      return {
        count: prevState.count + 1
      }
    }, () => {
      console.log(this.state.count);
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        App
        <hr/>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default App;

