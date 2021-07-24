
import React, { Component } from 'react';
import './Register.css';


class Register extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            deparment: "",
            address: "",
            Loggingin: false,
            error: "Invalid Credentials",
            errorState: "none",
            Isregister: false
        }
        this.checkRegister = this.checkRegister.bind(this);

    }
    checkRegister(e) {
        e.preventDefault();
        if (this.state.userName === "Madhu" && this.state.password === "Ramarao") {
            this.setState({
                Loggingin: true,
            });
            document.getElementById('errMsg').style.display = "none";
        } else {
            this.setState({
                errorState: "block"
            });
        }
    };

    makeLogout = () => {
        this.setState({
            Loggingin: false,
        });
    }
    render() {
        return (
            <div>

                <div className="errMsg" id="errMsg" style={{ display: this.state.errorState }}>
                    {this.state.error}
                </div>
                {
                    this.state.Loggingin ?
                        <React.Fragment>
                            <div className="Logout-emp" id="Logout-emp">
                                <button onClick={this.makeLogout} className="logout-btn">Logout</button>
                                <h1>Registeration Successful</h1>
                            </div>
                        </React.Fragment>
                        :
                        <div>
                            <center>
                                < div className='Register'>
                                    <h2>Employee Register</h2>
                                    <form>
                                        <table>
                                            <tr>
                                                <td>User Name:</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Username"
                                                        placeholder="User Name"
                                                        className='username'
                                                        onChange={(e) => this.setState({ userName: e.target.value })}
                                                        required />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Password:</td>
                                                <td>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        className='username'
                                                        onChange={(e) => this.setState({ password: e.target.value })}
                                                        required />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Department:</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Department"
                                                        placeholder="Department"
                                                        className='username'
                                                        onChange={(e) => this.setState({ deparment: e.target.value })}
                                                        required />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Address:</td>
                                                <td>
                                                    <textarea
                                                        type="text"
                                                        name="Address"
                                                        placeholder="Address"
                                                        className='username'
                                                        onChange={(e) => this.setState({ address: e.target.value })}
                                                        required />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <button type="submit" value="Login" className="submit" onClick={this.checkRegister} >Register</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </center>
                        </div>

                }
            </div>
        );
    }
}

export default Register;