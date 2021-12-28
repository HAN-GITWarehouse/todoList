import React, { Component } from 'react'
import "./index.css"

export default class footer extends Component {

    handleCheckAll=(event)=>{
        console.log(event.target.checked);
        this.props.chaeckAll(event.target.checked)
    }

    render() {
        const { todos } = this.props
        const doneCount=todos.reduce((pre,todo)=>{return pre + (todo.done?+1:+0)},0) 
        const total =todos.length
        return (
           <div className='todo-footer'>
               <label>
                  <input type="checkbox" onChange={ this.handleCheckAll } checked={ doneCount === total && total!==0 ? true : false }/>
                  <span>
                      <span>已完成{ doneCount }</span>/ 全部{  total }
                  </span>
               </label>
                <button onClick={()=>{this.Delete()}}>清除已完成的任务</button>
           </div>
        )
    }
}
