import React, { Component } from 'react'
import Logo from '../Assets/Images/logo-black.svg'
export default class logIn extends Component {
    state = {
        name: '',
        password: '',
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    LogIn = (e) => {
        e.preventDefault()
        this.props.LogIn(e, {
            adminName: this.state.name,
            adminPassword: this.state.password
        })
    }
    render() {
        if (this.props.IsLogged === false) {

            return (
                <div>
                    <div class="conatiner-fluid login">
                        <form className="form-signin w-100" onSubmit={this.LogIn}>
                            <div >
                                <img class="mb-4" src={Logo} alt="" width="72" height="72" />
                                <h1 class="h3 mb-3 font-weight-normal" style={{ "font-weight": "600", 'color': '#3a405b' }}>Sign In</h1>
                            </div>
                            <div className="mb-5 ">
                                <label for="exampleInputEmail1" className="form-label">Username *</label>
                                <input type="text" className="form-control" name="name" id="exampleInputEmail1" placeholder="Enter Your Username" required autofocus onChange={this.handleChange} />
                            </div>
                            <div className="mb-5 ">
                                <label for="exampleInputPassword1" className="form-label">Password *</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Your Password" required onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block w-100">Sign In</button>
                        </form>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    Home Page
                </div>
            )
        }

    }
}
