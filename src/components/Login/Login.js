import './Login.css'
import React, { Component } from 'react';
import Admin from '../Admin/Admin';
import Employee from '../Employee/Employee';



class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            Loggingin: false,
            error: "Invalid Credentials",
            errorState: "none",
            Isregister: false,

        }
        this.checkLogin = this.checkLogin.bind(this);
    }

    checkLogin(e) {
        e.preventDefault();
        if (this.state.userName === "admin" && this.state.password === "admin") {
            this.setState({
                Loggingin: true,
            });
            document.getElementById('errMsg').style.display = "none";
        } else if (this.state.userName === "employee" && this.state.password === "employee") {
            this.setState({
                Loggingin: true,
            });
            document.getElementById('errMsg').style.display = "none";
        }
        else {
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
                                {this.state.userName === 'employee' ? <Employee /> : <Admin />}
                            </div>
                        </React.Fragment>
                        :
                        <div>
                            <center>
                                < div className='Login'>
                                    <h2>Employee Login</h2>
                                    <form>
                                        <input
                                            type="text"
                                            name="Username"
                                            placeholder="User Name"
                                            className='username'
                                            onChange={(e) => this.setState({ userName: e.target.value })}
                                            required /><br />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className='username'
                                            onChange={(e) => this.setState({ password: e.target.value })}
                                            required /><br />
                                        <button type="submit" value="Login" className="submit" onClick={this.checkLogin} >Login</button>
                                        <p>Do you have an Account?</p>

                                    </form>
                                </div>
                            </center>
                        </div>
                }
            </div>
        );
    }
}

export default Login