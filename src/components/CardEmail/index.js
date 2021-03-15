import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import style from './card.module.css'
// import { Card } from 'react-bootstrap';
import Button from '../Button'



class CardEmail extends Component {
    render() {
        return (
            <Fragment>
                <div className={style.subscribes}>
                    <h2 className={style.title}>Be the vanguard of the
                    <br></br><br></br><span class="font-primary">Moviegoers</span></h2>
                    <div class={style['form-email']}>
                        <form class={style['form-inline-custom']}>
                            <input id="email" type="text" placeholder="Type your email" />
                        </form>
                        <Button title="Join Now" btn="btn-custom-subscribes" color="purple" onClick={this.handleLogin} />
                    </div>
                    <p class={style['text-subcribes']}>By joining you as a Tickitz member,
                    <br></br>we will always send you the latest updates via email .</p>
                </div>
            </Fragment>
        )
    }
}


export default CardEmail