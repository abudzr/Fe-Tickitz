import React, { Fragment, useState, useEffect, useRef } from 'react'
import style from './card.module.css'
import { Card, Nav, Form } from 'react-bootstrap';
import Button from '../Button'
import { withRouter } from "react-router-dom";
import star from "../../assets/img/Vector.png";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { getUserByid } from "../../configs/redux/action/user"

const CardsProfile = (props) => {
    const id = localStorage.getItem('id')
    const ImgUrl = process.env.REACT_APP_API_RESTAPI
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const history = useHistory()
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    });
    const [dataImage, setDataImage] = useState({
        image: {},
    });
    const [imgUrl, setImgUrl] = useState(`${ImgUrl}${user[0].image}`);
    const [isPasswordShow, setisPasswordShow] = useState(false)
    const [isPasswordShow2, setisPasswordShow2] = useState(false)

    const tooglePasswordVisibility = (e) => {
        e.preventDefault();
        setisPasswordShow(!isPasswordShow);
    }

    const tooglePasswordVisibility2 = (e) => {
        e.preventDefault();
        setisPasswordShow2(!isPasswordShow2);
    }

    const hiddenFileInput = useRef(null);
    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };
    const handleHistory = (e) => {
        e.preventDefault()
        history.push('/history')
    }

    const handleChangePicture = (event) => {
        setDataImage({
            image: event.target.files[0],
        });
        setImgUrl(URL.createObjectURL(event.target.files[0]));
    };

    const handleChange = (event) => {
        const userNew = { ...data };
        userNew[event.target.name] = event.target.value;
        setData(userNew);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("phone", data.phone);
        formData.append("image", dataImage.image);

        const url = `${process.env.REACT_APP_API_RESTAPI}users/${id}`
        axios.patch(url, formData)
            .then((res) => {
                Swal.fire("Update Profile Success!", "", "success");
            }, (err) => {
                if (err) {
                    Swal.fire(" ERROR!!!", "Update Failed", "error");
                }
            })
    }

    useEffect(() => {
        dispatch(getUserByid(id)).then((res) => {
            setData(res[0]);
        })
        setImgUrl(`${ImgUrl}${user[0].image}`);
    }, [dispatch, ImgUrl, id, user[0].image]);

    return (
        <Fragment>
            <div className={style['cards-profile']}>
                <div className="container">
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <div className={style['info-profile']}>
                                <div className={style['info-title-profile']}>
                                    <h2 className={style['title-info']}>Info</h2>
                                    <div class={style.circle}></div>
                                    <div class={style.circle}></div>
                                    <div class={style.circle}></div>
                                </div>
                                <div className={style['big-circle']}>

                                    <img class={style['img-user']} src={imgUrl} alt="user" />
                                    <Button title="Update" btn="btn-change-picture" color="white" onClick={handleClick} />
                                    <input type="file"
                                        ref={hiddenFileInput}
                                        onChange={(event) => handleChangePicture(event)}
                                        style={{ display: 'none' }}
                                    />
                                </div>


                                <h2 className={style['name-profile']}>{`${data.firstName} ${data.lastName}`}</h2>
                                <p className={style.job}>Moviegoers</p>
                                <hr />

                                <h2 className={style['loyalty-point']}>Loyalty Points</h2>
                                <div className={style.square}>
                                    <p className={style['loyalty-title']}>Moviegoers</p>
                                    <p className={style.point}>320 <span>point</span></p>
                                </div>
                                <div class={style['circle-loyalty']}></div>
                                <div class={style['circle-loyalty2']}></div>
                                <div className={style.star}>
                                    <img src={star} alt="star" />
                                </div>

                                <p className={style['loyalty-subtitle']}>180 points become a master</p>
                                <div class="progress " id={style.progress}>
                                    <div class="progress-bar w-50" id={style['progress-bar']} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </div>

                        </div>
                        <div class="col-12 col-lg-8">
                            <div className={style['info-profile-right']}>
                                <Card className={style['card-account']}>
                                    <Card.Header>
                                        <Nav variant="tabs" defaultActiveKey="#first">
                                            <Nav.Item>
                                                <Nav.Link href="#first">Account Settings</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="#" onClick={handleHistory}>Order History</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body  >
                                        <Card.Title className={style['detail-title']} id="#first" >Details Information</Card.Title>
                                        <hr />

                                        <div className={style['form-profile']}>
                                            <Form className={style['form-profile-firstname']}>
                                                <label htmlFor="firstName">First Name</label><br />
                                                <input className={style['input-firstname']} id="firstName" name="firstName" type="text" value={data.firstName === null ? "Input your firstname" : data.firstName} placeholder="Input Your FirstName" onChange={handleChange} />
                                            </Form>
                                            <Form className={style['form-profile-lastName']}>
                                                <label htmlFor="lastName">Last Name</label><br />
                                                <input className={style['input-lastName']} id="lastName" name="lastName" type="text" value={data.lastName === null ? "Input your lastname" : data.lastName} placeholder="Input your lastname" onChange={handleChange} />
                                            </Form>
                                        </div>
                                        <div className={style['form-profile']}>
                                            <Form className={style['form-profile-email']}>
                                                <label htmlFor="email">Email</label><br />
                                                <input className={style['input-email']} id="email" name="email" type="text" value={data.email} placeholder="Input Your Email" onChange={handleChange} />
                                            </Form>
                                            <Form className={style['form-profile-phone']}>
                                                <label htmlFor="phone">Phone Number</label><br />
                                                <input className={style['input-phone']} id="phone" name="phone" type="text" value={data.phone} placeholder="Input Your phone number" onChange={handleChange} />
                                            </Form>
                                        </div>

                                        <Card.Title className={style['detail-title2']}>Account and Privacy</Card.Title>
                                        <hr />
                                        <div className={style['form-profile']}>
                                            <Form className={style['form-profile-password']}>
                                                <label htmlFor="password">New Password</label><br />
                                                <input className={style['input-password']} id="password" name="password"
                                                    type={(isPasswordShow) ? "text" : "password"} placeholder="Write your password" onChange={handleChange} />
                                                <i className={`fa ${isPasswordShow ? "fa-eye-slash" : "fa-eye"}  password-icon`} onClick={tooglePasswordVisibility} />

                                            </Form>
                                            <Form className={style['form-profile-passwords']}>
                                                <label htmlFor="password">Confirm your password</label><br />
                                                <input className={style['input-password']} id="confirmPassword" name="password"
                                                    type={(isPasswordShow2) ? "text" : "password"} placeholder="Confirm your password" onChange={handleChange} />
                                                <i className={`fa ${isPasswordShow2 ? "fa-eye-slash" : "fa-eye"}  password-icon`} onClick={tooglePasswordVisibility2} />
                                            </Form>
                                        </div>
                                        <div className="d-flex flex-wrap">
                                            <Button title="Update changes" type="submit" btn="btn-update-changes" color="purple" onClick={handleUpdate} />
                                            {user.role === 1 &&
                                                <Button title="Insert Movie" type="submit" btn="btn-update-changes" color="yellow" onClick={handleUpdate} />
                                            }

                                        </div>

                                    </Card.Body>



                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </Fragment>
    )
}


export default withRouter(CardsProfile);