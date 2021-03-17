import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


class NavigationUser extends Component {
    render() {
        return (
            <Container>
                <Navbar collapseOnSelect expand="lg" className={style.nav} fixed="top" >
                    <Navbar.Brand className={style.logo} href="/">
                        <img src="https://bookingtickitz.netlify.app/assets/img/logo.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <img src="https://bookingtickitz.netlify.app/assets/img/Group.png" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <form className={style['form-inline']}>
                            <input className="form-control mr-sm-12 pl-5 " type="search" placeholder="Search..." aria-label="Search" />
                            <i className="fa fa-search" id={style['search-icon']}></i>
                        </form>
                        <Nav className="mr-auto">
                            <Nav.Link href="/" id={style['nav-link']}>Movies</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link href="/movie" id={style['nav-link']}>Cinemas</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link href="/order" id={style['nav-link']}>Buy Ticket</Nav.Link>
                            <NavDropdown.Divider />
                        </Nav>
                        <Nav className="ml-auto">
                            <NavDropdown title="Location" className={style['dropdown-item']} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Jakarta</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Bandung</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Karawang</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <NavDropdown.Divider />
                        {/* <span className="fa fa-search mr-auto" id="search"></span> */}
                        <Link href="#search" className="fa fa-search mr-auto ml-auto " id={style['search']}></Link>
                        <Navbar.Brand className={style['logo-user']} href="/profile">
                            <img class={style['img-user']} src="https://bookingtickitz.netlify.app/assets/img/user.png" />

                        </Navbar.Brand>
                        <p className={style['text-credit']}>© 2020 Tickitz. All Rights Reserved.</p>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default NavigationUser