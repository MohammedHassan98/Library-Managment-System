import React, { Component } from 'react'

export default class logIn extends Component {
    render() {
        return (
            <div>
                <div class="login">
                    <form>
                        <h2 style={{ 'fontSize': '30pt', 'fontWeight': '800' }}>Log in</h2>
                        <div class="user">
                            <input type="text" name="username" placeholder="Enter Your Username" />
                        </div>
                        <div class="user">
                            <input type="text" name="password" placeholder="password" />
                        </div>
                        <div class="button">
                            <button class="btn">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
