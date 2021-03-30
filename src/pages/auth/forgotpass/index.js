import React, { Component } from 'react'
import style from './forgot.module.css'
import { Form } from 'react-bootstrap';
import axios from 'axios'
import Swal from 'sweetalert2'

class Forgot extends Component {
  state = {
    formForgot: {
      idUsers: '',
      email: '',
      password: '',
      firstName: 'user',
      lastName: 'user',
      phone: '0000000'
    },
    isPasswordShow: false,
    agree: false

  }


  render() {
    const { isPasswordShow } = this.state
    const { agree } = this.state

    return (
      <div className={style.main}>
        <div className={style['main-left']}>
          <img src="https://bookingtickitz.netlify.app/assets/img/tickitz.png" className={style['img-title-left']} alt="" />
          <h1 className={style['text-title-left']}>Lets reset your password</h1>
          <p className={style.paragraf}>To be able to use your account again, please <br />
complete the following steps.</p>
          <div className={style.circle}>1</div>
          <div className={style['line-vertical']}></div>
          <div className={style['circle-outline']}>2</div>
          <div className={style['line-vertical']}></div>
          <div className={style['circle-outline']}>3</div>
          <div className={style['line-vertical']}></div>
          <div className={style['circle-outline']}>4</div>

          <p className={style['title-paragraf']}>Fill your complete email</p>
          <p className={style['paragraf-title']}>Activate your email</p>
          <p className={style['paragraf-subtitle']} >Enter your new password</p>
          <p className={style['paragraf-subtitles']} >Done</p>
        </div>

        <div className={style['main-right']}>
          <img src="https://bookingtickitz.netlify.app/assets/img/Tickitz1.png" className={style['img-title-mobile']} alt="" />
          <h2 className={style['text-title-right']}>Fill your complete email</h2>
          <h2 className={style['text-title-right-mobile']}>Forgot password</h2>

          <p className={style['right-paragraf']}>we'll send a link to your email shortly</p>

          <Form>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" placeholder="Write Your Email" onChange={this.handleChange} required />


            <button type="submit" className={style['btn-submit']} onClick={this.handleSubmit}>Activate now</button>
          </Form>


        </div>
      </div>
    )
  }
}

export default Forgot