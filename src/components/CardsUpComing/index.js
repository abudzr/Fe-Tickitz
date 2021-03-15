import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import style from './card.module.css'
import { Card } from 'react-bootstrap';
import Button from '../Button'
import axios from 'axios'



class CardsUpComing extends Component {
    state = {
        data: []
    }


    componentDidMount() {
        const url = process.env.REACT_APP_API_MOVIE;
        // console.log(url);
        axios.get(url)
            .then((res) => {
                // console.log(res.data.data);
                this.setState({
                    data: res.data.data
                })
            })
    }
    handleDetail = () => {
        this.props.history.push('/movie')
    }

    render() {
        return (
            <Fragment>
                <div class="row flex-nowrap mt-4 pb-4 pt-2" id={style['scrolling']}>
                    <div class="col-4 col-lg-2">
                        <Button title="September" btn="btn-month-active" color="purple" onClick={this.handleLogin} />
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
                <div class="row flex-nowrap mt-4 pb-4 pt-2" id={style['scrolling']}>
                    {this.state.data.map(data => {
                        return (
                            <div class="col-7 col-lg-3" >
                                <Card className={style['card']} key={data.idMovie}>
                                    <Card.Img className={style['card-img']} src={data.image} />
                                    <Card.Body>
                                        <Card.Title className={style['card-title']}>{data.movieName}</Card.Title>
                                        <Card.Text className={style['card-text']}>
                                            {data.genre}
                                        </Card.Text>
                                        <Button title="Detail" type="submit" btn="btn-card" color="white" onClick={this.handleDetail} />
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                    }
                </div>
            </Fragment >
        )
    }
}


export default withRouter(CardsUpComing);