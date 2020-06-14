import React, { Component } from 'react';
import NavBar from './NavBar'
import Drawer from './Drawer'
// import Notes from './Notes'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    'MuiInputBase': {
      'input': {
        height: "2.1875em",
        padding: "10px 12px 9px 0",
      },
      'root': {
        display: 'flex',
        marginLeft: '20px',
        cursor: 'pointer'
      }
    },
    'MuiDrawer': {
      'paper': {
        top: "81px",
        width: "250px",
        height: 'calc(100% - 50px);'
      },
      'paperAnchorDockedLeft': {
        borderRight: '0px solid'
      }
    },
    'MuiPaper': {
      'elevation4': {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1)'
      },
      'rounded': {
        borderRadius: '10px',
        border: '1px solid lightgrey'
      }
    },
    'MuiTypography': {
      'noWrap': {
        overflow: 'initial'
      },
      'h6': {
        marginLeft: "10px",
        fontSize: '1.5rem'
      }
    },
    'MuiListItem': {
      'button': {
        '&:hover': { 'borderRadius': '0 25px 25px 0' }
      },
    },
    'MuiChip': {
      'root': {
        marginLeft: '10px',
        marginTop: '10px'
      }
    },
    'MuiButtonBase': {
      'root': {
        backgroundColor: null,
        borderRadius: null
      }
    },
    'MuiButton': {
      'root': {
        backgroundColor: 'transparent'
      }
    },
    'MuiIconButton': {
      'root': {
        backgroundColor: 'transparent'
      }
    }
  }
});



class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      openDrawer: false
    }
  }

  handleDrawerOpen = () => {
    this.setState({
      openDrawer: !this.state.openDrawer,

    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div>
            <NavBar props={this.props}
              handleDrawer={this.handleDrawerOpen}
            />
          </div>
          <div>
            <Drawer
              getValue={this.state.openDrawer}
            ></Drawer>
          </div>
          {/* <div>
          <Notes />
          </div> */}
        </MuiThemeProvider>
      </div>
    )
  }
}
export default Dashboard;