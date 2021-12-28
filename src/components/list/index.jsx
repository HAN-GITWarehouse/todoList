import React, { Component } from 'react'
import Item from "../item/index"
import propsTypes from "prop-types"
import "./index.css"


export default class list extends Component {

    static propsTypes={
      todo:propsTypes.array.isRequired,
      updataTodo:propsTypes.func.isRequired
    }

    render() {
        const {todos,updataTodo,Deletetodo}=this.props
        return (
          <ul className='todo-main'>
          {
            todos.map((todo)=>{
               return <Item key={todo.id} {...todo} updataTodo={updataTodo} Deletetodo={Deletetodo}/>
            })  
          }
          </ul>
        )
    }
}
