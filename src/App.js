import './App.css';
import Navbar from './components/Navbar'
import News from './components/NewsComponent'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
  country= 'in';
  apiKey= process.env.REACT_APP_NEWS_API_1;
  render() {
    return (
      
       <Router>
       <Navbar/>
       <div className='container'>
        <Switch>
          <Route exact path="/">
          <News key='Home' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country}/>
          </Route>
          <Route exact path="/business">
          <News key='business' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='Business'/>
          </Route>
          <Route exact path="/entertainment">
          <News key='entertainment' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='Entertainment'/>
          </Route>
          <Route exact path="/sports">
          <News key='sports' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='Sports'/>
          </Route>
          <Route exact path="/health">
          <News key='health' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='Health'/>
          </Route>
          <Route exact path="/technology">
          <News key='technology' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='Technology'/>
          </Route>
          <Route exact path="/science">
          <News key='science' pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='Science'/>
          </Route>
        </Switch>
        </div>
       </Router>
    )
  }
}
