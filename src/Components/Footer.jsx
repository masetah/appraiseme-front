import React, {Component} from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap/lib';

class Footer extends Component {
    render() {
        return (
        <div className="footer">
        <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto"><img src="/Logos/web-page.png" alt="Profile site"/> Mase Taherian 2019 </NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink className="logo" id="github" href="https://github.com/masetah/AppPraisMe"  ><img src="/Logos/github-logo.png" alt="Github Logo"/> </NavLink> 
                </NavItem>
                <NavItem>
                    <NavLink className="logo" id="linkedin" href="https://www.linkedin.com/in/masetaherian/"  ><img src="/Logos/linkedin.png" alt="Linkedin Logo"/> </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="logo" id="facebook" href="https://www.facebook.com/mase.taherian" ><img src="/Logos/facebook.png" alt="Facebook Logo"/> </NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink className="logo" id="profileSite" href="/" ><img src="/Logos/web-page.png" alt="Webpage Logo"/> </NavLink>
                </NavItem> */}
                <NavItem>
                    <NavLink className="logo" id="resume" href="https://docs.google.com/document/d/10WLVziclEpZTavVlsRC3ToLlMVfBwFeCMBfGVLkJ7a4/edit?usp=sharing" target="_blank"><img src="/Logos/resume.png" alt="Resume Logo"/> </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        </div>
        );
    }
}

export default Footer;