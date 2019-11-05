import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class EmployeeKPI extends Component {
  
    render(){
        const employees = this.props.employees.map((employee, index)=>{
            return <div key={index} >
                <Link style={{color:"white"}} to={{pathname:`/employee/${employee.id}`,
                    state:{
                    employee: employee 
                    }
                }}>{employee.name}</Link>
            </div>     
        })
            return(
                <div className="current-employees">
                    <h3>Current Employees</h3>
                    {employees}
                </div>
            )
    }
    


        
    
}

export default EmployeeKPI;