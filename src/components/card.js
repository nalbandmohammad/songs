import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        return (
            <div>
                {this.props.userdata.map(user => {
                   return ( 
                    <div className="m-3 p-3 card">                         
                   <h1>{user.name}</h1>
                   <p>{user.email}</p>
                   </div>
                   )
                })}
            </div>
        )
    }
}
