import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar'
import UserTable from './userTable/UserTable'

class app extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Searchbar />
                <UserTable />
            </div>
        );
    }
}

export default app;
