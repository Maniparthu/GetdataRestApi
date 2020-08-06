import React from 'react';
import {Link} from 'react-router-dom';
class Menu extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Link to='/'>Homepage</Link>
                &nbsp;
                <Link to='/todo'>Todo</Link>
            </div>
         );
    }
}
 
export default Menu;