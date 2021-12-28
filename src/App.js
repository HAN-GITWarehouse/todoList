//引入包的时候有原则第三方的模块往上靠。自己模块的往下靠
import React,{Component} from "react";
import Header from './components/head'
import List from './components/list'
import Footer from "./components/footer"
import './App.css'

class App extends Component{
    state={
       todos:[
          {
              id:"01",
              name:"吃饭",
              done:true
          },{
              id:"02",
              name:"睡觉",
              done:false
          },{
              id:"03",
              name:"代码",
              done:false
          }
       ]
    }

    // AddTodo用于添加一个todo 接受的参数是todo对象
    AddTodo=(todoObj)=>{
        const {todos}=this.state
        const newTodos=[...todoObj,todos]
        this.setState({todos:newTodos})
    } 
    render() {
        const {todos}=this.state
        return(
           <div className="todo-Con">
              <Header AddTodo={this.AddTodo}/>
              <List  todos={todos} />
              <Footer/>
           </div> 
        )
    }
}

export default App