import React from 'react';
import {Nav, Navbar, NavDropdown, Row, Col} from 'react-bootstrap'
import './Header.css';
import seal from './house_seal.png';
import logo from './logo.png';

//TODO: Move toggle menu btn to top 

class Header extends React.Component {
    render(){
        return (   
            <div>  
                <header id="header" className="navbar-fixed-top">
                    <Row>
                        <Col id="logo">
                            <a href="/">
                                <img
                                src={seal}
                                width="65"
                                height="65"
                                className="d-inline-block"
                                alt="U.S. House of Representatives Seal"
                                />
                            </a>
                            <a href="/">
                                <img
                                    src={logo}
                                    height="35"
                                    className="d-inline-block"
                                    alt="U.S. House of Representatives"
                                />
                            </a>  
                        </Col>
                    </Row>
                </header>
                <Navbar id="navbar" expand="lg" variant="dark" className="navbar-fixed-top">
                    <Nav.Link >
                        <li className="hidden-xs hidden-sm nav-append" id="star"><svg role="img" aria-label="Yellow Star" xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="8.5 -3.9 19 17.8"><polygon points="27.5 3 20.3 3 18.1 -3.9 15.8 3 8.5 3 14.4 7.1 12.2 13.9 18 9.7 23.9 13.9 21.7 7.1 " fill="#FFD262"></polygon></svg></li>
                    </Nav.Link>
                    <Navbar.Brand href="#home" id="nav-brand">
                        116TH CONGRESS
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <NavDropdown title="LEGISLATIVE COMMITTEE" className="nav-link" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://live.house.gov" target="_blank">House Live</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.congress.gov/search?q={%22source%22:%22legislation%22,%22congress%22:%22116%22}&searchResultViewType=expanded" target="_blank">Legislative Search</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="MEMBER INFORMATION" href="#pricing" className="nav-link">
                            <NavDropdown.Item href="https://bioguideretro.congress.gov/">Biographical Directory</NavDropdown.Item>        
                        </NavDropdown>
                        <NavDropdown title="COMMITTEE INFORMATION" href="#pricing" className="nav-link">
                            <NavDropdown.Item href="https://clerk.house.gov/committees">Committee Profiles</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.house.gov/Committee/Calendar/ByWeek.aspx?WeekOf=08092020_08152020">Committee Repository</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.govinfo.gov/">Committee Reports</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="DISCLOSURES" className="nav-link" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://disclosures-clerk.house.gov" target="_blank">Public Disclosure </NavDropdown.Item>
                            <NavDropdown.Item href="#https://disclosures-clerk.house.gov/PublicDisclosure/FinancialDisclosure"  target="_blank">Financial Disclosure</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                    <Nav.Link>
                        <li className="hidden-xs hidden-sm nav-append" id="star"><svg role="img" aria-label="Yellow Star" xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="8.5 -3.9 19 17.8"><polygon points="27.5 3 20.3 3 18.1 -3.9 15.8 3 8.5 3 14.4 7.1 12.2 13.9 18 9.7 23.9 13.9 21.7 7.1 " fill="#FFD262"></polygon></svg></li>
                    </Nav.Link>
                </Navbar>
            </div>
        )}
}

export default Header;