import React, { Component } from 'react';
import { Card, TextField, Button, Tooltip } from '@material-ui/core';
import '../scss/CreateNote.scss'


class Note extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            toggleCards: 'true'
        }
    }

    input = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    toggleView(event) {
        this.setState({
            toggleCards: !this.state.toggleCards,
        })
    }

    render() {
        return (
            <div>
                {this.state.toggleCards ?
                    <Card className="OpenCard" vairant="outlined"  >
                        <div>
                            <div>
                                <TextField
                                    id='title'
                                    multiline={true}
                                    name='title'
                                    placeholder='Title'
                                    value={this.state.title}
                                    onChange={(event) => this.input(event)}
                                    InputProps={{
                                        disableUnderline: true
                                    }} />
                            </div>
                            <div className='pinned'>
                                <Tooltip title='Pin note'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill='none' d="M0 0h24v24H0z" />
                                        <path d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z" />
                                    </svg>
                                </Tooltip>
                            </div>
                        </div>
                        
                        <div>
                            <TextField id='description'
                                placeholder='Take a note...'
                                multiline={true}
                                autoFocus
                                name='description'
                                value={this.state.description}
                                onChange={(event) => this.input(event)}
                                InputProps={{
                                    disableUnderline: true
                                }} />
                        </div>
                        <div id='button'>
                            <button onClick={this.createNote} className='button'>Close</button>
                        </div>
                    </Card> :
                    <Card className="ClosedCard" vairant="outlined" onClick={(event) => this.toggleView(event)}>
                        <div>
                            <TextField
                                id='closeText'
                                placeholder='Take a note...'
                                value={this.state.title}
                                InputProps={{
                                    disableUnderline: true
                                }} />
                        </div>
                    </Card>}
            </div>

        );
    }
}

export default Note;
