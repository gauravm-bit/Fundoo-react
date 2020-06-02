import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';


class Login extends Component {
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
                    variant='outlined'
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

