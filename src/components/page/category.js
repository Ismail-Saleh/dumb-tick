import React, { Component } from 'react';
import Nav from '../navbar/nav'
import { Grid,Paper, Box, Container, TextField, Typography } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import Footer from '../footer/footer'
import Moment from 'react-moment'
import { BookmarkBorderOutlined, KeyboardArrowDownOutlined,FavoriteBorder } from '@material-ui/icons/'
import { connect } from 'react-redux'
import { category } from '../../redux/actions/categoryPage'

// import '../tryredux'
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
        fontWeight:'bolder',
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


class Category extends Component {

    componentDidMount() {
        const Idcategory = this.props.match.params.id

        this.props.getCategories(Idcategory)
    }

    render() {
        const { classes } = this.props;
        const { data, is_loading } = this.props.category
        const categoryName = ((data || {}).categoryId || {})

        // console.log(data);
        if (is_loading) {
            return (<h1>now loading...</h1>)
        }
        // const category = this.props.category.categoryId;
        console.log(categoryName.name);

        return (
                
            <div>
                <Nav />
        
                <Container maxWidth='lg'>
                    <Grid style={{ marginTop: '80px' }}>
                        <Typography variant='h4' style={{ fontWeight: 'bolder', color: '#ff5555' }}>Music</Typography>
                    </Grid>
                    {/* Today */}
                    <Grid style={{ marginTop: '20px' }}>
                        <Grid>
                            
                            <Grid container direction='row' style={{ marginTop: '40px', marginBottom: '60px' }}>
                                {data.map((item, index) => (

                                    <Grid md={4} style={{ marginBottom: '20px' }}>
                                        <div key={index}>
                                            <Paper className={classes.Paper}>
                                                <img style={{ maxWidth: '100%', maxHeight: '200px', height: '100%', objectFit: 'cover' }} src={item.image}></img>
                                                <div style={{ paddingLeft: '20px' }}>
                                                    <Grid>
                                                        <Box display='flex'>
                                                            <Box flexGrow={1}>
                                                                <Typography variant='h5' style={{ fontWeight: 'bolder', marginTop: '9px' }}>{item.title}</Typography>
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
                                                        <Typography variant='caption' color='textSecondary' style={{ fontSize: '16px' }}>
                                        
                                                           {item.description && item.description.substring(0,150) }
                                                        </Typography>
                                                    </Grid>
                                                </div>
                                            </Paper>
                                        </div>
                                    </Grid>

                                ))}

                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Today */}
                </Container>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        category: state.category
        // 
    }
}
const mapDispatchToProps = dispatch => {

    return {

        getCategories:(IdCategory) => dispatch(category(IdCategory))
        // props              dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Category))