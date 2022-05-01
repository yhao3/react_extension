import React, { Component } from 'react'

export default class Demo extends Component {

  state = { count: 0 }

  add = () => {
    // 1. 獲取原 count 值
    // const {count} = this.state
    // 2. 更新 state
    // 寫法(一): setState(物件)
    // this.setState( 
    //   // 參數(1): 一個物件
    //   {count: count+1}, 
    //   // 參數(2): callback function(可選的)
    //   () => {
    //     console.log('callback function 印出: ', this.state.count); // 1 (callback會在render後才調用，故state一定是更新後的)
    //   } )
    //   console.log('一般console.log 印出: ', this.state.count); // 0      (因為更新 state 是異步的)

    // 寫法(二): setState(函式)   該函式可以接收state跟props兩參數
    this.setState( 
      // 參數(1): 一個函式
      (state, props) => {
        console.log(state, props);
        return { count: state.count+1 }
      }, 
      // 參數(2): callback function(可選的)
      () => {
        console.log('callback function 印出: ', this.state.count); // 1 (callback會在render後才調用，故state一定是更新後的)
      })
  }

  render() {
    return (
      <div>
        <h2>當前總和為: { this.state.count }</h2>
        <button onClick={this.add}>點我 + 1</button>
      </div>
    )
  }
}
