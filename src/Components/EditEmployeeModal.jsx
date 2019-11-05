import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap/lib';

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.employee.name,
      position: this.props.employee.position,
      hire_date: this.props.employee.hire_date,  
      modal:false,
    };
  }

toggle= () =>{
    this.setState({
        modal: !this.state.modal
    })
}

handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit = (e)=> {
    e.preventDefault();
    this.props.updateEmployee(this.state);
    this.toggle();
}
  render() {
    return (
      <div className="updateEmployee">
        <Button color="primary" size="lg" block onClick={this.toggle}>Edit Employee</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader id="ModalHeader" toggle={this.toggle}>Update {this.state.name}</ModalHeader>
          <ModalBody id="ModalBody">
            <form onSubmit={this.handleSubmit}>
                <Label className="modalInput" for="name"> Name </Label>
                <input className="form-control" type="text" name="name" value={this.state.name}  onChange={this.handleChange}></input><br></br>
                <Label className="modalInput" for="position"> Position </Label>
                <input className="form-control" type="text" name="position" value={this.state.position} onChange={this.handleChange}></input><br></br>
                <Label className="modalInput" for="hire_date"> Hire Date </Label>
                <input className="form-control" type="date" name="hire_date" value={this.state.hire_date} onChange={this.handleChange}></input><br></br>
            </form>
          </ModalBody>
          <ModalFooter id="ModalFooter">
              <Button color="primary" onClick={this.handleSubmit}>Update </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdateEmployee;