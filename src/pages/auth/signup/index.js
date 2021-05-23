import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './signup.module.css'
import Swal from 'sweetalert2'
import Tickitz from "../../../assets/img/tickitz.png";
import Tickitz1 from "../../../assets/img/Tickitz1.png";
import google from "../../../assets/img/google2.png";
import fb from "../../../assets/img/fb.png";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from '../../../configs/redux/action/user'

function Signup(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!")
    }),
    onSubmit: values => {
      if (agree) {
        setLoading(true)
        dispatch(signUp(values))
          .then((res) => {
            setLoading(false)
            Swal.fire({
              title: "Success!",
              text: res.data.message,
              icon: "success",
              confirmButtonText: "Ok",
              confirmButtonColor: "#ffba33",
            }).then((result) => {
              if (result.isConfirmed) {
                history.push("/signin");
              } else {
                history.push("/signin");
              }
            });
          })
          .catch((err) => {
            setLoading(false)
            Swal.fire({
              title: "Signup Error!",
              text: err.response.data.message,
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: "#6a4029",
            });
          });
      } else {
        Swal.fire("Sorry!", "You Must Agree to Terms & Conditions", "warning");
      }
    }
  });

  const tooglePasswordVisibility = () => {
    setIsPasswordShow(!isPasswordShow)

  }
  const termsValidation = () => {
    setAgree(!agree)
  }

  return (
    <div className={style.main}>
      <div className={style['main-left']}>
        <img src={Tickitz} className={style['img-title-left']} alt="img" />
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
        <img src={Tickitz1} className={style['img-title-mobile']} alt="img-mobile" />
        <h2 className={style['text-title-right']}>Fill your additional details</h2>
        <h2 className={style['text-title-right1']}>Sign Up</h2>


        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" placeholder="Write Your Email" value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error" style={{ color: "red" }}>{formik.errors.email}</p>
          )}
          <div className={style['form-group']}>
            <label htmlFor="password">Password</label>
            <input className={style['form-control']} id="password" name="password" autoComplete="off"
              type={(isPasswordShow) ? "text" : "password"} placeholder="Write your password" value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error" style={{ color: "red" }}>{formik.errors.password}</p>
            )}
            <i className={`fa ${isPasswordShow ? "fa-eye-slash" : "fa-eye"}  password-icon`} onClick={tooglePasswordVisibility} />
          </div>
          <input className={style.terms} type="checkbox" id="agree"
            onClick={termsValidation} />
          <label className={style['text-term']}>I agree to terms & conditions</label>
          <button type="submit" className={style['btn-submit']}>{loading ? "loading..." : "Join for free now"}</button>
        </form>

        <p className={style['text-forgot']}> Do you already have an account? <Link to="/signin">Log in</Link></p>
        <div className={style.or}>
          <hr></hr>
          <p className={style['text-or']}>or</p>
          <hr></hr>
        </div>
        <div className={style.btn}>
          <div className={style['btn-google']}>
            <img src={google} alt="btn-google" />
            <p className={style['text-btn']}>Google</p>
          </div>
          <div className={style['btn-fb']}>
            <img src={fb} alt="btn-fb" />
            <p className={style['text-btn']}>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup