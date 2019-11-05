import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class AppraisalIndex extends Component {
    // constructor(){
    //     super()
    //     this.state={
    //         appraisals:[],
    //     }
    // }
    // componentDidMount(){
    //     this.setState({
    //       appraisals: this.props.appraisals,
    //     })
    // }
    render(props){
        const appraisals = this.props.appraisals.map((appraisal, index)=>{
            return <div key={index}>
                <Link to={{pathname:`/appraisal/${appraisal.id}`,
                    state:{
                        appraisal: appraisal 
                    }
                }}>{appraisal.appraisal_name}, {appraisal.period_start_date}  to  {appraisal.period_end_date}</Link>
            </div>     
        })
            return(
                <div className="appraisalIndex">
                    <UncontrolledDropdown setActiveFromChild>
					    <DropdownToggle color="link" size="lg" caret>
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

export default AppraisalIndex;