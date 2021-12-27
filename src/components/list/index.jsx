import React, { Component } from 'react'
import Item from "../item/index"
import "./index.css"


export default class list extends Component {
    render() {
        const {todos}=this.props
        return (
          <ul className='todo-main'>
          {
            todos.map((todo)=>{
               return <Item key={todo.id} {...todo}/>
            })  
          }
          </ul>
        )
    }
}
