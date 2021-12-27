import React, { Component } from 'react'
import "./index.css"

export default class footer extends Component {
    render() {
        return (
           <div className='todo-footer'>
               <label>
                  <input type="checkbox"/>
                  <span>
                      <span>已完成0</span>/ 全部2
                  </span>
               </label>
                <button>清除已完成的任务</button>
           </div>
        )
    }
}
