import React, { Component } from 'react'
import "./index.css"

export default class Header extends Component {
    handleKeyUp=(event)=>{
       console.log(event.target.value,event.keyCode);
    }
    render() {
        return (
            <div className='header-Con'>
               <input type="text" onKeyUp={this.handleKeyUp} placeholder='请输入你的任务名称，按回车键确认'/> 
            </div>
        )
    }
}
