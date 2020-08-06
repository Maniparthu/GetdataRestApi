import React from 'react';
class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                </table>
            </div>
         );
    }
}
 
export default Home;