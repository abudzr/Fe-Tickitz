import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import style from './headerhome.module.css'
import { Jumbotron, Container } from 'react-bootstrap';
import Jumbotron1 from "../../assets/img/jumbotron1.png";
import Jumbotron2 from "../../assets/img/jumbotron2.png";
import Jumbotron3 from "../../assets/img/jumbotron3.png";


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
                                <img src={Jumbotron1} className={style['home-img-spider']} alt="Jumbotron" />
                                <img src={Jumbotron2} className={style['home-img-lion']} alt="Jumbotron" />
                                <img src={Jumbotron3} className={style['home-img-woman']} alt="Jumbotron" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}


export default HeaderHome