import React, { Component } from 'react';
import { forgot } from '../services/services';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Forgot.css';

var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm

class Forgot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    input = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = (event) => {
        if (!emailPattern.test(this.state.email)) {
            alert('Enter a proper email address');

        }
        else {

            var value =
            {
                email: this.state.email
            }

            forgot(value, (error, response) => {
                if (error) {
                    console.log('Error-->', error);
                }
                else {

                    console.log(response)
                    alert('Link has been sent to your registered email address');
                    this.setState({
                        email: ''
                    })

                }
            });
        }
    }

    render() {
        return (
            <div>
                <Card className="forgotCard" vairant="outlined">
                    <div className='forgotTitle'>
                        <h3 className="forgotHead">Fundoo</h3>
                    </div>
                    <div className='forgotText'>
                        <h3>Enter your Email address</h3>
                    </div >
                    <form>
                        <div className="email-position">
                            <TextField id='forgot-email'
                                label='Email'
                                name='email'
                                autoComplete='off'
                                margin='normal'
                                variant='outlined'
                                value={this.state.email}
                                onChange={(event) => this.input(event)}>
                            </TextField>
                        </div>
                        <div className='submitbutton' >
                            <Button
                                color='primary'
                                margin='normal'
                                variant='contained'
                                onClick={(event) => this.submit(event)}>Submit</Button>
                        </div>
                    </form>
                </Card>

            </div>
        )
    }
}
export default Forgot;