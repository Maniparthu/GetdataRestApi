import React from 'react';
import Home from './home';
import Home from './todo';
import Home from './menu';
import Todo from './todo';
class Content extends React.Component {
    state = {  }
    render() { 
        return (  
            <switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/todo" component={Todo}></Route>
            </switch>
        );
    }
}
 
export default Content;