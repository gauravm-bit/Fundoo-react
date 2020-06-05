import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { login } from '../services/services';
import './Login.css';


var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm,
  passwordPattern = /^[a-zA-Z0-9]{6,20}$/;


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = (event) => {
    if (!emailPattern.test(this.state.email) || !passwordPattern.test(this.state.password)) {
      alert('Email or password fields are invalid');
      return;
    }
    else {
      let call =
      {
        email: this.state.email,
        password: this.state.password
      }

      console.log("sucess");
      console.log(call)

      login(call)
        .then(res => {
          sessionStorage.setItem('token', res.data.session);
          this.props.history.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })

    }
  }

  render() {
    return (
      <div>
        <Card className="loginCard" vairant="outlined">
          <div className='logintitle'>
            <h3 className="loginHead">Fundoo</h3>
            <div className='loginText'>
              <h3>Login into your Fundoo account</h3>
            </div>
          </div>
          <form>
            <div>
              <TextField className='loginTextField'
                label='Email'
                name='email'
                margin='normal'
                autoComplete='off'
                variant='outlined'
                value={this.state.email}
                onChange={(event) => this.input(event)}>
                >
              </TextField>
            </div>
            <div>
              <TextField className='loginTextField'
                label='Password'
                name='password'
                type='password'
                margin='normal'
                autoComplete='off'
                variant='outlined'
                value={this.state.password}
                onChange={(event) => this.input(event)}>
                >
              </TextField>
            </div>
          </form>
          <div>
            <div className='forgot'>
              <a className='Link' href='/forgot'>Forgot password?</a>
            </div>
            <div className='loginButton'>
              <Button color='primary'
                margin='normal'
                variant='contained'
                onClick={(event) => this.submit(event)}
              > Submit</Button>
            </div>
          </div>
          <div className='register'>
            <h3>Not registered yet?</h3>
            <a className='Link' href='/register'>Create Fundoo Account</a>
          </div>
        </Card>
      </div>
    );
  }
}

export default Login;

