import React, { Component } from 'react';
import { Container, Grid, Typography, Card, CardContent, CardActions, Button, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Moment from 'react-moment'
import { payment } from '../../redux/actions/payment'
import { connect } from 'react-redux'
import axios from 'axios';

import Nav from '../navbar/nav'
import PaymentConfirm from '../paymentComfirm'

const styles = theme => ({
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



class Payment extends Component {


    // constructor(props){
    //     super(props)
    //     this.state={
    //             hide:''
    //         }
    // }

    // handleConfirm = (val)=> () => {
    //     const id = val
    //     this.setState({
    //         hide:'none'
    //     })

        // const idPay= idPayment
        // const dataPayment = this.props.payment.dataPayment
        // const status = dataPayment.status
        // const id = dataPayment.id
        // const confirmData = {
        //     id: id,
        //     status: "Pending"
        // }

        // console.log(status, id);

        // axios.patch(`https://dumbtick-apis.herokuapp.com/api/v1/comfirm/${id}`, confirmData).then(
        //     res => {
        //         console.log(res);

        //     },
        //     err => {
        //         console.log("error", err);
        //     }
        // );
        // window.location.href = `/`;

    // }

    componentDidMount() {
        const paymentpost = this.props.match.params.id
        this.props.getPayment(paymentpost)
    }
    render() {
        console.log(this.props.payment);
        const { dataPayment, is_loading } = this.props.payment
        const { classes } = this.props;
        if (is_loading) {
            return (<h1>Loading</h1>)
        }
        return (
            <div>
                <Nav />
                <Container>
                    <Grid style={{ marginTop: '80px' }}>
                        <Typography variant='h3' style={{ fontWeight: 'bolder', color: '#ff5555' }}>Payment</Typography>
                    </Grid>
                    <Grid container direction='row' style={{ marginTop: '60px', borderBottom: "5px solid #ee5555" }}>
                        <Grid md={5} style={{ padding: 18, background: '#ee5555', textAlign: 'center' }}>
                            <Typography variant='h4' style={{ color: 'white' }}>Payment</Typography>
                        </Grid>
                    </Grid>
                    <Grid>

                        <Card className={classes.card}>
                            <CardContent>

                                {/* maping */}
                                {dataPayment.map((item, index) => (
                                    <PaymentConfirm
                                        id    = {item.id}
                                        name  = {item.paymentUser.name}
                                        price = {item.paymentEvent.price}
                                        title = {item.paymentEvent.title}
                                        date  = {item.paymentEvent.date}
                                        urlmap= {item.paymentEvent.urlmap}
                                        qty   = {item.qty}
                                        total = {item.total_price}
                                    />
                                ))}




                            </CardContent>
                        </Card>

                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        payment: state.payment
        // 
    }
}
const mapDispatchToProps = dispatch => {

    return {

        getPayment: (paymentPost) => dispatch(payment(paymentPost))
        // props              dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Payment))