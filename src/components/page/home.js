import React, { Component } from 'react';
import { Paper, Grid, Avatar, IconButton, Box, Container, TextField, Typography } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import {FavoriteBorder,MeetingRoom } from '@material-ui/icons/'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Axios from 'axios';


import Nav from '../navbar/nav'
import Footer from '../footer/footer'
import '../../index.css'
import { category } from '../../redux/actions/category'
import { today } from '../../redux/actions/today'
import { tommorow } from '../../redux/actions/today'


class Home extends Component {

    constructor() {
        super()
        this.state = {
            display: 'hidden',
            login: 'hidden',
            search: '',
            eventSearch: []
        }
    }

    searchHandle = (e) => {
        const input = e.target
        const search = input.value
        this.setState(
            {
                search: search
            }, () => {
                console.log(search);
                if (search) {
                    Axios.get(`https://dumbtick-apis.herokuapp.com/api/v1/search/${search}`)
                        .then(event => {
                            this.setState({
                                eventSearch: event.data
                            })
                            console.log(this.state.eventSearch);

                        })
                }
            })
    }




    componentDidMount() {
        this.props.getToday()
        this.props.getCategories()
        this.props.getTommorow()
    }
    render() {
        // dari store
        const { data, is_loading } = this.props.category
        const { dataToday } = this.props.today
        const { dataTommorow } = this.props.today
        console.log(dataTommorow);

        const { classes } = this.props;
        if (is_loading) {
            return (<p>Now Loading...</p>)
        }
        return (
            <div>
                <Nav />
                {/* <Menubar /> */}
                <Container>
                    <Grid container style={{ marginTop: '30px' }}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField style={{ width: '100%', fontSize: 80 }} name='search' onChange={this.searchHandle} id="standard-basic" label="Search..." />
                        </form>
                    </Grid>
                    <Grid style={{ marginTop: '20px' }}>
                        <Typography variant='h4' style={{ fontWeight: 'bolder', color: '#ff5555' }}>Category</Typography>
                    </Grid>
                    <Grid container direction='row' style={{ marginTop: '20px' }}>
                        {/*  */}
                        {data.map((item, index) => (
                            <div key={index}>
                                <Grid style={{marginBottom:10}}>
                                    <div>
                                        <Link to={`/category/${item.id}`}><Typography variant='h5' className={classes.category} style={{ color: 'white', fontWeight: 'bolder', cursor: 'pointer' }}>{item.name}</Typography></Link>
                                    </div>
                                </Grid>
                            </div>
                        ))}

                    </Grid>
                    <Grid style={{ marginTop: '80px' }}>
                        <Typography variant='h4' style={{ fontWeight: 'bolder', color: '#ff5555' }}>Today</Typography>
                    </Grid>
                    {/* Today */}
                    {this.state.search ?
                        <h1>
                            <Grid style={{ marginTop: '20px', display: 'flex', justify: 'center' }} direction='row' container>

                                {this.state.eventSearch.map((item, index) => (

                                    <Grid md={4} style={{ marginBottom: '20px' }}>
                                        <div key={index}>
                                            <Paper className={classes.Paper}>
                                                <img style={{ maxWidth: '100%', maxHeight: '200px', height: '100%', objectFit: 'cover' }}
                                                    src={item.image}
                                                >
                                                </img>
                                                <div style={{ paddingLeft: '20px' }}>
                                                    <Grid>
                                                        <Box display='flex'>
                                                            <Box flexGrow={1}>
                                                                <Link to={`event/${item.id}`} style={{ color: '#444' }}>
                                                                    <Typography variant='h5' style={{ fontWeight: 'bolder', marginTop: '9px' }}>{item.title}</Typography>
                                                                </Link>
                                                            </Box>
                                                            <Box pr={2}>
                                                                <FavoriteBorder style={{ fontSize: 30, padding: 5, border: '2px solid #ee5555', borderRadius: '100%', color: '#ee5555' }} />
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid style={{ paddingTop: '5px' }}>
                                                        <Typography style={{ fontSize: '18px', color: '#ee5555', fontWeight: 'bolder' }}>

                                                            <Moment format='D MMM YYYY'>{item.start_time}</Moment>

                                                        </Typography>
                                                        <Typography variant='caption' color='textSecondary' style={{ fontSize: '16px' }}>{item.description.substring(0, 150)}</Typography>
                                                    </Grid>
                                                </div>
                                            </Paper>
                                        </div>
                                    </Grid>

                                ))}
                            </Grid>

                        </h1> : null}
                    <Grid style={{ marginTop: '20px', display: 'flex', justify: 'center' }} direction='row' container>

                        {dataToday.map((item, index) => (

                            <Grid md={4} style={{ marginBottom: '20px' }}>
                                <div key={index}>
                                    <Paper className={classes.Paper}>
                                        <img style={{ maxWidth: '100%', maxHeight: '200px', height: '100%', objectFit: 'cover' }}
                                            src={item.image}
                                        >
                                        </img>
                                        <div style={{ paddingLeft: '20px' }}>
                                            <Grid>
                                                <Box display='flex'>
                                                    <Box flexGrow={1}>
                                                        <Link to={`event/${item.id}`} style={{ color: '#444' }}>
                                                            <Typography variant='h5' style={{ fontWeight: 'bolder', marginTop: '9px' }}>{item.title}</Typography>
                                                        </Link>
                                                    </Box>
                                                    <Box pr={2}>
                                                        <FavoriteBorder style={{ fontSize: 30, padding: 5, border: '2px solid #ee5555', borderRadius: '100%', color: '#ee5555' }} />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid style={{ paddingTop: '5px' }}>
                                                <Typography style={{ fontSize: '18px', color: '#ee5555', fontWeight: 'bolder' }}>

                                                    <Moment format='D MMM YYYY'>{item.start_time}</Moment>

                                                </Typography>
                                                <Typography variant='caption' color='textSecondary' style={{ fontSize: '16px' }}>{item.description.substring(0, 150)}</Typography>
                                            </Grid>
                                        </div>
                                    </Paper>
                                </div>
                            </Grid>

                        ))}
                    </Grid>
                    {/* Today */}

                    <Grid style={{ marginTop: '40px', marginBottom: '30px' }}>
                        <Typography variant='h4' style={{ fontWeight: 'bolder', color: '#ff5555' }}>Upcomming</Typography>
                    </Grid>
                <Grid style={{ marginTop: '20px', display: 'flex', justify: 'center' }} direction='row' container>
                    {dataTommorow.map((item, index) => (
                        <Grid md={4} style={{ marginBottom: '70px' }}>
                            <div key={index}>
                                <Paper className={classes.Paper}>
                                    <img style={{ maxWidth: '100%', maxHeight: '200px', height: '100%', objectFit: 'cover' }}
                                        src={item.image}
                                    >
                                    </img>
                                    <div style={{ paddingLeft: '20px' }}>
                                        <Grid>
                                            <Box display='flex'>
                                                <Box flexGrow={1}>
                                                    <Link to={`event/${item.id}`} style={{ color: '#444' }}>
                                                        <Typography variant='h5' style={{ fontWeight: 'bolder', marginTop: '9px' }}>{item.title}</Typography>
                                                    </Link>
                                                </Box>
                                                <Box pr={2}>
                                                    <FavoriteBorder style={{ fontSize: 30, padding: 5, border: '2px solid #ee5555', borderRadius: '100%', color: '#ee5555' }} />
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid style={{ paddingTop: '5px' }}>
                                            <Typography style={{ fontSize: '18px', color: '#ee5555', fontWeight: 'bolder' }}>

                                                <Moment format='D MMM YYYY'>{item.start_time}</Moment>

                                            </Typography>
                                            <Typography variant='caption' color='textSecondary' style={{ fontSize: '16px' }}>{item.description.substring(0, 150)}</Typography>
                                        </Grid>
                                    </div>
                                </Paper>
                            </div>
                        </Grid>
                    ))}
                </Grid>




                </Container>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        today: state.today,
        tommorow: state.today,
        category: state.category
        // 
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getToday: () => dispatch(today()),
        getCategories: () => dispatch(category()),
        getTommorow: () => dispatch(tommorow())
        // props              dispatch
    }
}




const styles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
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
    Paper: {
        marginRight: '40px'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))