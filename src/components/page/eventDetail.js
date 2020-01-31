import React, { Component } from 'react';
import Nav from '../navbar/nav'
import { Grid, Button, Box, Container, IconButton, TextField, Typography } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import Footer from '../footer/footer'
import { AddBoxOutlined, IndeterminateCheckBoxOutlined, DateRangeOutlined, ScheduleOutlined, PermContactCalendarOutlined, PhoneAndroidOutlined, MailOutline, CalendarTodayOutlined, ContactMailOutlined } from '@material-ui/icons/'
import Moment from 'react-moment'

import { event } from '../../redux/actions/event'
import { connect } from 'react-redux'
import axios from 'axios';

const styles = theme => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            width: 200,
        },
        flexGrow: 1,
    },
    category: {
        padding: '8px 80px',
        fontWeight: 'bolder',
        marginRight: '20px',
        background: '#ff5555',



    },
    '*': {
        background: 'red'
    },
    grid: {
        border: '3px solid #BFBCBC',
        borderRadius: '10px',
        margin: '40px 0px'
    },
    Paper: {
        width: '100%'

    },
    padding: {
        marginTop: '30px',
        marginLeft: '20px'
    },
    paddingRight: {
        marginRight: '30px'
    },
    descript: {
        marginLeft: '20px',
        fontSize: '20px',
        fontWeight: 'bolder',
        color: '#444',
        paddingBottom: '50px'
    },
    descriptBody: {
        color: '#555',
        fontSize: '20px',
        verticalAlign: 'middle',
        height: '100px',
        lineHeight: '100px',
        textAlign: 'center'
    },
    iconEvent: {
        color: '#555',
        fontSize: '24px',
        verticalAlign: 'middle',
        marginLeft: -20,
        paddingRight: 10
    }


});



class EventDetail extends Component {
    constructor() {
        super();
        this.state = {
            adder: 1,
            totalPrice: 0,
            userId: ''
        }
    }

    onAdderIncrease = () => {
        this.setState({
            adder: this.state.adder + 1
        }, () => {
            this.setState({
                totalPrice: this.state.adder * this.props.event.dataEvent.price
            })
        })


    }
    onAdderDecrease = () => {
        if ((this.state.adder - 1) < 1) {

            this.setState({
                adder: 1
            })

        }
        else {

            this.setState({
                adder: this.state.adder - 1,
            }, () => {
                this.setState({
                    totalPrice: this.state.adder * this.props.event.dataEvent.price
                })
            })

        }

    }

    HandleClick = (idEvent) => () => {
        const id = localStorage.getItem('id')
        // this.postPayment(id)
        const payment_creatby_id = id
        const payment_event_id =idEvent
        const qty =this.state.adder
        const total_price = this.state.totalPrice
        // this.setState({ userId: id })
       
        let dataPayment = {
            payment_event_id: payment_event_id,
            payment_creatby_id: payment_creatby_id,
            status: "Confirm",
            qty: qty,
            total_price: total_price
        };
        axios.post("https://dumbtick-apis.herokuapp.com/api/v1/order", dataPayment).then(
            res => {
                console.log(res);
                window.location.href = `/payment/${id}`;
            },
            err => {
                console.log("error", err);
            }
            
        );
         
        // console.log('user id= ' + payment_event_id)
        // console.log('Qty = '+ qty);
        // console.log('Price :' + total_price);
        // console.log('Event =' + idEvent);

    }


    componentDidMount() {
        const eventdetail = this.props.match.params.id
        this.props.getEvent(eventdetail)
    }


    render() {
        console.log(this.props.event.dataEvent.price)
        // console.log(this.props).getEvent;
        const { dataEvent, is_loading } = this.props.event
        const categoryName = ((dataEvent || {}).categoryId || {})
        const createBy_Id = ((dataEvent || {}).createdBy || {})
        console.log(dataEvent);



        const { classes } = this.props;
        if (is_loading) {
            return (<h1>Loading</h1>)
        }
        return (
            <div>
                <Nav />

                <Container maxWidth='md'>
                    <Grid className={classes.grid}>
                        <Grid>
                            <Box container display='flex' justifyContent='center' className={classes.Paper}>
                                <img style={{ width: '1600px' }} src={dataEvent.image} />
                            </Box>
                        </Grid>
                        <Grid className={classes.padding}>
                            <Box container display='flex'>
                                <Box flexGrow={1}>
                                    <Typography variant='h4'>{dataEvent.title}</Typography>
                                </Box>
                                <Box>
                                    <span className={classes.paddingRight} style={{ fontSize: '33px', fontWeight: 'bolder', color: '#ee5555' }}>Rp
                                    {this.state.totalPrice ?
                                            (
                                                this.state.totalPrice
                                            )
                                            :
                                            (
                                                dataEvent.price
                                            )
                                        }
                                    </span>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid className={classes.padding}>
                            <Box container display='flex' style={{ paddingBottom: '20px' }}>
                                <Box flexGrow={1}>
                                    <Typography variant='h5'>{categoryName.name}</Typography>
                                </Box>
                                <Box className={classes.paddingRight}>
                                    <IconButton onClick={this.onAdderDecrease} color="primary" aria-label="upload picture" component="span">
                                        <IndeterminateCheckBoxOutlined style={{ fontSize: '35px', color: '#ee5555' }} />

                                    </IconButton>
                                </Box>
                                <Box>
                                    <Typography style={{ marginRight: '30px', marginTop: '12px   ' }} variant='h5' color='textSecondary'>{this.state.adder}</Typography>
                                </Box>
                                <Box>
                                    <IconButton onClick={this.onAdderIncrease} color="primary" aria-label="upload picture" component="span">
                                        <AddBoxOutlined style={{ fontSize: '35px', color: '#ee5555' }} />

                                    </IconButton>
                                </Box>
                                <Box>
                                    <Button onClick={this.HandleClick(dataEvent.id)} variant="contained" className={classes.paddingRight} style={{ background: '#ee5555', color: 'white' }}>
                                        Buy
                                    </Button>
                                </Box>

                            </Box>
                        </Grid>
                        <hr style={{ border: '1px solid #BFBCBC', maxWidth: '90%' }} />

                        <Grid>
                            <Grid container direction='row'>
                                <Grid md={4}>
                                    <Typography variant='caption' className={classes.descript}>Hosted</Typography>
                                    <Box display='flex' style={{ paddingTop: '30px' }} >
                                        <Box>
                                            <img style={{ maxWidth: '100px', marginLeft: '20px' }} src='https://pbs.twimg.com/profile_images/907841303278505990/3Si5MURi.jpg' />
                                        </Box>
                                        <Box style={{ paddingLeft: '16px' }}>
                                            <Typography variant='caption' className={classes.descriptBody} >Juni concert</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid md={4}>
                                    <Typography variant='caption' className={classes.descript}>Date & Time</Typography>

                                    <ul>
                                        <li>
                                            <CalendarTodayOutlined className={classes.iconEvent} />
                                            <span ><Moment format='D MMM YYYY'>{dataEvent.start_time}</Moment> </span>-<span> <Moment format='D MMM YYYY'>{dataEvent.start_time}</Moment></span>
                                        </li>
                                        <li>
                                            <ScheduleOutlined className={classes.iconEvent} />
                                            <span>18:00</span> - <span>22:00</span>
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid md={3}>
                                    <Typography variant='caption' className={classes.descript}>Contact Person</Typography>
                                    <ul>
                                        <li>
                                            <ContactMailOutlined className={classes.iconEvent} />
                                            <span>
                                                {createBy_Id.name}
                                            </span>
                                        </li>
                                        <li>
                                            <PhoneAndroidOutlined className={classes.iconEvent} />
                                            <span>{createBy_Id.phoneNumber}</span>
                                        </li>
                                        <li>
                                            <MailOutline className={classes.iconEvent} />
                                            <span>{createBy_Id.email}</span>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{ paddingBottom: '20px' }} container direction='row' justify='center'>
                        <Grid md={6}>
                            <Typography variant='caption' className={classes.descript}>Event Description</Typography>
                            <p>
                                {dataEvent.description}
                            </p>
                        </Grid>
                        <Grid md={5}>
                            <Typography variant='caption' className={classes.descript}>Location</Typography>
                            <iframe style={{ marginLeft: 20, width: 400, height: 350, frameBorder: '0', border: '0', allowFullScreen: '' }} src={dataEvent.urlmap}></iframe>
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        event: state.event
        // 
    }
}
const mapDispatchToProps = dispatch => {

    return {

        getEvent: (eventDetail) => dispatch(event(eventDetail))
        // props              dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)((withStyles(styles)(EventDetail)))