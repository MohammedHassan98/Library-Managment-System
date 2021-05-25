import React, { Component } from 'react'

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
                    <div class="login">
                        <form onSubmit={this.LogIn}>
                            <h2 style={{ 'fontSize': '30pt', 'fontWeight': '800', 'textAlign': 'center' }}>Log in</h2>
                            <div className="mb-3 user">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" className="form-control" name="name" id="exampleInputEmail1" placeholder="Enter Your Username" onChange={this.handleChange} />
                            </div>
                            <div className="mb-3 user">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Your Password" onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-1 botn">Submit</button>
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
