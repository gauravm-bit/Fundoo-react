import React, { Component } from 'react';
import { Tooltip, Button } from "@material-ui/core";
import RemindPopper from './RemindPopper'
import '../scss/Icons.scss'


import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",

            }
        }
    }
});

class Icons extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             remind: false,
             anchorEl: null
        }
    }

    loadReminder = (event) => {
        this.setState({
            remind: !this.state.remind,
            anchorEl:event.currentTarget
        })
    }

    closeReminder = () => {
        this.setState({
            remind: !this.state.remind
        })
    }
    

    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <div className='flex'>
                        <div id='remind' className='margin'>
                            <Tooltip title='Remind me'>
                                <Button  onClick={(event)=>this.loadReminder(event)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                        <path d="M13 9h-2v2H9v2h2v2h2v-2h2v-2h-2z" />
                                        <path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" />
                                    </svg>
                                </Button>
                            </Tooltip>
                        </div>
                        <div className='margin'>
                            <Tooltip title='Collabarator'>
                                <Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                        <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z" />
                                    </svg>
                                </Button>
                            </Tooltip>
                        </div>
                        <div id='color' className='margin'>
                            <Tooltip title='Change color'>
                                <Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                        <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" /><circle cx="6.5" cy="11.5" r="1.5" />
                                        <circle cx="9.5" cy="7.5" r="1.5" /><circle cx="14.5" cy="7.5" r="1.5" /><circle cx="17.5" cy="11.5" r="1.5" />
                                    </svg>
                                </Button>
                            </Tooltip>
                        </div>
                        <div id='archive' className='margin' onClick={this.props.archive} >
                            <Tooltip title='Archive'  >
                                <Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                        <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z" />
                                    </svg>
                                </Button>
                            </Tooltip>
                        </div>
                        <div id='more' className='margin'>
                            <Tooltip title='More' >
                                <Button>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" xmlSpace="preserve" width="22" height="22" version="1.1" viewBox="0 0 18 18" enableBackground="new 0 0 18 18">
                                        <path xmlns="http://www.w3.org/2000/svg" d="m9 5.5c1 0 1.8-0.8 1.8-1.8s-0.8-1.7-1.8-1.7-1.8 0.8-1.8 1.8 0.8 1.7 1.8 1.7zm0 1.7c-1 0-1.8 0.8-1.8 1.8s0.8 1.8 1.8 1.8 1.8-0.8 1.8-1.8-0.8-1.8-1.8-1.8zm0 5.3c-1 0-1.8 0.8-1.8 1.8s0.8 1.7 1.8 1.7 1.8-0.8 1.8-1.8-0.8-1.7-1.8-1.7z" />
                                    </svg>
                                </Button>
                            </Tooltip>
                        </div>
                        <RemindPopper close={this.closeReminder}
                        open={this.state.remind} anchorEl={this.state.anchorEl} />
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Icons;