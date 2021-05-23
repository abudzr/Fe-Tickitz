import React, { useState, useEffect } from 'react'
import style from './forgot.module.css'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router';
import Tickitz from "../../../assets/img/tickitz.png";
import Tickitz1 from "../../../assets/img/Tickitz1.png";
import { useDispatch } from "react-redux";
import { reset } from "../../../configs/redux/action/user";
import * as Yup from 'yup';
import { useFormik } from "formik";

function NewPass({ match, history }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [token, setToken] = useState("")
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: values => {
      setLoadingUpdate(true)
      dispatch(reset(email, token, values))
        .then((res) => {
          setLoadingUpdate(false)
          Swal.fire({
            title: "Success!",
            text: res,
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
          setLoadingUpdate(false)
          Swal.fire({
            title: "Error!",
            text: err,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6a4029",
          });
        });
    }
  });


  useEffect(() => {
    const urlEmail = match.params.email
    const urlToken = match.params.token
    setEmail(urlEmail);
    setToken(urlToken)
  }, [match])

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

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="password">New Password</label>
          <input id="password" type="text" name="password" placeholder="Write Your New Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="error" style={{ color: "red" }}>{formik.errors.password}</p>
          )}

          <button type="submit" className={style['btn-submit']} >{loadingUpdate ? "...loading" : "Activate now"}</button>
        </form>


      </div>
    </div>
  )
}

export default withRouter(NewPass)