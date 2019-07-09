import React from 'react'

const Cart = (props) => {
  return (
    <div>
      <table>
        <tbody>
        {props.data.map((item) => {
            return (
              <tr key={item.title}>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={() => props.addCount(item)}>+1</button></td>
              </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  )
};

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        {id: 1, title: '精灵球'},
        {id: 2, title: '大棒槌'},
        {id: 3, title: '电风扇'},
      ],
      text: '',
      cart: [],
    };

    // 第一种绑定
    // this.addGoods = this.addGoods.bind(this);
  }

  // 第一种绑定
  // addGoods(){
  //
  // }

  // 第二种绑定
  addGoods = () => {
    this.setState((preState) => {
      return {
        goods: [...preState.goods, {id: 3, title: preState.text}],
        text: '',
      }
    })
  };

  changeText = (e) => {
    this.setState({
      text: e.target.value
    })
  };

  addToCart = (goods) => {
    const newCart = [...this.state.cart];
    const idx = newCart.findIndex((item) => {
      return item.title === goods.title;
    });
    const item = newCart[idx];

    if (item) {
      newCart.splice(idx, 1, {...item, count: item.count + 1});
    }else{
      newCart.push({...goods, count: 1});
    }

    this.setState({
      cart: newCart
    })
  };

  addCount = (item) => {
    const newCart = [...this.state.cart];
    const idx = newCart.findIndex((goods) => {
      return item.title === goods.title;
    });
    newCart.splice(idx, 1, {
      ...item, count: item.count + 1
    });
    this.setState({
      cart: newCart
    })
  };

  render() {
    console.log(this);
    // 将JS数组转换为jsx数组
    const goods = this.state.goods.map((item) => {
       return (
         <li id={item.id} key={item.id +item.title}>
           {item.title}
           <button onClick={() => this.addToCart(item)}>添加到购物车</button>
         </li>
       )
    });
    return (
      <div>
        <ul>{goods}</ul>
        {/* 添加商品 */}

        <hr/>

        <div>
          <input type="text" value={this.state.text}
                 onChange={(e) => this.changeText(e)}
          />
          <button onClick={this.addGoods}>添加商品</button>
        </div>

        <hr/>

        <Cart data={this.state.cart} addCount={this.addCount}/>
      </div>
    );
  };
}

export default App;

