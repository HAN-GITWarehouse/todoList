import React, { Component } from 'react'
import "./index.css"
import { nanoid } from "nanoid"
import propTypes from "prop-types"


export default class Header extends Component {
    
    //对接收的props进行类型，必要性限制
    static propTypes={
         addTodo:propTypes.func.isRequired
    }

    handleKeyUp=(event)=>{

        const {keyCode,target}=event

        if(keyCode !== 13){
            return
        }

        if(target.value.trim()===''){
            console.log('输入的内容不能为空')
            return
        }

        const todoObj={
            id:nanoid(),
            name:target.value,
            done:false
        } 

        this.props.addTodo(todoObj)
        
        target.value=""
    }
    render() {
        return (
            <div className='header-Con'>
               <input type="text" onKeyUp={this.handleKeyUp} placeholder='请输入你的任务名称，按回车键确认'/> 
            </div>
        )
    }
}
