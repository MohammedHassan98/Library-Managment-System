import React, { Component } from 'react'
import NavBar from './NavBar'
import Books from './Books'
import Footer from './Footer'
export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="homePage" style={{ paddingTop: '10px' }}><Books /> </div>
                <Footer />
            </React.Fragment>
        )
    }
}
