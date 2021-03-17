import React, { Component } from 'react'
import style from './signup.module.css'
import { Form } from 'react-bootstrap';
import axios from 'axios'

class Signup extends Component {
  state = {
    formSignUp: {
      idUsers: '1',
      email: '',
      password: '',
      fullName: 'user',
      phone: '0000000'
    }

  }

  postUser = () => {
    axios.post('http://localhost:8000/users', this.state.formSignUp)
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.log('error:', err);
      })
  }
  handleChange = (e) => {
    // console.log('test handle :', e.target);
    const formSignUpNew = { ...this.state.formSignUp };
    const time = new Date().getTime();
    // console.log(time);
    formSignUpNew['idUsers'] = time
    // console.log(e.target.name);
    formSignUpNew[e.target.name] = e.target.value;
    this.setState({
      formSignUp: formSignUpNew
    })
  }

  handleSubmit = () => {
    this.postUser();
    // console.log(this.state.formSignUp);
    this.props.history.push('/signin')
  }
  render() {
    return (
      <div className={style.main}>
        <div className={style['main-left']}>
          <img src="https://bookingtickitz.netlify.app/assets/img/tickitz.png" className={style['img-title-left']} alt="" />
          <h1 className={style['text-title-left']}>Lets build your account</h1>
          <p className={style.paragraf}>To be a loyal moviegoer and access all of features,
          <br></br>your details are required.</p>
          <div className={style.circle}>1</div>
          <div className={style['line-vertical']}></div>
          <div className={style['circle-outline']}>2</div>
          <div className={style['line-vertical']}></div>
          <div className={style['circle-outline']}>3</div>

          <p className={style['paragraf-title']}>Fill your additional details</p>
          <p className={style['paragraf-subtitle']} >Activate your account</p>
          <p className={style['paragraf-subtitles']}>Done</p>
        </div>

        <div className={style['main-right']}>
          <img src="https://bookingtickitz.netlify.app/assets/img/Tickitz1.png" className={style['img-title-mobile']} alt="" />
          <h2 className={style['text-title-right']}>Fill your additional details</h2>
          <h2 className={style['text-title-right1']}>Sign Up</h2>


          <Form>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" placeholder="Write Your Email" onChange={this.handleChange} />

            <div className={style['form-group']}>
              <span className="fa  fa fa-eye "></span>
              <label htmlFor="password">Password</label>
              <input className={style['form-control']} id="password" name="password" type="password" placeholder="Write your password" onChange={this.handleChange} />
            </div>
            <input className={style.terms} type="checkbox" />
            <label className={style['text-term']}>I agree to terms & conditions</label>
            <button type="submit" className={style['btn-submit']} onClick={this.handleSubmit}>Join for free now</button>
          </Form>

          <p className={style['text-forgot']}> Do you already have an account? <a href="#">Log in</a></p>
          <div className={style.or}>
            <hr></hr>
            <p className={style['text-or']}>or</p>
            <hr></hr>
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

export default Signup