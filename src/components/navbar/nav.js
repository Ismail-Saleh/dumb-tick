import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Avatar, AppBar, Box, Typography, Dialog,Menu,MenuItem, DialogContent } from '@material-ui/core/';
import { LockOpen, AccountCircle,MeetingRoom, ConfirmationNumberOutlined,Person,PostAdd } from '@material-ui/icons';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'

import Register from './profileNav'
import Login from './login'


class Comment extends Component {
    state = {
        open: false,
        openlogin: false,
        display: 'none',
        login: 'none',
        anchorEl:null
    };

    // dropdown
        dropdown=event=>{
            console.log('drop');
            const dropdown = event.currentTarget
            this.setState({anchorEl:dropdown})            
        }
    // 

    // Close Handle
        handleClose=()=>{
            console.log('clsose');
            this.setState({anchorEl:null})
        }
    // 

    openDialog() {
        this.setState({ open: true });
    }

    Logout = () => {
        console.log('clicked');
        window.localStorage.clear();
        window.location.reload()

    }

    openLogin() {
        this.setState
            ({
                openlogin: true
            })
    }

    componentDidMount() {
        const token = localStorage.getItem('token')

        if (token) {
            this.setState({ display: 'hidden' })
            this.setState({ login: 'block' })
        }
        else {
            this.setState({ display: 'block' })
            this.setState({ login: 'hidden' })
        }

    }
    render() {
        const { classes } = this.props;
        const name = localStorage.getItem('name')
        const id = localStorage.getItem('id')
        const myTicket = `/myTicket/${id}`
        return (
            <div >


                <div className={classes.root}>
                    <AppBar position="static" style={{ background: '#ff5555', color: '#000', boxShadow: '0px -9px 19px 1px rgba(0,0,0,0.75)' }}>
                        <Toolbar>
                            <div style={{ width: '100%' }}>
                                <Box display="flex" p={1} >
                                    <Box p={1} flexGrow={1} >
                                        <ConfirmationNumberOutlined className={classes.brand} /><Link to='/' className={classes.brand}>Dumb-Tick</Link>
                                    </Box>
                                    <Box p={1} style={{ display: this.state.display }}>
                                        <Link to=''>
                                            <Box display='flex' style={{ color: 'white' }}>
                                                <Box item><LockOpen style={{ marginTop: '5px', marginRight: '7px' }} /></Box>
                                                <Box><Typography variant='h5' onClick={this.openDialog.bind(this)}>Register</Typography></Box>
                                            </Box>
                                        </Link>
                                    </Box>

                                    <Box p={1} style={{ display: this.state.login }}>
                                        <Link to=''>
                                            <Box display='flex' style={{ color: 'white' }}>
                                                <Box>
                                                    <Typography variant='h5' onClick={this.dropdown}><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                                        
                                                    </Typography>
                                                    <Menu
                                                        id="simple-menu"
                                                        anchorEl={this.state.anchorEl}
                                                        keepMounted
                                                        open={Boolean(this.state.anchorEl)}
                                                        onClose={this.handleClose}
                                                        style={{paddingRight:40}}
                                                    >
                                                        <MenuItem onClick={this.handleClose}style={{paddingBottom:10,paddingLeft:'-20px',marginTop: 10}}>
                                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{marginRight:10}} />{name}
                                                        </MenuItem><hr style={{width:'80%', borderColor:'#eee'}}/>
                                                        <MenuItem onClick={this.handleClose}><Person className={classes.icon} />
                                                            <Link to='/profile'>Profile</Link>
                                                        </MenuItem>
                                                        <MenuItem onClick={this.handleClose}><ConfirmationNumberOutlined className={classes.icon} />
                                                            <Link to={myTicket}>My Ticket</Link>
                                                        </MenuItem>
                                                        <MenuItem onClick={this.handleClose}><PostAdd className={classes.icon} />
                                                            <Link to='/addEvent'>Add Event</Link>
                                                        </MenuItem>
                                                        <MenuItem onClick ={this.Logout}>
                                                           <MeetingRoom className={classes.icon} /> Logout
                                                        </MenuItem>
                                                    </Menu>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </Box>

                                    <Box p={1} style={{ display: this.state.display }}>
                                        <Link to=''>
                                            <Box display='flex' style={{ color: 'white' }}>
                                                <Box item><AccountCircle style={{ marginTop: '5px', marginRight: '7px' }} /></Box>
                                                <Box item><Typography variant='h5' onClick={this.openLogin.bind(this)}>Login</Typography></Box>
                                            </Box>
                                        </Link>
                                    </Box>

                                </Box>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Dialog open={this.state.open} maxWidth='xs' style={{ maxHeight: 1200, }}>
                        <DialogContent style={{ overflow: 'hidden', height: '900px', background: '#F4E1E1' }}>
                            <Register />
                        </DialogContent>
                    </Dialog>
                    <Dialog open={this.state.openlogin} maxWidth='xs' style={{ maxHeight: 1200, }}>
                        <DialogContent style={{ overflow: 'hidden', height: '900px', background: '#F4E1E1' }}>
                            <Login />
                        </DialogContent>
                    </Dialog>


                </div>


            </div>
        );
    }
}


const styles = theme => ({
    img: {
        width: '80%',
        heigth: 'auto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    flex1: {
        width: '300px', textAlign: 'left',
        float: 'right',
        paddingLeft: '20px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#222',
        fontFamily: 'Arial',

    },
    p: {
        color: '#111',
        textDecoration: 'none',

    },
    month: {
        color: '#555',
    },
    judul: {
        fontWeight: '700',
        lineHeight: '24px',
        color: 'white'
    },
    pFlex: {
        width: '300px', textAlign: 'left',
        float: 'right',
        fontSize: '13px',
        textDecoration: 'none',
        color: '#222',
        fontFamily: 'Arial'
    },
    brand: {
        textAlign: "left",
        color: 'white',
        fontSize: '29px',
        fontWeight: '800'
    },
    orange: {
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    icon:{
        color:'#555',
        paddingRight:20,
        paddingLeft:4
    }
});

export default withStyles(styles)(Comment);