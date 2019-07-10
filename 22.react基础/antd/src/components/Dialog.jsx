import React from 'react'

const Main = (props) => {
  return (
    <div style={{border: `10px solid ${props.color}`}}>
      {/*// 插槽*/}
      {props.children}

      <hr/>

      {/*  具名插槽*/}
      <div className="footer">
        {props.aabb}
      </div>
    </div>
  )
};

const Welcome = (props) => {
  const confirm = <button onClick={() => {
      alert('具名插槽')
  }}>
    确定
  </button>;
  return (
    <Main color={'green'} aabb={confirm}>
      <h1>Welcome</h1>
      <h2>Thank</h2>
    </Main>
  );
};


class Dialog extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}

export default Dialog;
