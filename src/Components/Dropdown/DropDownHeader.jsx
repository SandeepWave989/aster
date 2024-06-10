import React from 'react'
import './DropDownHeader.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

function DropDownHeader({ title, items }) {
    return (
        <>
            <NavDropdown title={title} id="basic-nav-dropdown">
                {items.map((item, index) => (
                    item.divider ? (<NavDropdown.Divider key={index} />) : (<NavDropdown.Item href={item.href} key={index}>  
                    {item.label}
                    </NavDropdown.Item>
                    )
                ))}
            </NavDropdown>
        </>
    )
}

export default DropDownHeader
