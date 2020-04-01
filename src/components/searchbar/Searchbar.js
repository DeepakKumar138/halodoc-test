import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchDetails} from './../../store/actionCreator'

class Searchbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ""
        }
        this.inputChange = this.inputChange.bind(this)
        this.searchClick = this.searchClick.bind(this)
    }
    inputChange (event) {
        this.setState({ input: event.target.value })
    }
    searchClick () {
        this.props.fetchDetails(this.state.input)
    }
    render() {
        return (
            <div className="container-fluid mb-4 mt-4">
                <div className="row m-0">
                    <div>
                        <input type="text" value={this.state.input} onChange={this.inputChange}/>
                    </div>
                    <div>
                        <button onClick={this.searchClick}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    search: state.search, 
})

const mapDispatchToProps = {
    fetchDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)

//search:
// loading: false
// data:
//  hits: Array(2)
