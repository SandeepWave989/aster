import React from 'react';
import styles from './Header.module.css'
import classNames from 'classnames';
import logo from '../../Img/logo.png'
import DropDownHeader from '../Dropdown/DropDownHeader';
import { Container, Nav, Navbar, Form, Dropdown } from 'react-bootstrap';


function Header() {
    const dropdownItems = [
        { href: '#', label: 'About Aster DM Healthcare' },
        { href: '#', label: 'About Aster Clinic' },
        { href: '#', label: 'Vision, Values and Mission' },
        { href: '#', label: 'Chairman’s Message' },
        { href: '#', label: 'Executive Management' },
        { href: '#', label: 'Awards & Accreditations' },
        { href: '#', label: 'Global Network' },
    ];
    const dropdownItems2 = [
        { href: '#', label: 'Find a Doctor' },
        { href: '#', label: 'Find a Clinic' },
        { href: '#', label: 'Find a Speciality' },
        { href: '#', label: 'Special Clinics' },
        { href: '#', label: 'Preventive Health Packages' },
        { href: '#', label: 'Insurance Affiliates' },
        { href: '#', label: 'Aster Hospital' },
        { href: '#', label: 'Aster Blog' },
        { href: '#', label: 'Shop Online' },
        { href: '#', label: 'Health Tools' },
        { href: '#', label: 'Senior Care' },
        { href: '#', label: 'Emotional and Mental Health' },
        { href: '#', label: 'IV Vitamin Drip Therapy' },
        { href: '#', label: 'AESTHETICS BY ASTER' },
    ];
    const dropdownItems3 = [
        { href: '#', label: 'Doctor Appointments' },
        { href: '#', label: 'Teleconsultation' },

    ];
    const dropdownItems4 = [
        { href: '#', label: 'Corporate Office' },
        { href: '#', label: 'Feedback/Enquiry' },
        { href: '#', label: 'Careers' },

    ];

    return (
        <>
            <Navbar expand="lg" className="p-0">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className='ms-auto gap-4 align-items-center fw-medium me-3'> */}
                        <Nav className={classNames('ms-auto gap-3 align-items-center fw-medium me-3', styles.menu_list)}>
                            <DropDownHeader title="ABOUT US" items={dropdownItems}/>
                            <DropDownHeader title="PATIENT CARE" items={dropdownItems2} />
                            <DropDownHeader title="ONLINE APPOINTMENTS" items={dropdownItems3} />
                            <Dropdown>
                                SPECIALITITES
                            </Dropdown>
                            <Dropdown>
                                ASTER AT HOME
                            </Dropdown>
                            <Dropdown>
                                CLINICAL EXECLLENCE
                            </Dropdown>
                            <DropDownHeader title="CONTACT US" items={dropdownItems4} />
                        </Nav>
                        <Form inline className={styles.widthSearch}>
                            <div className='search_bar_header position-relative'>
                            <Form.Control
                                type="text"
                                className={classNames('mr-sm-2',styles.searchBackground)}
                                
                            />
                            <div className={styles.iconSearch} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </div>
                            </div>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
