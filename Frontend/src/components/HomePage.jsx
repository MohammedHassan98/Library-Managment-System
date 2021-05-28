import React, { Component } from 'react'
import NavBar from './NavBar'
import Books from './Books'
import Footer from './Footer'
export default class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <NavBar />
                </div>
                <div className="row">
                    <div className="homePage" style={{ paddingTop: '10px' }}>
                        <Books />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
