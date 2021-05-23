// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { login } from '../../../configs/redux/action/user'
import Swal from 'sweetalert2'
import style from './signin.module.css'
import Tickitz from "../../../assets/img/tickitz.png";
import Tickitz1 from "../../../assets/img/Tickitz1.png";
// import google from "../../../assets/img/google2.png";
// import fb from "../../../assets/img/fb.png";


function Signin(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  // const { loading } = useSelector(state => state.user)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordShow, setisPasswordShow] = useState(false)

  const tooglePasswordVisibility = () => {
    setisPasswordShow(!isPasswordShow)

  }
  const handleSignup = (e) => {
    e.preventDefault();
    history.push("/signup")
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    dispatch(login(data))
      .then((res) => {
        if (res.role === 1) {
          history.push('/')
        } else {
          history.push('/')
        }
      })
      .catch((err) => {
        Swal.fire("", "Email or Password is incorrect. Try again or click Forgot password to reset.", "error");
      })

  }

  return (
    <div className={style.main}>
      <div className={style['main-left']}>
        <img src={Tickitz} className={style['img-title-left']} alt="bg-dekstop" />
        <h1 className={style['text-title-left']}>wait, watch, wow!</h1>
      </div>

      <div className={style['main-right']}>
        <img src={Tickitz1} className={style['img-title-mobile']} alt="logo" />
        <h2 className={style['text-title-right']}>Sign In</h2>
        <p className={style['text-subtitle']}>Sign in with your data that you entered during
              your registration</p>
        <form >
          <label>Email</label>
          <input id="email" name="email" type="email" value={email} placeholder="Write Your Email" onChange={(e) => setEmail(e.target.value)} />

          <div className={style['form-group']}>
            <label>Password</label>
            <input className={style['form-control']}
              name="password" value={password}
              type={(isPasswordShow) ? "text" : "password"} placeholder="Write your password"
              onChange={(e) => setPassword(e.target.value)} />
            <i className={`fa ${isPasswordShow ? "fa-eye-slash" : "fa-eye"}  password-icon`}
              onClick={tooglePasswordVisibility} />
          </div>

          <button type="submit" className={style['btn-submit']} onClick={handleLogin}>Sign In</button>
        </form>

        <p className={style['text-forgot']}>Forgot your password? <Link to="/forgot-password">Reset now</Link></p>
        <div className={style.or}>
          <hr />
          <p className={style['text-or']}>or</p>
          <hr />
        </div>
        <button type="submit" className={style['btn-signup']} onClick={handleSignup}>Sign Up</button>

        {/* <div className={style.btn}>
          <div className={style['btn-google']}>
            <img src={google} alt="btn-google" />
            <p className={style['text-btn']}>Google</p>
          </div>
          <div className={style['btn-fb']}>
            <img src={fb} alt="btn-fb" />
            <p className={style['text-btn']}>Facebook</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}


export default Signin