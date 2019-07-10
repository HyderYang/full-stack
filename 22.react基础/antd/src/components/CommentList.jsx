import React, {Fragment} from 'react'

// const Comment = (props) => {
//   console.log('render');
//   return (
//     <div>
//       <p>{props.data.body}</p>
//       <p>-----------{props.data.author}</p>
//     </div>
//   )
// };

// 使用 pureComponent 达到优化目的注意两点
//  1. 确保数据类型是值类型
//  2. 如果是引用类型 确保地址不变 同时不应该有深层次数据结构变化
class Comment extends React.PureComponent {
  constructor(props){
    super(props);
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (nextProps.data.body === this.props.data.body) {
  //     return false
  //   }
  //   return true
  // }

  render() {
    console.log('render Pure');
    return (
      <div>
        <p>{this.props.body}</p>
        <p>-----------{this.props.author}</p>
      </div>
    );
  }
}

const Memo = React.memo((props) => {
  console.log('render memo');
  return (
    <Fragment>
      <p>{props.body}</p>
      <p>-----------{props.author}</p>
    </Fragment>
  );
});

class CommentList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    setInterval(() => {
        this.setState({
          comments: [
            {body: '今天天气不错', author: 'google'},
            {body: '挺风和日丽的', author: 'facebook'},

          ]
        })
    }, 3000)
  }

  render() {
    return (
      <div>
        {this.state.comments.map((item, index) => {
          return (
            <div>
              <Comment key={index + item.author} body={item.body} author={item.author}/>
              <hr/>
              <Memo key={index + item.body} {...item} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default CommentList;
