import React, { Component } from 'react';
import Cards from './card';

export default class CardList extends Component {

    state = {
        userdata:[],
        searchfield : ''
    }

    handleChange = (e) => {
        this.setState({
            searchfield: e.target.value
        })
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({userdata: data}))
        .catch(error => console.log('data is not available'))
    }


    render() {
        const { userdata, searchfield} = this.state;
        const selectuser = userdata.filter(user => user.name.toLowerCase().includes(searchfield));
        return (
            <div>
                <input type="search" onChange={this.handleChange}  placeholder="search user"/>
                <Cards userdata={selectuser} />
            </div>
        )
    }
}
