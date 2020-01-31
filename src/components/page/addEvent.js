import React, { Component } from 'react';
import { Grid,Select,MenuItem,FormControl,InputLabel, Paper, Link, IconButton, Button, Container, TextField, Typography } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { connect } from 'react-redux'


import { category } from '../../redux/actions/category'
import Footer from '../footer/footer'
import Nav from '../navbar/nav'



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


class AddEvent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category_id: '',
            createBy_id: '',
            start_time: '',
            end_time: '',
            price: '',
            address: '',
            urlmap: '',
            description: '',
            image: '',
            err: false
        }
    }



    handleTitleChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };
    handleCategoryChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };
    handleCreateChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };

    handleSelectChange = event => {
            const input = event.target;
            const value = input.value;

        this.setState({ [input.name]: value});
        console.log(this.state.category_id);
        
      };
    handleStartChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };
    handleEndChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };
    handlePriceChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };
    handleAddressChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };

    handleURLChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };

    handleDescChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };
    handleImageChange = event => {
        const input = event.target;
        const value = input.value;

        this.setState({ [input.name]: value }, () => {

        });
    };


    handlePress = () => {
        axios.post('https://dumbtick-apis.herokuapp.com/api/v1/event', {
            title: this.state.title,
            category_id: this.state.category_id,
            createby_id: localStorage.getItem('id'),
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            price: this.state.price,
            address: this.state.address,
            urlmap: this.state.urlmap,
            description: this.state.description,
            image: this.state.image

        }).then(res => {
            const data = res.data;
            console.log(data)

            window.location.href = `/`;
        }).catch(err => { console.log(err) })
    }


    componentDidMount() {
        this.props.getCategory()
    }


    render() {
        const { classes } = this.props;
        const { data, is_loading } = this.props.category
        const id = localStorage.getItem('name')
        console.log(data);

        return (
            <div>
                <Nav />
                <Container maxWidth='md'>

                    <Grid>
                        <Grid style={{ marginTop: '80px' }}>
                            <Typography variant='h3' style={{ fontWeight: 'bolder', color: '#ff5555' }}>Add Event</Typography>
                        </Grid>
                        <Grid maxWidth='sm' style={{ paddingBottom: '40px' }}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField style={{ width: '100%', fontSize: '30px' }} label="Title Event" name='title' onChange={this.handleTitleChange} />
                                {/* <TextField style={{ width: '100%', fontSize: '30px' }}  label="Category" name='category_id' onChange={this.handleCategoryChange} /> */}


                                {/* Select */}
                                <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={this.state.category_id}
                                    onChange={this.handleSelectChange}
                                    name ='category_id'
                                >
                                    {data.map((item,index)=>(
                                           <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                    ))}
                                    
                                </Select>
                                </FormControl>

                                {/* //SElect */}


                                <TextField style={{ width: '100%', fontSize: '30px' }} label="Created By" name='createBy_id' value={id} disabled />
                                <TextField style={{ width: '100%', fontSize: '30px' }} type='datetime-local' name='start_time' onChange={this.handleStartChange} />
                                <TextField style={{ width: '100%', fontSize: '30px' }} type='datetime-local' name='end_time' onChange={this.handleEndChange} />
                                <TextField style={{ width: '100%', fontSize: '30px' }} label="Price" name='price' onChange={this.handlePriceChange} />
                                <TextField style={{ width: '100%', fontSize: '30px' }} label="Address Event" name='address' onChange={this.handleAddressChange} />
                                <TextField style={{ width: '100%', fontSize: '30px' }} label="URL Map" name='urlmap' onChange={this.handleURLChange} />
                                <TextField style={{ width: '100%', fontSize: '30px' }} label="Description" name='description' onChange={this.handleDescChange} />
                                <TextField style={{ width: '100%', fontSize: '30px' }} label="Image" name='image' onChange={this.handleImageChange} />
                            </form>
                            <Button onClick={this.handlePress} variant="contained" color="secondary" style={{ fontSize: '30px', padding: '18px 40px', borderRadius: '10px', marginLeft: '370px', background: '#1DA1F2', color: 'white' }}>
                                Publish
                            </Button>
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
        category: state.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategory: () => dispatch(category())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddEvent));