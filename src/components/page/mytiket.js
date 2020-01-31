import React, { Component } from 'react';
import Nav from '../navbar/nav'
import { Grid,Paper, CardContent, Card, Box, Container, TextField, Typography } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import Footer from '../footer/footer'

import {myTiket} from '../../redux/actions/ticket'
import {connect} from 'react-redux'

const styles = theme => ({
    paper: {
        padding: theme.spacing(3),
        boxShadow :'none',
        border : '1px solid #e5e5e5',
        marginTop:'12px',
        marginBottom :'20px'
      },
      card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
   
});

class MyTiket extends Component {

    componentDidMount() {
        const ticket = localStorage.getItem('id')
        this.props.getTicket(ticket)
    }


    render() {
        const {dataTicket,is_loading}=this.props.ticket
        console.log(dataTicket);
        
        if (is_loading) {
           return(<h1>Please Wait</h1>)
        }
        const { classes } = this.props;
        return (
            
            <div>
                
                <Nav/>
                <Container maxWidth='md'>
                <Grid style={{ marginTop: '80px' }}>
                        <Typography variant='h3' style={{ fontWeight: 'bolder', color: '#ff5555' }}>My Ticket</Typography>
                    </Grid>
                    <Grid container direction='row' style={{ marginTop: '60px', borderBottom: "5px solid #ee5555" }}>
                        
                    </Grid>
                    <Grid>
            {dataTicket.map((item,index)=>(
               <Card className={classes.card}>
               <CardContent>
                   <Grid style={{ padding: '70px 30px 30px 30px' }} container justify='center'>
                       <div style={{ width: '100%', height: 'auto', background: '#ee5555' }}>
                           <div style={{ margin: '30px 30px', background: 'white' }}>
                               <Grid style={{ background: '#999' }}>
                                   <Box display='flex' direction='row'>
                                       <Box flexGrow={1} style={{marginLeft:'20px',paddingBottom:'5px'}}>
                                           <Typography variant='h6'>{item.paymentUser.name}</Typography>
                                           <Typography variant='p' color='textSecondary'>{item.paymentUser.id}</Typography>
                                       </Box>
                                       <Box style={{paddingRight:'20px',marginTop:10}}>
                                           <Typography variant='h6'>Face Value Rp. {item.total_price}</Typography>
                                       </Box>
                                   </Box>
                               </Grid>
                               <Grid>
                                   <Box display='flex' direction='row'>
                                       <Box flexGrow={1} style={{margin:'20px'}}>
                                           <Typography variant='h4' color='textSecondary' style={{ fontWeight: 'bolder' }} nowrap>
                                               {item.paymentEvent.title}
                                           </Typography>
                                           <Typography variant='caption' nowrap>
                                              <time>07:00 - 08:00</time><br />
                                               <span>Bintaro Tangerang</span>
                                           </Typography>

                                       </Box>
                                       <Box style={{margin:20}}>
                                           <img style={{ maxWidth: 100, maxHeight: 100 }} src='https://api.androidhive.info/barcodes/spiderman_barcode.jpg' />
                                       </Box>
                                   </Box>
                               </Grid>
                           </div>
                       </div>
                   </Grid>
                   

               </CardContent>
           </Card>
            ))}
                        

                    </Grid>
                </Container>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return {
        ticket: state.ticket
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        getTicket:(ticket)=>dispatch(myTiket(ticket))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)((withStyles(styles)(MyTiket)))