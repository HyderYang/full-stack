import React from 'react'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
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

