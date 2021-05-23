import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import style from './nowShow.module.css'
import { Container } from 'react-bootstrap';
import axios from 'axios'
// import http from '../../helper/http'
import CardsNowShow from '../../components/CardsNowShow'
import { withRouter } from "react-router-dom";



class NowShowingPart extends Component {
    state = {
        nowShowingList: []
    };
    componentDidMount() {
        const url = `${process.env.REACT_APP_API_RESTAPI}movies/nowShowing?order=DESC&limit=5`;
        axios.get(url)
            .then((res) => {
                this.setState({
                    nowShowingList: res.data.data
                })
            })
    }

    handleDetail = (data) => {
        console.log(data);
        this.props.history.push(`/movie/${data}`)
    }
    render() {
        return (
            <Fragment>
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
                        {this.state.nowShowingList.map(data => {
                            return (
                                <div class="col-7 col-lg-3" key={data.idMovie}>
                                    <CardsNowShow
                                        data={data}
                                        detail={this.handleDetail}
                                    />
                                </div>
                            )
                        })
                        }

                    </div>

                </Container>
            </Fragment>
        )
    }
}


export default withRouter(NowShowingPart)


