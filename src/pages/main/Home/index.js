import React, { Component, Fragment } from 'react'
import { NavigationUser, HeaderHome, CardsNowShow, CardsUpComing, Footers, CardEmail } from '../../../components'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import style from './home.module.css'
import axios from 'axios'
import Button from '../../../components/Button'


class Home extends Component {
    state = {
        data: []
    }

    handleDetail = (data) => {
        // console.log(data);
        this.props.history.push(`/movie/${data}`)
    }
    componentDidMount() {
        const token = localStorage.getItem('token')
        const url = process.env.REACT_APP_API_MOVIE;

        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {

                this.setState({
                    data: res.data.data
                })
            })

    }



    render() {
        return (
            <Fragment>
                <NavigationUser />
                <HeaderHome />

                <Container className={style['now-showing']}>
                    <div class="row">
                        <div class="mr-auto">
                            <p className={style['title-NowShowing']}>Now Showing</p>
                        </div>
                        <div class="ml-auto">
                            <Link className={style['sub-title']} to="/movies">View All</Link>
                        </div>
                    </div>
                    <div class="row flex-nowrap mt-4 pb-4 pt-2" id={style['scrolling-nowShowing']}>
                        {this.state.data.map(data => {
                            return (
                                <div class="col-7 col-lg-3" key={data.idMovie}>
                                    <CardsNowShow
                                        img={data.image}
                                    />
                                </div>
                            )
                        })
                        }
                    </div>

                </Container>
                <Container className={style['up-coming']}>
                    <div class="row">
                        <div class="mr-auto">
                            <p className={style['title-up-coming']}>Up Coming Movies</p>
                        </div>
                        <div class="ml-auto">
                            <Link className={style['sub-title']} to="/movies">View All</Link>
                        </div>
                    </div>



                    <div class="row flex-nowrap mt-4 pb-4 pt-2" id={style['scrolling-nowShowing']}>
                        <div class="col-4 col-lg-2">
                            <Button title="september" btn="btn-month-active" color="purple" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="Oktober" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="November" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="December" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="January" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="February" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="March" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="April" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="May" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="June" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="July" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                        <div class="col-4 col-lg-2">
                            <Button title="August" btn="btn-month" color="white" onClick={this.handleLogin} />
                        </div>
                    </div>



                    <div class="row flex-nowrap mt-4 pb-4 pt-2" id={style['scrolling-nowShowing']}>
                        {this.state.data.map(data => {
                            return (
                                <div class="col-7 col-lg-3" key={data.idMovie}>
                                    <CardsUpComing
                                        data={data}
                                        detail={this.handleDetail}
                                    />

                                </div>
                            )
                        })
                        }
                    </div>

                </Container>
                <Container>
                    <CardEmail
                        title='Be the vanguard of the'
                        subTitle='By joining you as a Tickitz member,
                        we will always send you the latest updates via email .'
                    />

                </Container>
                <Footers />
            </Fragment>
        )
    }
}

export default Home