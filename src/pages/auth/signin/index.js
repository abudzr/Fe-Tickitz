import React, { Component } from 'react'
// css global
// import './signin.css'
// css module/scop
import style from './signin.module.css'

class Signin extends Component {

  handleLogin = () => {
    this.props.history.push('/')
  }


  render() {
    return (
      <div className={style.main}>
        <div className={style['main-left']}>
          <img src="https://bookingtickitz.netlify.app/assets/img/tickitz.png" className={style['img-title-left']} alt="" />
          <h1 className={style['text-title-left']}>wait, watch, wow!</h1>
        </div>

        <div className={style['main-right']}>
          <img src="https://bookingtickitz.netlify.app/assets/img/Tickitz1.png" className={style['img-title-mobile']} alt="" />
          <h2 className={style['text-title-right']}>Sign In</h2>
          <p className={style['text-subtitle']}>Sign in with your data that you entered during
              your registration</p>
          <form>
            <label>Email</label>
            <input id="email" type="text" placeholder="Write Your Email" />

            <div className={style['form-group']}>
              <span className="fa  fa fa-eye "></span>
              <label>Password</label>
              <input className={style['form-control']} type="password" placeholder="Write your password" />
            </div>

            <button type="submit" className={style['btn-submit']} onClick={this.handleLogin}>Sign In</button>
          </form>

          <p className={style['text-forgot']}>Forgot your password? <a href="#">Reset now</a></p>
          <div className={style.or}>
            <hr />
            <p className={style['text-or']}>or</p>
            <hr />
          </div>
          <div className={style.btn}>
            <div className={style['btn-google']}>
              <img src="https://bookingtickitz.netlify.app/assets/img/google2.png" />
              <p className={style['text-btn']}>Google</p>
            </div>
            <div className={style['btn-fb']}>
              <img src="https://bookingtickitz.netlify.app/assets/img/fb.png" />
              <p className={style['text-btn']}>Facebook</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signin