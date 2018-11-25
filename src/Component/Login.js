import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import backgroundImage from '../icons/background-login.jpg'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button';
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
            status: true,
            username: "",
            password: "",
            passconfirm: "",
            usererro: "",
            passerro: "",
            passconfirmerro: "",
        }
    }

    updateUser = (event) => {
        this.setState({username: event.target.value});
    }

    updatePassword = (event) => {
        this.setState({password: event.target.value});
    }

    updatePasswordConfirm = (event) => {
        this.setState({passconfirm: event.target.value});
    }

    checkInfor = () => {
        if (this.state.username === "") {
            this.setState({usererro: "*Username is not empty*"});
        } else {
            this.setState({usererro: ""});
        }
        if (this.state.password === "") {
            this.setState({passerro: "*Password is not empty*"});
        } else {
            this.setState({passerro: ""});
        }
        const x = this.state.password;
        const y = this.state.passwordconfirm;
        if (x.indexOf(y) !== -1 && x.length === y.length) {
            this.setState({passconfirmerro: "*Password and password confirm not match*"});
        } else {
            this.setState({passconfirmerro: ""});
        }
        if (this.state.passconfirm === "") {
            this.setState({passconfirmerro: "*Password confirm is not empty*"});
        } else {
            this.setState({passconfirmerro: ""});
        }
    }

    loadLayoutForm = () => {
        if (this.state.status) {
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
                    <div style={{color: "red", fontSize: "10px"}}>{this.state.usererro}</div>
                    <div style={{ paddingTop: "12px" }}>
                        <InputText
                            type="password"
                            label="Password"
                            update={this.updatePassword}
                        />
                    </div>
                    <div style={{color: "red", fontSize: "10px"}}>{this.state.passerro}</div>
                    <div style={{ paddingTop: "20px", width: "150px", margin: "auto" }}>
                        <Button style={{ width: "150px", backgroundColor: "#00aeff", fontSize: "14px", color: "white" }}
                            component={Link} to="/trangchu"
                            onClick={this.checkInfor}>
                            Login
                        </Button>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div style={{ paddingTop: "10px", margin: "auto", fontSize: "25px", width: "100px" }}>
                    Sign Up
                </div>

                <div style={{ paddingTop: "10px" }}>
                    <InputText
                        label="Username"
                        update={this.updateUser}
                    />
                </div>
                <div style={{color: "red", fontSize: "10px"}}>{this.state.usererro}</div>
                <div style={{ paddingTop: "10px" }}>
                    <InputText
                        label="Password"
                        type="password"
                        update={this.updatePassword}
                    />
                </div>
                <div style={{color: "red", fontSize: "10px"}}>{this.state.passerro}</div>
                <div style={{ paddingTop: "10px" }}>
                    <InputText
                        label="Password  Confirm"
                        type="password"
                        update={this.updatePasswordConfirm}
                    />
                </div>
                <div style={{color: "red", fontSize: "10px"}}>{this.state.passconfirmerro}</div>
                <div style={{ paddingTop: "20px", width: "150px", margin: "auto" }}>
                    <Button style={{ width: "150px", backgroundColor: "#00aeff", fontSize: "14px", color: "white" }}
                        onClick={this.checkInfor}>
                        Sign Up
                    </Button>
                </div>
            </div>
        );
    }

    loadLayoutButton = () => {
        return (
            <div>
                <div style={{ fontSize: "30px", height: "100px", color: "white", marginTop: "100px" }}>
                    {this.state.status ? "If you don't have an account, Please click here!!" : "You have an account, Click here!!"}
                </div>
                <div style={{ width: "250px", margin: "auto" }}>
                    <Button style={{ width: "250px", color: "white", backgroundColor: "#ff7f00" }} onClick={this.handleClick}>
                        <div style={{ fontSize: "20px" }}> {this.state.status ? "Sign Up" : "Login"} </div>
                    </Button>
                </div>
            </div>
        );
    }

    handleClick = () => {
        this.setState({ status: this.state.status ? false : true });
    }

    render() {
        const { classes } = this.props;

        return (
            <div style={{backgroundImage: "url(" + backgroundImage + ")", width: "100%", height: "655px"}}>
                <div style={{ float: "left", marginLeft: "200px", marginTop: "100px", width: "500px" }}>
                    {this.loadLayoutButton()}
                </div>

                <Card style={{ float: "right", marginRight: "200px", marginTop: "100px", width: "350px", height: "400px" }}>
                    <div style={{ width: "250px", margin: "auto", marginTop: "50px" }}>
                        {this.loadLayoutForm()}
                    </div>
                </Card>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);