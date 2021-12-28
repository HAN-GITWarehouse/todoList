import React, { Component } from 'react'
import propType from 'prop-types'
import "./index.css"

export default class Item extends Component {
 
   state={mouse:false}//标识鼠标移入移出s
   
   static propType={
      updataTodo:propType.func.isRequired
   }
   
   //鼠标移入移出的回调
    handleMouse=(flag)=>{
      this.setState({mouse:flag})
    }

    handleCheck=(id)=>{

      const {updataTodo}=this.props

      return (event)=>{
        updataTodo(id,event.target.checked)
      }

    }


    handleDelet=(id)=>{
       
      if(window.confirm("你确认删除吗？")){
          this.props.Deletetodo(id)
      }

    }

    render() {
        const {id,name,done}=this.props
        const {mouse}=this.state
        return (
           <li className='list-Cord' style={{background:mouse?'#ddd':'white'}} onMouseEnter={()=>{this.handleMouse(true)}} onMouseLeave={()=>{this.handleMouse(false)}} >
              <label>
                 <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                 <span>{name}</span>
              </label>
              <button  onClick={()=>{this.handleDelet(id)}} style={{display:mouse?"block":'none'}}>删除</button>
           </li>
        )
    }
}
