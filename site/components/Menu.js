// Componente (Navbar) do ReactStrap para criar o menu principal das páginas JS
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container // trabalha com o tamanho da página de modo responsivo
} from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    // O componente useState permite que caso o dispositivo sejá móvel apareça um Toggle (Lista Suspensa)
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <style>
                {`.menu-color{
                    background-color: #00080F;
                }`}
            </style>
            <Navbar className="menu-color" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Supernova Tech</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/">Portfólio</NavLink>
                        </NavItem>                                               
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Projects
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Project 1
                            </DropdownItem>
                            <DropdownItem>
                            Project 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            All Projects
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>                        
                        <NavItem>
                        <NavLink href="https://github.com/willdkdevops">GitHub</NavLink>
                        </NavItem>
                        <NavItem> 
                        <NavLink href="/">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/contato">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>William Derek</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu;