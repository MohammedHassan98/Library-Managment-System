import React, { Component } from 'react'
import NavBar from './NavBar'
import Books from './Books'
export default class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                <Books /> 
            </div>
        )
    }
}
