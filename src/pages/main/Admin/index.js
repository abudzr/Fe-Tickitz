import React, { Component, Fragment } from 'react'
import { Navigation, Admin, Footers, NavigationUser } from '../../../components'
import { Container } from 'react-bootstrap';
import style from './home.module.css'
import axios from 'axios'
import Button from '../../../components/Button'


class PageAdmin extends Component {
    state = {
        data: []
    }

    getPostAPI = () => {
        const token = localStorage.getItem('token')
        const url = process.env.REACT_APP_API_RESTAPI;

        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                this.setState({
                    data: res.data.data
                })
                console.log(res);
            })
    }


    handleDelete = (data) => {
        // console.log(data);
        const token = localStorage.getItem('token')
        const remove = 'http://localhost:8000/movies/'
        // const remove = process.env.REACT_APP_API_DELETE;
        // console.log(remove);
        axios.delete(`${remove}${data}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                this.getPostAPI()
            })
    }

    handleUpdate = (data) => {
        this.props.history.push(`/pageadmin/${data}`)
    }
    componentDidMount() {
        this.getPostAPI();
    }



    render() {
        return (
            <Fragment>
                <NavigationUser />

                <Container className={style['up-coming']}>
                    <h1>Admin</h1>

                    <div className="row mt-4 pb-4 pt-2" id={style.card} >
                        {this.state.data.map(data => {
                            return (
                                <div className="col-7 col-lg-3" key={data.id}>
                                    <Admin
                                        data={data}
                                        delete={this.handleDelete}
                                        update={this.handleUpdate}
                                    />
                                </div>
                            )
                        })
                        }
                    </div>

                </Container>

                <Footers />
            </Fragment>
        )
    }
}

export default PageAdmin