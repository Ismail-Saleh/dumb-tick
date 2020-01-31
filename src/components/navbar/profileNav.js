import React, { Component } from 'react';
import { Container,Box, Grid, Typography, TextField, Button } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'

const styles = theme => ({
    root: {
        '& > *':
        {
            margin: theme.spacing(1),
            width: 200,
        },
        flexGrow: 1,
    },
    category:
    {
        padding: '10px 20px',
        marginRight: '20px',
        background: '#ff5555'
    },
    '*':
    {
        background: 'red'
    }
});

class ProfileNav extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            name: "",
            err: false
        }
    }

    handleNameChange = event => {
        const input = event.target;
        const value = input.value;
    
        this.setState({ [input.name]: value }, () => {
            
        });
      };

      handleEmailChange = event => {
        const input = event.target;
        const value = input.value;
    
        this.setState({ [input.name]: value }, () => {
            
        });
      };

      handleUsernameChange = event => {
        const input = event.target;
        const value = input.value;
  
        this.setState({ [input.name]: value }, () => {
            
        });
    };

    handlePasswordChange = event => {
        const input = event.target;
        const value = input.value;
  
        this.setState({ [input.name]: value }, () => {
            
        });
    };

    handleUserImageChange =event =>{
        const input = event.target;
        const value = input.value;

        this.setState({[input.name]:value},()=>{

        });
    };
    handlePhoneNumberChange =event =>{
        const input = event.target;
        const value = input.value;

        this.setState({[input.name]:value},()=>{

        });
    };

    handlePress = () => {
        const { username, password, email, name } = this.state;
        if (!username || !password || !name || !email ) {
            this.setState({
                err:true
            })
        }else {
            this.setState({
                err:false
            })
            axios.post('https://dumbtick-apis.herokuapp.com/api/v1/register', {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                name: this.state.name,
                phoneNumber: this.state.PhoneNumber,
                userImage :this.state.UserImage,

            }).then(res => {
                const data = res.data;
                console.log(data)
                localStorage.setItem("id", data.datauser.id);
                localStorage.setItem("name", data.datauser.name);
                localStorage.setItem("username", data.datauser.username);
                localStorage.setItem("email", data.datauser.email);
                localStorage.setItem("phoneNumber", data.datauser.phoneNumber);
                localStorage.setItem("UserImage", data.datauser.userImage);
                localStorage.setItem("token", data.token);
                localStorage.setItem("isLogged", true);
                window.location.reload()
            })
        }
    }



    render() {
        const { classes } = this.props;
        return (
            <div>
                <Container maxWidth='md' style={{paddingLeft:'90px'}}>
                    <Grid container>
                        <Grid container  style={{ paddingTop: '0px',paddingLeft:'10px' }}>
                            <Typography style={{ fontWeight: 'bolder', color: '#555' }} variant='h4'>
                                REGISTER
                            </Typography>
                        </Grid>
                        <Grid container justify='center'>
                            <form className={classes.root} noValidate autoComplete="off">
                                <Box display='row'>
                                    <Box item>
                                        <TextField style={{ width: '100%', fontSize: '30px' }} label="Name..." name="name" onChange={this.handleNameChange} required />
                                        <TextField style={{ width: '100%', fontSize: '30px' }} label="Email..." name="email" onChange={this.handleEmailChange} required />
                                        <TextField style={{ width: '100%', fontSize: '30px' }} label="Usernmae..." name="username" onChange={this.handleUsernameChange} required />
                                        <TextField style={{ width: '100%', fontSize: '30px' }} label="Password..." name="password" onChange={this.handlePasswordChange} required />
                                        <TextField style={{ width: '100%', fontSize: '30px' }} label="User Image..." name="UserImage" onChange={this.handleUserImageChange} required />
                                        <TextField style={{ width: '100%', fontSize: '30px' }} label="Phone Number..." name="PhoneNumber" onChange={this.handlePhoneNumberChange} required />
                                    </Box>
                                    
                                </Box>                                

                                <Button onClick={this.handlePress} variant="contained" style={{ color: 'white', background: '#ee5555', fontWeight: 'bolder', fontSize: '20px', padding: '5px 90px', borderRadius: '10px', marginLeft: '0px', color: 'white' }}>
                                    Register
                            </Button>
                            </form>
                            {this.state.error ? (
                                alert("All Field Required")
                            ) : (
                                    <div></div>
                                )}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(ProfileNav);