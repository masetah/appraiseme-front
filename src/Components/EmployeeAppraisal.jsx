import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class EmployeeAppraisal extends Component {
    componentDidMount(){
        console.log(this.props.employee.name)
    }
    render(){
        const appraisals = this.props.appraisals.map((appraisal, index)=>{
            if(this.props.employee.id===appraisal.employee_id){
                return <div key={index}>
                <Link to={{pathname:`/appraisal/${appraisal.id}`,
                    state:{
                        appraisal: appraisal 
                    }
                }}>{appraisal.period_start_date}  to  {appraisal.period_end_date}</Link>
            </div>  
            }
        })
            return(
                <div className="employee-appraisal">
                    <UncontrolledDropdown setActiveFromChild>
					    <DropdownToggle  color="primary" size="lg" block caret>
                        Appraisals
                        </DropdownToggle>
					    <DropdownMenu>
						<DropdownItem >
                            {appraisals}
                        </DropdownItem>
					</DropdownMenu>
				    </UncontrolledDropdown>
                    
                </div>
            )
    }
}

export default EmployeeAppraisal;