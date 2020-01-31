import React, { Component } from 'react';
import Nav from '../navbar/nav'
import { Grid,Avatar,Paper,Box, Link, IconButton, Button, Container, TextField, Typography } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import Footer from '../footer/footer'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { BookmarkBorderOutlined, KeyboardArrowDownOutlined } from '@material-ui/icons/'


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



class Profile extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Nav />
                <Container maxWidth='md'>
                    <Grid>
                        <Grid container direction='row' style={{ paddingTop: '60px' }}>
                            <Grid>
                                <Typography variant='h3' style={{ fontWeight: 'bolder', color: '#ff5555' }}>My Profile</Typography>
                                <Typography variant='h3' style={{ fontWeight: 'bolder', color: '#555' }}>Is Bos</Typography>
                                <Typography variant='h3' style={{ color: '#555' }}>30 - 03 - 1991</Typography>
                                <Typography variant='h3' style={{ color: '#555' }}>08383212333</Typography>
                                <Typography variant='h3' style={{ color: '#555' }}>isbos@gmail.com</Typography>

                            </Grid>
                            <Grid style={{ paddingTop: '20px' }}>
                                
                            </Grid>
                            <Grid>
                            <Button variant="contained" color="primary" style={{fontSize:'8px',marginTop:140}}>
                                Edit Profile
                            </Button>
                            </Grid>
                            <Grid>
                                <PersonPinIcon  style={{fontSize:240,paddingLeft:'60px',color:'#FF5555'}} />
                            </Grid>
                        </Grid> 
                    </Grid>
                    <Grid>
                        <Typography variant='h3' style={{ fontWeight: 'bolder', color: '#ff5555',marginTop:'70px' }}>Favorite</Typography>
                    </Grid>
                    <Grid style={{ marginTop: '20px' }}>
                        <Grid>
                            
                            <Grid container direction='row' style={{ marginTop: '40px', marginBottom: '60px' }}>
                            

                                <Grid item style={{ paddingLeft: '19px' }}>
                                    <Grid style={{ maxWidth: 'w00px' }}>
                                        <img src='https://miro.medium.com/max/656/0*q9-s-lgjGyhphKiP' style={{ width: '300px', height: '249px' }} />
                                    </Grid>
                                    <Grid style={{ maxWidth: '200px', paddingTop: '15px' }}>
                                        <Typography variant='h5'>Yes, it’s npx, not npm — the difference explained</Typography>
                                        <Box display='flex' style={{ paddingTop: '20px' }}>
                                            <Box><Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/80/80/2*4zbwkqVpErRp23D7KYi1zw.jpeg" /></Box>
                                            <Box flexGrow={1}>
                                                <Link to=''>Magdalena Silijnakova</Link><br />
                                                <Typography variant='caption' color='textSecondary'>6 Dec . 6 minute Read</Typography>
                                            </Box>
                                            <Box>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <BookmarkBorderOutlined />
                                                </IconButton><span>355</span>
                                            </Box>
                                            <Box>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <KeyboardArrowDownOutlined />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item style={{ paddingLeft: '19px' }}>
                                    <Grid style={{ maxWidth: '200px' }}>
                                        <img src='https://miro.medium.com/max/656/1*dahHaMDlEHzN_oXTam7Ibw.jpeg' style={{ width: '300px', height: '249px' }} />
                                    </Grid>
                                    <Grid style={{ maxWidth: '200px', paddingTop: '15px' }}>
                                        <Typography variant='h5'>Yes, it’s npx, not npm — the difference explained</Typography>
                                        <Box display='flex' style={{ paddingTop: '20px' }}>
                                            <Box><Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/80/80/2*4zbwkqVpErRp23D7KYi1zw.jpeg" /></Box>
                                            <Box flexGrow={1}>
                                                <Link to=''>Magdalena Silijnakova</Link><br />
                                                <Typography variant='caption' color='textSecondary'>6 Dec . 6 minute Read</Typography>
                                            </Box>
                                            <Box>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <BookmarkBorderOutlined />
                                                </IconButton><span>355</span>
                                            </Box>
                                            <Box>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <KeyboardArrowDownOutlined />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    

                </Container>
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(Profile);