import React from 'react';
import './App.css';
import './components/tryredux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/page/Payment'
import Home from './components/page/home'
import Category from './components/page/category'
import Event from './components/page/eventDetail'
import Dropdown from './components/page/addEvent'
import Profile from './components/page/profile'
import Payment from './components/page/Payment'
import MyEvent from './components/page/mytiket'
function App() {
  return (
    <div>
      <Router>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/category/:id" component={Category}/>
            <Route path="/event/:id" component={Event}/>
            <Route path='/addEvent' component={Dropdown} />
            <Route path='/profile' component={Profile} />
            <Route path='/payment/:id' component={Payment} />
            <Route path='/myTicket/:id' component={MyEvent}></Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
