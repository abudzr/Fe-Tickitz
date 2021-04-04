import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './verification.module.css'
import { withRouter } from 'react-router';

class Signup extends Component {

  render() {
    return (
      <div className={style.main}>
        <div className={style['main-left']}>
          <img src="https://bookingtickitz.netlify.app/assets/img/tickitz.png" className={style['img-title-left']} alt="" />
          <h1 className={style['text-title-left']}>Lets build your account</h1>
          <p className={style.paragraf}>To be a loyal moviegoer and access all of features,
          <br></br>your details are required.</p>
          <div className={style['circle-outline']}>1</div>
          <div className={style['line-vertical']}></div>
          <div className={style['circle-outline']}>2</div>
          <div className={style['line-vertical']}></div>
          <div className={style.circle}>3</div>

          <p className={style['paragraf-subtitles']}>Fill your additional details</p>
          <p className={style['paragraf-subtitle']} >Activate your account</p>
          <p className={style['paragraf-title']}>Done</p>
        </div>

        <div className={style['main-right']}>
          <img src="https://bookingtickitz.netlify.app/assets/img/Tickitz1.png" className={style['img-title-mobile']} alt="" />
          <h2 className={style['text-title-right1']}>You have been successfully activated.<br /> You can login now!</h2>
          <Link to="/signin">Login</Link>



        </div>
      </div>
    )
  }
}

export default withRouter(Signup)