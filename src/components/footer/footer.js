import React, { Component } from 'react';
import {Container,Grid,Typography,Link} from '@material-ui/core/'
import { Twitter,Facebook} from '@material-ui/icons/'


class Footer extends Component {
    render() {
        return (
            <div style={{ background: '#ff5555',padding:'30px 20px'}}>
                <Container maxWidth='md' style={{color:'white',fontSize:'20px'}}> 
                <Grid container direction='row' >
                    <Grid md={5}>
                        <Typography variant='h4' >Tick Dumb</Typography>
                        <p style={{ maxWidth: '250px' }}>Dumb-tick is a web based platform that provides ticket for various events     around sport , music, movie, and programing</p>
                    </Grid>
                    <Grid md={3}>
                        <Typography variant='overline'>Link <br/><Link to=''>About Us</Link></Typography>
                        <Typography variant='caption'>Follow Us</Typography>
                        <ul style={{listStyle:'none',padding:'0',lineHeight:'40px'}}>
                            <li><Twitter/> Instagram</li>
                            <li><Facebook/> Twitter</li>
                        </ul>
                    </Grid>
                    <Grid md={4}>
                        <Typography variant='caption'>Have a Question</Typography>
                        <p>Email : support@dumbtick.com</p>
                    </Grid>
                </Grid>
                </Container>
            </div>
        );
    }
}

export default Footer;