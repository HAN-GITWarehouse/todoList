import React, { Component } from 'react'
import "./index.css"
import { nanoid } from "nanoid"
 
export default class Header extends Component {
    handleKeyUp=(event)=>{
      
        const {keyCode,target}=event
        if(keyCode !== 13){
            return
        }
        const todoObj={
            id:nanoid(),
            name:target.value,
            done:false
        }
        
        this.props.AddTodo(todoObj)
    }
    render() {
        return (
            <div className='header-Con'>
               <input type="text" onKeyUp={this.handleKeyUp} placeholder='请输入你的任务名称，按回车键确认'/> 
            </div>
        )
    }
}
