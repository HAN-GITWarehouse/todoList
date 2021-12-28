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
    addTodo=(todoObj)=>{

        const {todos}=this.state
        const newTodos=[todoObj,...todos]
        this.setState({todos:newTodos})

    }
    
    
    updataTodo=(id,done)=>{

       const {todos}=this.state
       
       const newTodos=todos.map(todo=>{   
           if(todo.id===id) return {...todo,done} 
           else return todo
        })

        this.setState({todos:newTodos})

    }


    Deletetodo=(id)=>{

       const {todos}=this.state

       const newTodos= todos.filter(todos=>{
            return todos.id!==id
       })

       this.setState({todos:newTodos})

    }


    chaeckAll=(done)=>{
       console.log(done);
        
       const {todos}=this.state

       const newTodos=todos.map(todo=>{
           return {...todo,done}   
       })

       this.setState({todos:newTodos})

    }

        
    render() {
        const {todos}=this.state
        return(
           <div className="todo-Con">
              <Header addTodo={this.addTodo}/>
              <List  todos={todos} updataTodo={this.updataTodo} Deletetodo={this.Deletetodo}/>
              <Footer todos={todos} chaeckAll={this.chaeckAll}/>
           </div> 
        )
    }
}

export default App