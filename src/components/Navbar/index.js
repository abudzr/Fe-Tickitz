import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = { show: true };

        this.toogleSearch = this.toogleSearch.bind(this)
    }

    toogleSearch = () => {
        const { show } = this.state;
        this.setState({ show: !show })
    }

    render() {
        return (
            <Container>
                <Navbar collapseOnSelect expand="lg" className={style.nav} fixed="top" >
                    <Navbar.Brand href="/">
                        <img src="https://bookingtickitz.netlify.app/assets/img/logo.png" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <img src="https://bookingtickitz.netlify.app/assets/img/Group.png" alt="toogle" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <form className={style['form-inline']}>
                            <input className="form-control mr-sm-12 pl-5 " type="search" placeholder="Search..." aria-label="Search" />
                            <i className="fa fa-search search-icon" id={style['search-icon']} />
                        </form>
                        <Nav className="mr-auto">
                            <Nav.Link href="/" id={style['nav-link']}>Movies</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link href="/movie/MV001" id={style['nav-link']}>Cinemas</Nav.Link>
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
                        <i className="fa fa-search mr-auto ml-auto " id={style['search']} onClick={this.toogleSearch} />
                        {this.state.show && <Form />}
                        <Link className="nav-link btn text-white" id={style['btn-signUp']} to="/signup" >Sign Up</Link>
                        <p className={style['text-credit']}>© 2020 Tickitz. All Rights Reserved.</p>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

class Form extends Component {
    render() {
        return (
            <form className={style['form-hide']}>
                <input className={style['form-control-search']} type="search" placeholder="Search..." aria-label="Search" onClick="" />
            </form>
        )
    }
}


export default Navigation