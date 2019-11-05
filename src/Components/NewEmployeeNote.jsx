import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {Label, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap/lib';

class NewEmployeeNote extends Component {  
  constructor(props){
        super(props)
        this.state={
            note_date:"",
            note_type:"Praise",
            intensity: 0,
            canned_note:"Habit 1",
            description:"",
            employee_id: this.props.employeeID,
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
    createNote = async (currentState) => {
        const createNote = await fetch("https://apppraiseme-api.herokuapp.com/notes",{
          method: "POST",
          body:JSON.stringify(currentState),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const parsedResponse = await createNote.json();
        console.log(parsedResponse);
        // this.props.updateAppraisalArray(parsedResponse.appraisal);
      }
    handleSubmit= (e) => {
        e.preventDefault();
        console.log(this.state, "Handlesubmit NewEmployeeNote line 40")
        this.createNote(this.state);
        this.props.updateNotesArray(this.state);
        this.toggle();
    }
    render(){
        return(
            <div className="new-employee-note">
              <Button color="primary" size="lg" block onClick={this.toggle}>New Note</Button>
              <Modal className="new-note-modal" isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader id="ModalHeader" toggle={this.toggle}>Add a New Employee Note</ModalHeader> 
                <ModalBody  id="ModalBody">
                <form >
                <FormGroup>
                <Label for="note_date">Date</Label>
                    <Input
                    type="date"
                    name="note_date"
                    onChange={this.handleChange}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="note_type">Type</Label>
                    <Input type="select"  name="note_type" onChange={this.handleChange} >
                    <option>Praise</option>
                    <option>Neutral</option>
                    <option>Infraction</option>
                    </Input>
                  </FormGroup> 
                  <FormGroup>
                  <Label for="intensity">Level</Label>
                    <Input type="select"  name="intensity" onChange={this.handleChange} >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="canned_note">Note</Label>
                    <Input type="select"  name="canned_note" onChange={this.handleChange} >
                    <option disabled>Postive</option>
                    <option>Habit 1: Be Proactive.</option>
                    <option>Habit 2: Begin with the End in Mind.</option>
                    <option>Habit 3: Put First Things First.</option>
                    <option>Habit 4: Think Win/Win.</option>
                    <option>Habit 5: Seek First to Understand, Then to Be Understood.</option>
                    <option>Habit 6: Synergize.</option>
                    <option>Habit 7: Sharpen the Saw.</option>
                    {/* <hr/> */}
                    <option disabled>Neutral</option>
                    <option>Worked Holiday</option>
                    <option>Initiatied Shift Swap</option>
                    <option>Worked Overtime</option>
                    <option>Excused Tardy</option>
                    <option>Excused Absence</option>
                    {/* <hr/> */}
                    <option disabled>Infraction</option>
                    <option>Unexcused Tardy</option>
                    <option>Unexcused Absence</option>
                    <option>Disrespectful</option>
                    <option>Not Following Policy</option>
                    <option>Dresscode</option>
                    <option>Damaged Company Property</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                  <Label for="description">Description</Label>
                    <Input type="textarea" placeholder="Describe the situation" name="description" onChange={this.handleChange} >
                    </Input>
                  </FormGroup>
                  </form> 
                </ModalBody>
                <ModalFooter id="ModalFooter">
                <Button onClick={this.handleSubmit} color="primary" > Submit </Button>  
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default NewEmployeeNote;