import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import style from './headerhome.module.css'
import { Jumbotron, Container } from 'react-bootstrap';


class HeaderHome extends Component {
    render() {
        return (
            <Jumbotron className={style.jumbotron}>
                <Container>
                    <div className="row">
                        <div className="col-7 col-lg-6 ">
                            <h2 className="home-title">Nearest Cinema, Newest Movie,
                            <br></br><br></br><span className="font-primary">Find out now!</span>
                            </h2>
                        </div>
                        <div className="col-6 col-lg-6 home-img">
                            <div className="row flex-nowrap">
                                <img src="https://bookingtickitz.netlify.app/assets/img/jumbotron1.png" className={style['home-img-spider']} alt="" />
                                <img src="https://bookingtickitz.netlify.app/assets/img/jumbotron2.png" className={style['home-img-lion']} alt="" />
                                <img src="https://bookingtickitz.netlify.app/assets/img/jumbotron3.png" className={style['home-img-woman']} alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}


export default HeaderHome