import React from 'react';
import TodoDetail from './tododetail';
import axios from 'axios';
class Todo extends React.Component {
   constructor(props){
       super(props)
       this.state={
           todo:[]
       }
   }
   componentWillMount(){
       this.getTodo()
   }
   componentDidMount(){
       console.log(this.props)
   }
   getTodo=()=>{
       axios.get("https://jsonplaceholder.typicode.com/todos")
       .then(response =>{
           console.log(response)
           console.log(response.data)
           this.setState({todo:response.data})
           console.log(this.state.todo)
       },error =>{
           console.log(error)
       })
   }
   rendergetTodo =()=>{
       return this.state.todo.map(todo =>{
           return(
               <TodoDetail
                   id={todo.id}
                   userId={todo.userId}
                   title={todo.title}
                   Completed={todo.completed}>
               </TodoDetail>
           )
       })
   }
    render() { 
        return (  
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.rendergetTodo()}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Todo;