import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import style from './showtime.module.css'
import { Container, Dropdown } from 'react-bootstrap';
// import Button from '../Button'



class CardEmail extends Component {
    render() {
        return (
            <Fragment>
                <Container className={style.showTimes}>
                    <p class={style["title-show"]}>Showtimes and Tickets</p>
                    <div class={style["dropdown-show"]}>
                        <div class={style["dropdown-showTimes"]}>
                            <input className={style["dropdown-showTimes"]} type="date" value="2020-07-20" />

                        </div>
                        <div  >
                            <Dropdown className={style['dropdown-location']} >
                                <i class="fab fas fa-map-marker-alt" id={style.marker} ></i>
                                <Dropdown.Toggle className={style['button-location']} id="dropdown-basic">
                                    Location
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Jakarta</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Bandung</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Karawang</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}


export default CardEmail