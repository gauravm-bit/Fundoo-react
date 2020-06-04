import React, { Component } from 'react';
import { reset } from '../services/services';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Reset.css';

class Reset extends Component {

    constructor(props) {
        
        super(props);
        console.log(this.props.match.params.token);

        this.state = {
            password: '',
            confirm_passwword: ''
        }
    }

    input = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = (event) => {
        if (this.state.password !== this.state.confirm_password) {
            alert('Passwords dont match.Please enter again');
            this.setState({
                password: '',
                confirm_password: ''
            })
            return;
        }
        let token=this.props.match.params.token;
      
        let value =
        {
            newPassword: this.state.password
        }

        reset(value,token, (error, response) => {
            if (error) {
                console.log('Error-->', error);
            }
            else {
                console.log('Response-->', response)
            }
        });
    }

    render() {
        return (
            <div>
                <Card className="resetCard" vairant="outlined">
                    <div className='resetTitle'>
                        <h3 className="resetHead">Fundoo</h3>
                    </div>
                    <div className='resetText'>
                        <h3>Enter new password</h3>
                    </div>
                    <form>
                        <div>
                            <div className='password-reset'>
                                <TextField id='r-password'
                                    label='Password'
                                    autoComplete='off'
                                    type='password'
                                    name='password'
                                    margin='normal'
                                    variant='outlined'
                                    value={this.state.password}
                                    onChange={(event) => this.input(event)}>
                                </TextField>
                                <TextField id='r-confirm_password'
                                    label='Confirm Password'
                                    autoComplete='off'
                                    type='password'
                                    name='confirm_password'
                                    margin='normal'
                                    variant='outlined'
                                    value={this.state.confirm_password}
                                    onChange={(event) => this.input(event)}>
                                </TextField>
                            </div>
                        </div>
                        <div>
                            <div className='resetButton'>
                                <Button color='primary'
                                    margin='normal'
                                    variant='contained'
                                    onClick={(event) => this.submit(event)}
                                > Submit</Button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        )
    }
}
export default Reset;