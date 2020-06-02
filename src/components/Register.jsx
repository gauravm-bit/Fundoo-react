import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Register.css';

class Register extends Component {
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
                                        name='first_name'
                                        margin='normal'
                                        variant='outlined'
                                    >
                                    </TextField>
                                </div>
                                <div className='last'>
                                    <TextField id='lastname'
                                        label='Last Name'
                                        name='last_name'
                                        margin='normal'
                                        variant='outlined'
                                    >
                                    </TextField>
                                </div>
                            </div>
                            <div>
                                <TextField id='email'
                                    label='Email'
                                    name='email'
                                    margin='normal'
                                    variant='outlined'
                                    >
                                </TextField>
                            </div>

                            <div className='passwordDiv'>
                                <div className='password'>
                                    <TextField id='password'
                                        label='Password'
                                        autoComplete='off'
                                        type="password"
                                        name='password'
                                        margin='normal'
                                        variant='outlined'
                                        >
                                    </TextField>
                                </div>
                                <div className='confirm'>
                                    <TextField id='confirm_password'
                                        label='Confirm Password'
                                        autoComplete='off'
                                        type="password"
                                        name='confirm_password'
                                        margin='normal'
                                        variant='outlined'
                                        >
                                    </TextField>
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
                                >Submit</Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Register;