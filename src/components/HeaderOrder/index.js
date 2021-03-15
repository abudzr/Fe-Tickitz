import React, { Component } from 'react'
import style from './headerorder.module.css'
import { Jumbotron, Container } from 'react-bootstrap';
import Button from '../Button'


class HeaderOrder extends Component {
    render() {
        return (
            <Jumbotron className={style['change-movie']}>
                <Container>
                    <div class="row">
                        <div class="col-lg-6">
                            <p class={style['text-change-movie']}>Spider-Man: Homecoming</p>
                        </div>
                        <div class="col-lg-6">
                            <Button title="Change Movie" btn="btn-change-movie" color="whitesmoke" onClick={this.handleLogin} />
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}


export default HeaderOrder