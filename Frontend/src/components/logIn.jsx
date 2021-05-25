import React, { Component } from 'react'

export default class logIn extends Component {
    state = {
        IsLogged: true
    }
    render() {
        if (this.state.IsLogged === true) {

            return (
                <div>
                    <div class="login">
                        <form>
                            <h2 style={{ 'fontSize': '30pt', 'fontWeight': '800', 'textAlign': 'center' }}>Log in</h2>
                            <div className="mb-3 user">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Username" />
                            </div>
                            <div className="mb-3 user">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Enter Your Password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-1 botn">Submit</button>
                        </form>
                    </div>
                </div>
            )
        }
        else {
            <div>
                Home Page
            </div>
        }

    }
}
