import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';


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
    let call =
    {
      email: this.state.email,
      password: this.state.password
    }
    console.log("sucess");
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

