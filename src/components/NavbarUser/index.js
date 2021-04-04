import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Swal from 'sweetalert2'
import axios from 'axios'
import jwtDecode from "jwt-decode";

class NavigationUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            image: ''
        };
        this.toogleSearch = this.toogleSearch.bind(this)
    }

    toogleSearch = () => {
        const { show } = this.state;
        this.setState({ show: !show })
    }

    handleLogout = () => {
        localStorage.clear();
        this.props.history.push("/signin");
    };

    getPostAPI = () => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token);
        const url = `${process.env.REACT_APP_API_RESTAPI}users/${decoded.idUsers}`
        axios.get(url)
            .then((res) => {
                this.setState({
                    image: res.data.data[0].image
                })
            })
    }
    componentDidMount() {
        this.getPostAPI();
    }

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
                            <Nav.Link href="#" id={style['nav-link']}>Cinemas</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link href="/order" id={style['nav-link']}>Buy Ticket</Nav.Link>
                            <NavDropdown.Divider />
                        </Nav>
                        <Nav className="ml-auto">
                            <NavDropdown title="Location" className={style['dropdown-item']} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Jakarta</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Bandung</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Karawang</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Purwokerto</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <NavDropdown.Divider />
                        {/* <span className="fa fa-search mr-auto" id="search"></span> */}
                        <i className="fa fa-search mr-auto ml-auto " id={style['search']} onClick={this.toogleSearch} />
                        {this.state.show && <Form />}

                        <div class={style.dropdown}>
                            <div className={style['big-circle']}>
                                <img class={style['img-user']} src={this.state.image} />
                            </div>
                            <div class={style['dropdown-content']}>
                                <Link to="/profile">Profile</Link>
                                <Link to="#" onClick={this.handleLogout}>Logout</Link>
                            </div>
                        </div>

                        {/* <Navbar.Brand className={style['logo-user']} to="/profile">

                            <img class={style['img-user']} src="https://bookingtickitz.netlify.app/assets/img/user.png" />

                        </Navbar.Brand> */}
                        <p className={style['text-credit']}>© 2020 Tickitz. All Rights Reserved.</p>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}
class Form extends Component {
    // state = {
    //     show: true,
    //     data: [],
    //     movieName: ''
    // };
    // handleChange = (e) => {
    //     console.log(e.target.name);
    //     this.setState({
    //         movieName: e.target.name = e.target.value
    //     })
    //     console.log(e.target.value);

    //     const token = localStorage.getItem('token')
    //     const url = `${process.env.REACT_APP_API_MOVIEID}/search/film?name=${e.target.value}`;
    //     axios.get(url, {
    //         headers: {
    //             Authorization: 'Bearer ' + token
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.data.data);
    //             this.setState({
    //                 data: res.data.data
    //             })
    //         })
    // }
    render() {
        return (
            <form className={style['form-hide']}>
                <input
                    className={style['form-control-search']}
                    type="text"
                    placeholder="Search..."
                    aria-label="Search"
                    value={this.movieName}
                    onChange={this.handleChange}
                    name="movieName"
                />
            </form>
        )
    }
}

export default withRouter(NavigationUser)