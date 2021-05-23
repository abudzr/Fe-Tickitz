import React, { Component } from 'react'
import style from './footer.module.css'
// import { Footer } from 'react-bootstrap';
import logo2 from '../../assets/img/logo2.png'
import sponsor from '../../assets/img/sponsor.png'
import sponsor1 from '../../assets/img/sponsor1.png'
import sponsor2 from '../../assets/img/sponsor2.png'


class Footers extends Component {
    render() {
        return (
            <div className={style.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={logo2} alt="footer" />
                            <p className={style["text-footer"]}>Stop waiting in line. Buy tickets
                        <br></br>conveniently, watch movies quietly.</p>
                        </div>
                        <div className="col-lg-2">
                            <p className={style["text-title-footer"]}>Explore</p>
                            <div className={style.explore}>
                                <p className={style['text-subtitle-footer']}>Cinemas</p>
                                <p className={style['text-subtitle-footer']}>Movies List</p>
                                <p className={style['text-subtitle-footer']}>My Ticket</p>
                                <p className={style['text-subtitle-footer']}>Notification</p>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <p className={style["text-title-footer"]}>Our Sponsor</p>
                            <img className={style['img-footer']} src={sponsor} alt="footerimg" />
                            <img className={style['img-footer']} src={sponsor1} alt="footerimg" />
                            <img className={style['img-footer']} src={sponsor2} alt="footerimg" />

                        </div>
                        <div className=" col-lg-3 " id={style['follow-us']} >
                            <p className={style["text-title-footer"]}>Follow Us</p>
                            <div className=" row " id={style['title-follow-us']}>
                                <i className="fab fa-facebook-square" id={style.fb}></i>
                                <p className={style['text-subtitle-footer-subtitle']}> Tickitz Cinema id</p>
                            </div>
                            <div className=" row " id={style['title-follow-us']}>
                                <i className="fab fa-instagram " id={style.ig}></i>
                                <p className={style['text-subtitle-footer-subtitle']}> tickitz.id</p>
                            </div>
                            <div className=" row" id={style['title-follow-us']}>
                                <i className="fab fa-twitter" id={style.twitter}></i>
                                <p className={style['text-subtitle-footer-subtitle']}> tickitz.id</p>
                            </div>
                            <div className=" row " id={style['title-follow-us']}>
                                <i className="fab fa-youtube " id={style.yt}></i>
                                <p className={style['text-subtitle-footer-subtitle']}> Tickitz Cinema id</p>
                            </div>
                        </div>
                    </div>
                    <p className={style['text-footer-copyright']}>© 2020 Tickitz. All Rights Reserved.</p>
                </div>
            </div>
        )
    }
}

export default Footers