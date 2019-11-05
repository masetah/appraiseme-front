import React, {Component} from 'react';
import EmployeeIndex from './EmployeeIndex';
import AppraisalIndex from './AppraisalIndex';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap/lib';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state={
      employees:[],
      appraisals:[]
  }
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navBar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/dashboard">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <EmployeeIndex
                employees={this.props.employees}
              />
              </NavItem>
              <NavItem>
              <AppraisalIndex
                appraisals={this.props.appraisals}
              />
              </NavItem>
              <NavItem>
                <Button color='link' size="lg" href="/">Logout</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;