import React, { Component } from 'react';
import Moment from 'react-moment'
import { Container, Grid, Typography, Card, CardContent, CardActions, Button, Box } from '@material-ui/core'
import axios from 'axios'


class PaymentComfirm extends Component {

    constructor(props){
        super(props)
        this.state={
                hide:''
            }
    }
    
    // handleConfirm = () =>{
    //     this.setState({
    //         hide:'none'
    //     })
    //     console.log(this.state.hide);
    // }

    handleConfirm = () =>{
        const status = this.props.status
        const id = this.props.id
        const confirmData = {
            id: id,
            status: "Pending"
        }

        console.log(status, id);

        axios.patch(`https://dumbtick-apis.herokuapp.com/api/v1/comfirm/${id}`, confirmData).then(
            res => {
                console.log(res);
                this.setState({
                    hide:'none'
                })
                console.log(this.state.hide);
            },
            err => {
                console.log("error", err);
            }
        );

        
    }

    render() {
        console.log(this.state.hide);
        
        return (
            <div key={this.props.id} style={{display:this.state.hide}}>
                                        <Grid style={{ padding: '70px 30px 30px 30px' }} container justify='center'>
                                            <div style={{ width: '80%', height: 'auto', background: '#ee5555' }}>
                                                <div style={{ margin: '30px 30px', background: 'white' }}>
                                                    <Grid style={{ background: '#999' }}>
                                                        <Box display='flex' direction='row'>
                                                            <Box flexGrow={1} style={{ marginLeft: '20px', paddingBottom: '5px' }}>
                                                                <Typography variant='h6'>{this.props.name}</Typography>
                                                                <Typography variant='p' color='textSecondary'>{this.props.id}. {this.props.name}</Typography>
                                                            </Box>
                                                            <Box style={{ paddingRight: '20px', marginTop: 10 }}>
                                                                <Typography variant='h6'>Face Value Rp. {this.props.price}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid>
                                                        <Box display='flex' direction='row'>
                                                            <Box flexGrow={1} style={{ margin: '20px' }}>
                                                                <Typography variant='h4' color='textSecondary' style={{ fontWeight: 'bolder' }} nowrap>
                                                                   {this.props.title}
                                                                </Typography>
                                                                <Typography variant='caption' nowrap>
                                                                    <Moment format='D-MMM-YYYY, hh:mm '><time>{this.props.date}</time></Moment><br />
                                                                    <span>{this.props.location}</span>
                                                                </Typography>

                                                            </Box>
                                                            <Box style={{ margin: 20 }}>
                                                                <img style={{ maxWidth: 100, maxHeight: 100 }} src='https://api.androidhive.info/barcodes/spiderman_barcode.jpg' />
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid style={{ marginLeft: 180 }} container>
                                            <Typography variant='h5' style={{ width: '100%' }}>Shopping summary</Typography>
                                            <Grid container direction='row'>
                                                <Grid md={7}>
                                                    <Typography color='textSecondary' variant='caption' nowrap>
                                                        Total Price ({this.props.qty} Item)
                                            </Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography variant='caption' color='textSecondary' nowrap>
                                                        Rp. {this.props.total}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <hr />
                                        <Grid style={{ marginLeft: 180 }} container>
                                            <Typography variant='h5' style={{ width: '100%' }}>Prove of Payment</Typography>
                                            <Grid container direction='row'>
                                                <Grid md={7}>
                                                    <img src='http://toursbyrail.com/wp-content/uploads/2019/02/Struk-Tiket-Indomaret.jpg' style={{ marginLeft: 30, maxWidth: 120, maxHeight: 160 }} />                                        </Grid>
                                                <Grid>
                                                    <Button onClick={this.handleConfirm} variant="contained" style={{ background: '#ee5555', color: 'white'}}>
                                                        Comfirm
                                            </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
        );
    }
}

export default PaymentComfirm;