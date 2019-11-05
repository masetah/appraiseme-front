import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class EmployeeIndex extends Component {
    constructor(){
        super()
        this.state={
            employees:[],
            employee:[]
        }
    }

    componentDidMount(){
        this.setState({
          employees: this.props.employees,
        })
    }

    render(){
        const employees = this.props.employees.map((employee, index)=>{
            return <div key={index} >
                <Link to={{pathname:`/employee/${employee.id}`,
                    state:{
                        employee: employee 
                    }
                }}> {employee.name} </Link>
            </div>     
        })
            return(
                <div className='employeeIndex'>
                    <UncontrolledDropdown setActiveFromChild>
					    <DropdownToggle color="link" size="lg" caret>
						    Employees
                        </DropdownToggle>
					    <DropdownMenu>
						<DropdownItem >
                            {employees}
                        </DropdownItem>
					</DropdownMenu>
				    </UncontrolledDropdown>
                </div>
            )
    }

}

export default EmployeeIndex;