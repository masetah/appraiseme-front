import React, {Component} from 'react';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Views/Dashboard';
import EmployeeShow from './Views/EmployeeShow';
import AppraisalShow from './Views/AppraisalShow';
import { Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state={
        user: null,
    }
}
  setUser = user => {
  this.setState({user: user})
}
  render(){
    return (
      <div className="App">
          <Switch>
          <Route path="/" exact render={()=>{
            return (
              <div>
                <Login user={this.state.user} setUser={this.setUser}/>
              </div>
            )
          }} />
          <Route path="/dashboard" exact render={()=>{
            return (
              <div>
                <Dashboard user={this.state.user} setUser={this.setUser}/>
              </div>
            )
          }}/>
          <Route exact path="/employee/:id" component={EmployeeShow} />
          <Route exact path="/appraisal/:id" component={AppraisalShow} />
          <Route render={
            () => 
          <h3>Not Found</h3>}/>
          </Switch>
      </div>
    );
  }
}

export default App;
