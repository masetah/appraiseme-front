import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import UpdateEmployee from '../Components/EditEmployeeModal';
import Footer from '../Components/Footer';
import EmployeeNotes from '../Components/EmployeeNotes';
import { Button } from 'reactstrap';
import NewEmployeeNote from '../Components/NewEmployeeNote';
import NewAppraisal from '../Components/NewAppraisal';
import EmployeeAppraisal from '../Components/EmployeeAppraisal';
import {Grid, Cell} from 'react-mdl';

const employeeImage = require('./EmployeeImage.jpg')

class EmployeeShow extends Component {
  constructor(props){
    super(props)
    this.state={
      employees:[],
      employee: this.props.history.location.state.employee,
      appraisals:[],
      notes:[],
    }
  }
  componentDidMount(){
    console.log(this.props.location.state)
    this.getNotes();
    this.getAppraisals();
    this.getEmployees();
  }
  getEmployees = async () => {
    const employees =await fetch("https://apppraiseme-api.herokuapp.com/employees");
    const parsedResponse = await employees.json()
    this.setState({
        employees:parsedResponse.employees
    })
}
getNotes = async () => {
  const notes = await fetch("https://apppraiseme-api.herokuapp.com/notes");
  const parsedResponse = await notes.json();
    this.setState({
      notes:parsedResponse.notes
  })
}
getAppraisals = async () => {
  const appraisals = await fetch("https://apppraiseme-api.herokuapp.com/appraisals");
  const parsedResponse = await appraisals.json();
    this.setState({
      appraisals:parsedResponse.appraisals
  })
}
updateEmployee = async (formData) => {
  try{
    console.log(formData)
    await fetch(`https://apppraiseme-api.herokuapp.com/employees/${this.state.employee.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
          "Content-Type": "application/json"
      }
  })
  this.setState({
    employee: formData
  })
  }catch(err){
    console.log(err)
  }
}
//add a warning that this cannot be undone.
deleteEmployee = async (id) => {
  console.log(this.props.history);
  try{
      await fetch(`https://apppraiseme-api.herokuapp.com/employees/${id}`, {
      method:'DELETE',
      headers: {
        "Content-Type": "application/json"
    }
  });
  this.props.history.push("/dashboard")
  }catch(err){
    console.log(err)
  }
}

updateNotesArray=(note)=>{
  console.log(note, "line 65 EmployeeShow")
  this.setState(prevState=>{
      prevState.notes.push(note)
      return{
          notes:prevState.notes
      }
  })
}
updateAppraisalArray=(appraisal)=>{
  this.setState(prevState=>{
      prevState.appraisals.push(appraisal)
      return{
          appraisals:prevState.appraisals
      }
  })
}

render(){
  return (
    <div className="employee-show-container">
        <Navigation 
        employees={this.state.employees}
        appraisals={this.state.appraisals}
        updateEmployeeState={this.updateEmployeeState}
      />
      <div className="employee-show-body">
      <div className="employee-show-info">
        <h1>{this.props.location.state.employee.name}</h1>
        <h3 >{this.props.location.state.employee.position}</h3>
        <h5>Hired: {this.props.location.state.employee.hire_date}</h5>
      </div>

      <div className="profile-pic">
      <img src={employeeImage} alt="Employee"/>
      <UpdateEmployee 
        updateEmployee={this.updateEmployee} 
        employee={this.props.location.state.employee}
        />
      <EmployeeAppraisal
      employee={this.props.location.state.employee}
      appraisals={this.state.appraisals}
      />
      <NewEmployeeNote 
        employeeID={this.props.location.state.employee.id} 
        updateNotesArray={this.updateNotesArray}
      />
      <NewAppraisal
        updateAppraisalArray={this.updateAppraisalArray} 
        employee={this.props.location.state.employee}
      />
      <Button id="employeeTerminateButton" color= "danger" onClick={()=>{
        this.deleteEmployee(this.state.employee.id)
        }}>Terminate
      </Button>
      </div>
      <div className="employee-notes">
      <EmployeeNotes 
        employee={this.props.location.state.employee} 
        notes={this.state.notes}
      />
      </div>
      </div>
      
      <Footer/>
    </div>
    );
  }
}

export default EmployeeShow;