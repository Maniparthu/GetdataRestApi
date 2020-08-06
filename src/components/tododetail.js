import React from 'react';
class TodoDetail extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() { 
        return (
            <tr>  
            <td>{this.props.userId}</td>
            <td>{this.props.id}</td>
            <td>{this.props.title}</td>
            <td>{this.props.completed}</td>
            </tr>
        );
    }
}
 
export default TodoDetail;