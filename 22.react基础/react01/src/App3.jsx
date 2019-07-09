import React from 'react';

// export default () => {
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// 展示型组件内部不维护数据 纯展示
const Hello = (props) => {
  return (
    <div>
      你好 {props.name}
    </div>
  )
};

export default () => {
    return (
      <div>
        <h2>父子组件</h2>
        <hr/>
        <Hello name="Jerry"/>
      </div>
    )
}
