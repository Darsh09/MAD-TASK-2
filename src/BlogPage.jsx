import React,{Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class BlogPage extends Component{
    state={
        name:null
    }
    componentDidMount(){
        const {handle}=this.props.match.params;
        const {name}=this.props.location.state;
        fetch(`${handle}`).then((name)=>{
            this.setState(()=>({name}))
        })
    }    
  state={
    todos:[
      {id:1,content:'Blog Sample 1'},
      {id:2,content:'Blog Sample 2'}
    ]
  }
  deleteTodo=(id)=>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo=(todo)=>{
    todo.id = Math.random();
    let todos=[...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  render(){
  return (
      <div className="todo-app container">
    <h1 className="center blue-text">{this.props.location.state.name}</h1>
    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    <AddTodo  addTodo={this.addTodo}/>
    </div>
  );
}
}
export default BlogPage;
