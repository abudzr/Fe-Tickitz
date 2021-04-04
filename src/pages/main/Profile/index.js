import React, { Component, Fragment } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode";
import { NavigationUser, CardsProfile, Footers } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './payment.module.css'
import Swal from 'sweetalert2'


class Profile extends Component {
    state = {
        data: [],
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        image: '',
        selectedFile: null

    }


    getPostAPI = () => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token);
        const url = `${process.env.REACT_APP_API_RESTAPI}users/${decoded.idUsers}`
        axios.get(url)
            .then((res) => {
                this.setState({
                    data: res.data.data[0],
                    email: res.data.data[0].email,
                    password: res.data.data[0].password,
                    firstName: res.data.data[0].firstName,
                    lastName: res.data.data[0].lastName,
                    phone: res.data.data[0].phone,
                    image: res.data.data[0].image
                })
            })

    }

    handleUpdate = () => {
        const selectedFile = this.state.selectedFile
        const fd = new FormData();
        fd.append('email', this.state.email)
        fd.append('password', this.state.password)
        fd.append('firstName', this.state.firstName)
        fd.append('lastName', this.state.lastName)
        fd.append('phone', this.state.phone)
        fd.append('image', selectedFile)

        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token);
        const url = `${process.env.REACT_APP_API_RESTAPI}users/${decoded.idUsers}`
        console.log(url);
        axios.patch(url, fd)
            .then((res) => {
                this.getPostAPI()

                Swal.fire("Update Profile Success!", "", "success");

            }, (err) => {
                if (err) {
                    Swal.fire(" ERROR!!!", "Update Failed", "error");
                }
            })
    }


    handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        console.log(name)
        this.setState({
            [name]: value
        })
    }

    handleChangePicture = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
        // console.log(e.target.files[0]);


    }
    componentDidMount() {
        this.getPostAPI();
    }


    render() {
        return (
            <Fragment>
                <NavigationUser />
                <CardsProfile
                    image={this.state.image}
                    name={`${this.state.firstName} ${this.state.lastName}`}
                    first={this.state.firstName}
                    last={this.state.lastName}
                    mail={this.state.email}
                    phonenumber={this.state.phone}
                    pass={this.password}
                    change={this.handleChange}
                    update={this.handleUpdate}
                    changePicture={this.handleChangePicture}
                />
                <Footers />
            </Fragment>
        )
    }
}

export default Profile