import React, { Component } from 'react';
import Service from '../services/services';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { Button, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import '../scss/Register.scss'

var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm,
    passwordPattern = /^[a-zA-Z0-9]{6,20}$/,
    namePattern = /[a-zA-Z]{1,10}/g

class Register extends Component {

    constructor(props) {

        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
            service: 'advanced',
            show: false
        }
    }

    input = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = () => {

        if(!namePattern.test(this.state.first_name) || !namePattern.test(this.state.last_name)){
            alert('Firstname or lastname are invalid')
        }      
     else if (!emailPattern.test(this.state.email) || !passwordPattern.test(this.state.password)) {
            alert('Email or password fields are invalid');
            return;
        }
        else if (this.state.password !== this.state.confirm_password) {
            this.setState({
                password: '',
                confirm_password: ''
            })
            alert('Passwords do not match');
            return;
        }
        else {

            var value =
            {
                firstName: this.state.first_name,
                lastName: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                service: this.state.service
            }

            let service = new Service()

            service.register(value)
                .then(res => {
                    console.log(res)
                    this.props.history.push('/')
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    showPassword(event) {
        this.setState({
            show: !this.state.show,
        })
    }

    render() {
        return (
            <div>
                <Card className="registerCard" vairant="outlined">
                    <div>
                        <div className='registertitle'>
                            <h3 className="registerHead">Fundoo</h3>
                            <div className='registerText'>
                                <h3>Register your Fundoo account</h3>
                            </div>
                        </div>
                        <form>
                            <div>
                                <div className='first'>
                                    <TextField id='firstname'
                                        label='First Name'
                                        autoComplete='off'
                                        name='first_name'
                                        margin='normal'
                                        variant='outlined'
                                        value={this.state.first_name}
                                        onChange={(event) => this.input(event)}>
                                    </TextField>
                                </div>
                                <div className='last'>
                                    <TextField id='lastname'
                                        label='Last Name'
                                        autoComplete='off'
                                        name='last_name'
                                        margin='normal'
                                        variant='outlined'
                                        value={this.state.last_name}
                                        onChange={(event) => this.input(event)}>
                                    </TextField>
                                </div>
                            </div>
                            <div>
                                <TextField id='email'
                                    label='Email'
                                    name='email'
                                    autoComplete='off'
                                    margin='normal'
                                    variant='outlined'
                                    value={this.state.email}
                                    onChange={(event) => this.input(event)}>
                                </TextField>
                            </div>
                            <div className='passwordDiv'>
                                <div className='password'>
                                    <TextField id='password'
                                        label='Password'
                                        autoComplete='off'
                                        type={this.state.show?'text':'password'}
                                        name='password'
                                        margin='normal'
                                        variant='outlined'
                                        value={this.state.password}
                                        onChange={(event) => this.input(event)}>
                                    </TextField>
                                </div>
                                <div className='confirm'>
                                    <TextField id='confirm_password'
                                        label='Confirm Password'
                                        autoComplete='off'
                                        type={this.state.show ? 'text' : 'password'}
                                        name='confirm_password'
                                        margin='normal'
                                        variant='outlined'
                                        value={this.state.confirm_password}
                                        onChange={(event) => this.input(event)}>
                                    </TextField>
                                </div>
                                <div className='registerShowPassword'>
                                    <IconButton onClick={(event) => this.showPassword(event)}>
                                        {this.state.show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </div>
                            </div>
                        </form>
                        <div className='passwordText'>
                            <p>*Use 7 or more characters with a mix of letters, numbers and special characters</p>
                        </div>
                        <div>
                            <div className='login'>
                                <a className='Link' href='/'>Log in instead</a>
                            </div>
                            <div className='registerbutton' >
                                <Button
                                    color='primary'
                                    margin='normal'
                                    variant='contained'
                                    onClick={(event) => this.submit(event)}>Submit</Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Register;