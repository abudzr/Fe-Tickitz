import React, { Component } from 'react'
import style from './forgot.module.css'
import { Form } from 'react-bootstrap';
import axios from 'axios'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router';
import Tickitz from "../../../assets/img/tickitz.png";
import Tickitz1 from "../../../assets/img/Tickitz1.png";

class NewPass extends Component {
  state = {
    reset: '',
    password: '',
    isPasswordShow: false,
    agree: false

  }

  getPostAPI = () => {
    const url = `${process.env.REACT_APP_API_RESTAPI}users`
    axios.get(url)
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          reset: res.data.data[2].reset
          // bug
        })
        console.log(res);
      })

  }

  handleChange = (e) => {
    this.setState({
      password: e.target.name = e.target.value
    })
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const Url = `http://localhost:8000/users/password-reset?reset=${this.state.reset}`;
    console.log(Url);
    axios.post(Url, {
      password: this.state.password
    })
      .then((res) => {

        console.log(res.data.message);
        Swal.fire(" Success", res.data.message, "success");
        this.props.history.push('/signin')

      }, (err) => {
        console.log(err);
      })

  }


  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    // const { isPasswordShow } = this.state
    // const { agree } = this.state

    return (
      <div className={style.main}>
        <div className={style['main-left']}>
          <img src={Tickitz} className={style['img-title-left']} alt="" />
          <h1 className={style['text-title-left']}>Lets reset your password</h1>
          <p className={style.paragraf}>To be able to use your account again, please <br />
complete the following steps.</p>
          <div className={style['circle-outline']}>1</div>
          <div className={style['line-vertical']}></div>
          <div className={style['circle-outline']}>2</div>
          <div className={style['line-vertical']}></div>
          <div className={style.circle}>3</div>
          <div className={style['line-vertical']}></div>
          <div className={style['circle-outline']}>4</div>

          <p className={style['title-paragraf']}>Fill your complete email</p>
          <p className={style['paragraf-title']}>Activate your email</p>
          <p className={style['paragraf-subtitle']} >Enter your new password</p>
          <p className={style['paragraf-subtitles']} >Done</p>
        </div>

        <div className={style['main-right']}>
          <img src={Tickitz1} className={style['img-title-mobile']} alt="" />
          <h2 className={style['text-title-right']}>Fill your new password</h2>
          <h2 className={style['text-title-right-mobile']}>New password</h2>

          {/* <p className={style['right-paragraf']}>we'll send a link to your email shortly</p> */}

          <Form>
            <label htmlFor="password">New Password</label>
            <input id="password" type="text" name="password" placeholder="Write Your New Password" onChange={this.handleChange} required />


            <button type="submit" className={style['btn-submit']} onClick={this.handleSubmit}>Activate now</button>
          </Form>


        </div>
      </div>
    )
  }
}

export default withRouter(NewPass)