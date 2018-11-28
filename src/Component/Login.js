import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import backgroundImage from '../icons/background-login.jpg'
import backgroundForm from '../icons/background-form.jpg'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button';
import Logo1 from '../icons/logo1.png'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputText from './InputText.js';

const styles = theme => ({
    resize: {
        fontSize: 30,
    },
})

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            passconfirm: "",
            usererro: "",
            passerro: "",
            passconfirmerro: "",
        }
    }

    updateUser = (event) => {
        this.setState({ username: event.target.value });
    }

    updatePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    updatePasswordConfirm = (event) => {
        this.setState({ passconfirm: event.target.value });
    }

    checkInfor = () => {
        if (this.state.username === "") {
            this.setState({ usererro: "*Username is not empty*" });
        } else {
            this.setState({ usererro: "" });
        }
        if (this.state.password === "") {
            this.setState({ passerro: "*Password is not empty*" });
        } else {
            this.setState({ passerro: "" });
        }
        const x = this.state.password;
        const y = this.state.passwordconfirm;
        if (x.indexOf(y) !== -1 && x.length === y.length) {
            this.setState({ passconfirmerro: "*Password and password confirm not match*" });
        } else {
            this.setState({ passconfirmerro: "" });
        }
        if (this.state.passconfirm === "") {
            this.setState({ passconfirmerro: "*Password confirm is not empty*" });
        } else {
            this.setState({ passconfirmerro: "" });
        }
    }

    loadLayoutForm = () => {
        return (
            <div>
                <div style={{ paddingTop: "10px", margin: "auto", fontSize: "25px", width: "70px" }}>
                    Login
                </div>
                <div style={{ paddingTop: "10px" }}>
                    <InputText
                        label="Username"
                        update={this.updateUser}
                    />
                </div>
                <div style={{ color: "red", fontSize: "10px" }}>{this.state.usererro}</div>
                <div style={{ paddingTop: "12px" }}>
                    <InputText
                        type="password"
                        label="Password"
                        update={this.updatePassword}
                    />
                </div>
                <div style={{ color: "red", fontSize: "10px" }}>{this.state.passerro}</div>
                <div style={{ paddingTop: "20px", width: "150px", margin: "auto" }}>
                    <Button style={{ width: "150px", backgroundColor: "#00aeff", fontSize: "14px", color: "white" }}
                        component={Link} to="/"
                        onClick={this.checkInfor}>
                        Login
                    </Button>
                </div>
            </div>
        );
    }

    loadLayoutButton = () => {
        return (
            <div>
                <div style={{margin: "auto", width: "100px", marginTop: "20px"}}>
                    <img src={Logo1} style={{width: "100px", height:"100px"}}/>
                </div>
                <div style={{ fontSize: "25px", width: "100%", textAlign: "center", height: "100px", color: "black", marginTop: "10px", padding: "20px" }}>
                    Welcome to Checker
                </div>
                <div style={{ fontSize: "15px", width: "100%", textAlign: "center", marginBottom: "10px", color: "black", marginTop: "60px", paddingLeft: "20px", paddingRight: "20px" }}>
                    Click button to create new account
                </div>
                <div style={{ width: "250px", margin: "auto" }}>
                    <Button style={{ width: "250px", color: "white", backgroundColor: "#ff7f00" }}
                        component={Link} to="/register"
                    >
                        <div style={{ fontSize: "20px" }}> Sign Up</div>
                    </Button>
                </div>
            </div>
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <div style={{
                backgroundImage: "url(" + backgroundImage + ")", width: "100%", height: "100vh", display: "table"
                , position: "absolute", top: "0", left: "0"
            }}>
                <div style={{display: "table-cell", verticalAlign: "middle"}}>
                    <div style={{width:"900px", marginLeft:"auto", marginRight:"auto"}}>
                        <div style={{ float: "left", width: "500px", height:"400px", position: "relative", backgroundColor: "white", opacity: "0.9" }}>
                        </div>
                        <div style={{ float: "left", width: "500px", position: "absolute" }}>
                            {this.loadLayoutButton()}
                        </div>

                        <Card style={{ float: "right", width: "350px", height: "400px" }}>
                            <div style={{ width: "250px", margin: "auto", marginTop: "50px" }}>
                                {this.loadLayoutForm()}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);