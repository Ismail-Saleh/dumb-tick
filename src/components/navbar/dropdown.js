import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {Tabs,Tab,AppBar} from '@material-ui/core/';
import {Person,AccountBalanceOutlined,Event,Payment} from '@material-ui/icons/'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import {Link} from 'react-router-dom'


class Dropdown extends Component {

    

    render() {
      const id = localStorage.getItem('id')
      const myTicket = `/myTicket/${id}`
      console.log(id);
      
        return (        
          
            <div>
                <AppBar position="static" color="default">
        <Tabs
          value={0}
        //   onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"    
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          centered
        >
          <Link to='/profile'><Tab label="Profile" icon={<Person/>} /></Link>
          <Link to={myTicket}><Tab label="My Ticket" icon={<ConfirmationNumberIcon />} /></Link>
          <Link to='/addEvent'><Tab label="Add Event" icon={<Event/>} /></Link>
          <Tab label="Payment" icon={<Payment/>}/>

    
        </Tabs>
      </AppBar>
            </div>
        );
    }
}

export default Dropdown;