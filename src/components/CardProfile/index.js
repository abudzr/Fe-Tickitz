import React, { Component, Fragment } from 'react'
import style from './card.module.css'
import { Card, Nav, Dropdown } from 'react-bootstrap';
import Button from '../Button'
import { withRouter } from "react-router-dom";



class CardsProfile extends Component {

    // handleBack = () => {
    //     this.props.history.push('/order')
    // }
    render() {
        return (
            <Fragment>
                <div className={style['cards-profile']}>
                    <div className="container">
                        <div class="row">
                            <div class="col-12 col-lg-4">
                                <div className={style['info-profile']}>
                                    <p className={style.title}>Info</p>
                                </div>

                            </div>
                            <div class="col-12 col-lg-8">
                                <div className={style['info-profile-right']}>
                                    <Card>
                                        <Card.Header>
                                            <Nav variant="tabs" defaultActiveKey="#first">
                                                <Nav.Item>
                                                    <Nav.Link href="#first">Active</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link href="#link">Link</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link href="#disabled" disabled>
                                                        Disabled
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title>Special title treatment</Card.Title>
                                            <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            {/* <Button title="Previous Step" btn="btn-change-order" color="white" onClick={this.handleBack} />
                            <Button title="Pay Your Order" btn="btn-checkout" color="purple" onClick={this.handleLogin} /> */}
                        </div>
                    </div>
                </div>


            </Fragment>
        )
    }
}


export default withRouter(CardsProfile);