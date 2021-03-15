import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { Navigation, HeaderHome, CardsNowShow, CardsUpComing, Footers, CardEmail } from '../../../components'
import { Container } from 'react-bootstrap';
import style from './home.module.css'



class Home extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         films: [],
    //         isLoading: false
    //     }
    // }


    // componentDidMount() {
    //     this.setState({
    //         isLoading: true
    //     })
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => {
    //             this.setState({
    //                 films: res.data,
    //                 isLoading: false
    //             })
    //         })
    //         .catch(() => {
    //             alert('server bermasalah')
    //             this.setState({
    //                 isLoading: false
    //             })
    //         })
    // }
    render() {
        return (
            <Fragment>
                <Navigation />
                <HeaderHome />
                <Container className={style['now-showing']}>
                    <div class="row">
                        <div class="mr-auto">
                            <p className={style['title-NowShowing']}>Now Showing</p>
                        </div>
                        <div class="ml-auto">
                            <a className={style['sub-title']} href="#">View All</a>
                        </div>
                    </div>
                    <CardsNowShow />
                </Container>
                <Container className={style['up-coming']}>
                    <div class="row">
                        <div class="mr-auto">
                            <p className={style['title-up-coming']}>Up Coming Movies</p>
                        </div>
                        <div class="ml-auto">
                            <a className={style['sub-title']} href="#">View All</a>
                        </div>
                    </div>
                    <CardsUpComing />
                </Container>
                <Container>
                    <CardEmail />

                </Container>
                <Footers />
            </Fragment>
        )
    }
}

export default Home