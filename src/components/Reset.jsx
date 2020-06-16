import React, { Component } from 'react';
import Service from '../services/services';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { Button, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Snackbar from '@material-ui/core/Snackbar';
import '../scss/Reset.scss'

class Reset extends Component {

    constructor(props) {

        super(props);
        console.log(this.props.match.params.token);

        this.state = {
            password: '',
            confirm_passwword: '',
            snackbaropen: false,
            snackbarmsg: ''
        }
        this.submit = this.submit.bind(this)

    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false })
    }

    input = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = () => {
        if (this.state.password !== this.state.confirm_password) {
            //  alert('Passwords dont match.Please enter again');
            this.setState({ snackbaropen: true, snackbarmsg: 'Passwords dont match.Please enter again' })
            this.setState({
                password: '',
                confirm_password: ''
            })
            return;
        }
        let token = this.props.match.params.token;

        let value =
        {
            newPassword: this.state.password
        }

        let service = new Service()

        service.reset(value, token)
            .then(res => {
                console.log(res)
              //  alert('Password has been changed sucessfully');
                this.setState({ snackbaropen: true, snackbarmsg: 'Password has been changed sucessfully' })

                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    showPassword(event) {
        this.setState({
            show: !this.state.show,
        })
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
                                    type={this.state.show ? 'text' : 'password'}
                                    name='password'
                                    margin='normal'
                                    variant='outlined'
                                    value={this.state.password}
                                    onChange={(event) => this.input(event)}>
                                </TextField>
                                <TextField id='r-confirm_password'
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
                            <div className='resetShowPassword'>
                                <IconButton onClick={(event) => this.showPassword(event)}>
                                    {this.state.show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
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
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.snackbarClose}
                        >
                            x
                        </IconButton>
                    ]}
                />
            </div>
        )
    }
}
export default Reset;
