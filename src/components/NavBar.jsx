import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputBase from '@material-ui/core/InputBase';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Divider,
    List,
    Typography,
    Paper,
    Box,
    responsiveFontSizes
} from '@material-ui/core';
import logo from './keep.png'

//css styles
const useStyles = makeStyles({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: '1rem',
        backgroundColor: 'transparent',
        width: 80,
        height: 80,
    },
    largeIcon: {
        width: 35,
        height: 35,
        color: '#5f6367',
        cursor: 'pointer'
    },
    logo: {
        marginLeft: "10px",
        marginRight: "10px"
    },
    titlebar: {
        fontSize: "1.7em",
        color: "#5f6368",
        marginRight: "4em"
    },
    root: {
        padding: '4px 10px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f1f3f4',
        width: 700,
    },
    input: {
        flex: 1,
        fontSize: '20px'
    },
    iconButton: {
        padding: 10,
    },
    searchButton: {
        fontSize: '1em'
    }
})

export const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar className='appbar' elevation={1} position="fixed" color="inherit">
                <Toolbar>
                    <IconButton
                        edge='start'
                        color='inherit'
                        className={classes.menuButton}
                    >
                        <MenuIcon
                            className={classes.largeIcon}
                        />
                    </IconButton>
                    <img className={classes.logo} src={logo} alt="Logo" />
                    <Typography className={classes.titlebar} variant="h6">Fundoo</Typography>
                    <div className={classes.search}>
                        <Paper component="form" className={classes.root}>
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon className={classes.searchButton} />
                            </IconButton>
                            <InputBase
                                className={classes.input}
                                placeholder="Search"
                            />
                        </Paper>
                    </div>
                    <div>
                        <IconButton>
                            <ShoppingCartIcon />
                        </IconButton>
                        
                        <IconButton>
                        <ViewStreamIcon />
                        </IconButton>

                        <IconButton>
                          <AccountCircleIcon />
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar >
        </div >
    )
}
export default NavBar;