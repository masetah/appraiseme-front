import React, {Component} from 'react';
import Label from 'reactstrap/lib/Label';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class NewEmployee extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            postion:"",
            hire_date:"",
            manager_id: 1,
            modal: false
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }
    toggle= () =>{
        this.setState({
            modal: !this.state.modal
        })
      }
    createEmployee = async (currentState) => {
        const createEmployee = await fetch("https://apppraiseme-api.herokuapp.com/employees",{
          method: "POST",
          body:JSON.stringify(currentState),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const parsedResponse = await createEmployee.json();
        console.log(parsedResponse);
        this.props.updateEmployeeArray(parsedResponse.employee);
    }
    handleSubmit= (e) => {
        e.preventDefault();
        this.createEmployee(this.state)
        this.toggle();
    }
    render(){
        return(
            <div className="new-employee-component">
                <Button color="primary" size="lg" block onClick={this.toggle}>New Employee</Button>
                <Modal className="new-employee-modal" isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader id="ModalHeader" toggle={this.toggle}>Add a New Employee</ModalHeader>
                    <ModalBody  id="ModalBody">
                    <form className="form-new-employee" >
                    <Label className="Label" for="name" >Employee Name </Label>
                    <input className="form-control" type="text" placeholder="Jaime Lanaster" name="name" autoComplete="off"  onChange={this.handleChange}></input>
                    <Label className="Label" for="position">Employee's Position</Label>
                    <input className="form-control" type="text" placeholder="King Slayer" name="position" autoComplete="off"  onChange={this.handleChange}></input>
                    <Label className="Label" for="hire_date">Hire date </Label>
                    <input className="form-control" type="date" name="hire_date" onChange={this.handleChange}></input>
                    
                </form>
                </ModalBody>
                <ModalFooter id="ModalFooter">
                <Button color="primary" onClick={this.handleSubmit}> Submit </Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default NewEmployee;