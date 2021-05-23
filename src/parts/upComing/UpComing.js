import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import style from './upcoming.module.css'
import { Container } from 'react-bootstrap';
import axios from 'axios'
import CardsUpComing from '../../components/CardsUpComing'
import { withRouter } from "react-router-dom";
import Button from '../../components/Button'

class UpComingPart extends Component {
    state = {
        nowShowingList: []
    };
    componentDidMount() {
        const url = `${process.env.REACT_APP_API_RESTAPI}movies/upComing?order=DESC&limit=5`;
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
                        {this.state.nowShowingList.map(data => {
                            return (
                                <div class="col-7 col-lg-3" key={data.id}>
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
            </Fragment>
        )
    }
}

export default withRouter(UpComingPart)
