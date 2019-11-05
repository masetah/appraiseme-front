import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import NewEmployee from '../Components/NewEmployee';
import EmployeeKPI from '../Components/employeeKPI';
import KPI from '../Components/KPI';
import Footer from '../Components/Footer';
import {Grid, Cell} from 'react-mdl';

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
        employees:[],
        user:[],
        appraisals:[]
    }
}

// handleLogout=(e)=>{
//   e.preventDefault();
//   this.setUser();
//   this.props.history.push("/");
// }
// setUser(){
//     this.setState({
//         user: null
//     })
// }
componentDidMount(){
    this.getEmployees();
    this.getAppraisals();
}

updateEmployeeArray=(employee)=>{
    console.log(employee, "from employee index line 18")
    this.setState(prevState=>{
        prevState.employees.push(employee)
        return{
            employees:prevState.employees
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
getAppraisals = async () => {
    const appraisals =await fetch("https://apppraiseme-api.herokuapp.com/appraisals");
    const parsedResponse = await appraisals.json()
    this.setState({
        appraisals:parsedResponse.appraisals
    })
  }
getEmployees = async () => {
    const employees =await fetch("https://apppraiseme-api.herokuapp.com/employees");
    const parsedResponse = await employees.json()
    this.setState({
        employees:parsedResponse.employees
    })
}

updateEmployee = async (id, formData) => {
    const updatedEmployee = await fetch(`https://apppraiseme-api.herokuapp.com/employees/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const parsedResponse = await updatedEmployee.json();
    this.setState(prevState=>{
        const filterEmployeeArray = prevState.employees.filter(element=>element.id!==id)
        const updatedEmployee = parsedResponse.employee
        return{
            employees:[...filterEmployeeArray, updatedEmployee]
        }
    })
    console.log(parsedResponse)
}

deleteEmployee = async (id) => {
    try{
        const deleteEmployee = await fetch(`https://apppraiseme-api.herokuapp.com/employees/${id}`, {
        method:'DELETE',
    });
    const parsedResponse = await deleteEmployee
    if(parsedResponse.status===204){
        this.setState({
            employees: this.state.employees.filter((employee) => employee.id !==id)
        });
    }
}catch(err){
    console.log(err)
    }
}
  render(){
    return (
        <div className="dashboard-body">
            <Navigation 
                employees={this.state.employees}
                updateEmployeeArray={this.updateEmployeeArray}
                updateAppraisalArray={this.updateAppraisalArray}
                updateEmployee={this.updateEmployee}
                deleteEmployee={this.deleteEmployee}
                appraisals={this.state.appraisals}
                logout={this.handleLogout}
            />
            <div className="heading">
            <Grid >
                <Cell col={12}>
                
                <h1>User Dashboard </h1>
                </Cell>
                {/* <Cell col={12}> */}
                <p> You've got a lot on your plate. We're here to lend a hand. 
                    On your customized dashboard you are able to see how your team 
                    is doing based on the appraisals you have filled out. You are 
                    also able to add new employees and navigate to your current employees 
                    by clicking on their name in your, "Current Employees" section. When on 
                    their employee profile page you are able to edit their information, review
                    any notes you have taken, create a new note, read through their past
                    appraisals, or create a new appraisal for review.  
                </p>
                {/* </Cell> */}
            </Grid>
            </div>
            <Grid>
            <Cell col={12}>
                <KPI 
                appraisals={this.state.appraisals}
                />
            </Cell>
            </Grid>
            <Grid>
            <Cell col={12}>
                    <EmployeeKPI
                    employees={this.state.employees}
                    />
                    <NewEmployee
                    updateEmployeeArray={this.updateEmployeeArray}
                    />
            </Cell>
            </Grid>
            <Footer />
        </div>
    );
  }
}

export default Dashboard;