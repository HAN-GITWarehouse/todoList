import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {
    render() {
        const { name,id,done}=this.props
        return (
           <li className='list-Cord'>
              <label>
                 <input type="checkbox" defaultChecked={done}/>
                 <span>{name}</span>
              </label>
              <button style={{display:"none"}}>删除</button>
           </li>
        )
    }
}
