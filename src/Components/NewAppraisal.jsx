import React, {Component} from 'react';
import { Table, FormGroup, Button, Input} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap/lib';


class NewAppraisal extends Component {
  constructor(){
    super()
    this.state={
      employee_id: '',
      appraisal_name: '',
      period_end_date:'',
      leadership_score:1,
      leadership_description:'',
      people_development_score:1,
      people_development_description:'',
      planning_score:1,
      planning_description:'',
      communication_score:1,
      communication_description:'',
      productivity_score:1,
      productivity_description:'',
      knowledge_score:1,
      knowledge_description:'',
      adaptability_score:1,
      adaptability_description:'',
      initiative_score:1,
      inititative_description:'',
      judgement_score:1,
      judgement_description:'',
      interpersonal_relations_score:1,
      interpersonal_relations_description:'',
      modal: false        
    }
  }
  componentDidMount(){
    this.setState({
      employee_id:this.props.employee.id,
      appraisal_name:this.props.employee.name
    })
  }
    
 
  handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

toggle= () =>{
  this.setState({
      modal: !this.state.modal
  })
}

createAppraisal = async (currentState) => {
  const createAppraisal = await fetch("https://apppraiseme-api.herokuapp.com/appraisals",{
    method: "POST",
    body:JSON.stringify(currentState),
    headers: {
      "Content-Type": "application/json"
    }
  })
  const parsedResponse = await createAppraisal.json()
  console.log(parsedResponse)
  // this.props.updateAppraisalArray(parsedResponse.appraisal);
}

handleSubmit= (e) => {
  e.preventDefault();
  //seed data from state into appraisals table
  this.createAppraisal(this.state)
  //redirect to appraisal show
  this.toggle();
}
  render(){
    return (
        <div className="new-appraisal">
          <Button id="newAppraisalButton" size="lg" block color="primary" onClick={this.toggle}>New Appraisal </Button>
          <Modal className="new-appraisal-modal" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader id="ModalHeader" toggle={this.toggle}>Add a New Appraisal</ModalHeader>
          <ModalBody  id="ModalBody">
          <form >
          <FormGroup>
            <h3>{this.props.employee.name}</h3>
          <h4>Period</h4>
            <Label id="dateLabel" for="period_start_date">Start:</Label>
            <Input
              type="date"
              name="period_start_date"
              id="startDate"
              onChange={this.handleChange}/>
            <Label id="dateLabel" for="period_end_date">End:</Label>
            <Input
              type="date"
              name="period_end_date"
              id="endDate"
              onChange={this.handleChange}/>
          </FormGroup>
          <Table className="appraisal-table" striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Score</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Leadership</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="leadership_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="leadership_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>People Development</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="people_development_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="people_development_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Planning</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="planning_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="planning_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Communication</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="communication_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="communication_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Productivity</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="productivity_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="productivity_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Knowledge</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="knowledge_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="knowledge_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Adaptability</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="adaptability_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="adaptability_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Initiative</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="initiative_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="inititative_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Judgement</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="judgement_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="judgement_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Interpersonal Relations</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="interpersonal_relations_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="interpersonal_relations_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
            </tbody>
            </Table>
          </form>
          </ModalBody>
          <ModalFooter id="ModalFooter">
          <Button onClick={this.handleSubmit} color="primary"> Submit </Button>
          </ModalFooter>
          </Modal>
        </div>
    );
  }
}

export default NewAppraisal;