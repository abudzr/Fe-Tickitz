import React, { Component } from 'react'
// css global
// import './signin.css'
// css module/scop
import style from './signin.module.css'

class Signin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    const email = 'user@gmail.com'
    const password = 'user'
    if (this.state.password === password && this.state.email === email) {
      this.props.history.push('/')
    } else if (this.state.password === "admin" && this.state.email === "admin") {
      this.props.history.push('/order')
      // ini langsung ke tampilan admin
    } else {
      alert('email anda salah')
    }
  }
  // handleLogin = () => {
  //   this.props.history.push('/')
  // }


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
            <input id="email" name="email" type="email" value={this.state.email} placeholder="Write Your Email" onChange={this.handleChange} />

            <div className={style['form-group']}>
              <span className="fa  fa fa-eye "></span>
              <label>Password</label>
              <input className={style['form-control']} name="password" value={this.state.password} type="password" placeholder="Write your password" onChange={this.handleChange} />
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