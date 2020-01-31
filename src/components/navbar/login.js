import React, { Component } from 'react';
import { Container, Grid, Typography, TextField,Button } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'


const styles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
        flexGrow: 1,
    },
    category: {
        padding: '10px 20px',
        marginRight: '20px',
        background: '#ff5555'

    },
    '*': {
        background: 'red'
    }
});

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            err: false
        }
    }

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

    handlePress = () => {
        const { username, password } = this.state;
        if (!username || !password ) {
            this.setState({
                err:true
            })
        }else {
            this.setState({
                err:false
            })
            axios.post('https://dumbtick-apis.herokuapp.com/api/v1/login', {
                username: this.state.username,
                password: this.state.password
            }).then(res => {
                const data = res.data;
                // let history = useHistory();
                localStorage.setItem("id", data.users.id);
                localStorage.setItem("name", data.users.name);
                // localStorage.setItem("username", data.users.username);
                // localStorage.setItem("email", data.users.email);
                localStorage.setItem("token", data.token);
                localStorage.setItem("isLogged", true);
                // this.props.dispatch(getLogin(true));
                // history.push("/")
                window.location.reload()
            })
            console.log(username);
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Container maxWidth='md'>
                    <Grid container>
                        <Grid container justify='center' style={{ paddingTop: '0px' }}>
                            <Typography style={{ fontWeight: 'bolder', textAlign: 'center',color:'#555' }} variant='h4'>
                                LOGIN
                            </Typography>
                        </Grid>
                        <Grid container justify='center' style={{paddingTop:'90px'}}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField style={{ width: '100%', fontSize: '30px' }} id="standard-basic" label="Usernamae..." name="username" onChange={this.handleUsernameChange} required />
                                <TextField style={{ width: '100%', fontSize: '30px' }} id="standard-basic" label="Password..." type='password'  name="password" onChange={this.handlePasswordChange} required />
                                
                            </form>
                            <Button onClick={this.handlePress} variant="contained" style={{color:'white',background:'#ee5555',fontWeight:'bolder', fontSize: '20px', padding: '5px 90px', borderRadius: '10px', marginLeft: '0px',marginTop:'70px', color: 'white' }}>
                                LOGIN
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                {this.state.error ? (
                                alert("All Field Required")
                        ) : (
                            null
                        )}
            </div>
            
        );
    }
}

export default withStyles(styles)(Login);