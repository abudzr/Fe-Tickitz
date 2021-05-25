import React, { Fragment, useState, useEffect } from 'react'
import style from './card.module.css'
import { Card, Container, Form, Dropdown } from 'react-bootstrap';
import Button from '../Button'

import Swal from "sweetalert2";
import { useDispatch } from 'react-redux'
import { createMovie } from '../../configs/redux/action/movie'
// const changeTimeMovie = (time) => {
//     return Moment(time).format("YYYY-MM-DD");
// }
import Image from '../../assets/img/Avengers.jpg'
import axiosApiInstance from '../../helper/axios';


export default function PageAdmin() {
    const dispatch = useDispatch()
    const [location, setLocation] = useState("")
    const [cinema, setCinema] = useState([])
    console.log(cinema);
    const [activeBtn, setActiveBtn] = useState("");
    const [detailCinema, setDetailCinema] = useState(null)
    const [data, setData] = useState({
        movieName: '',
        releaseDate: '',
        directedBy: '',
        duration: '',
        casts: '',
        synopsis: '',
        idGenre: ''
    });
    const [genre, setGenre] = useState("")
    const [dataImage, setDataImage] = useState({
        image: {},
    });

    const [input, setInput] = useState();
    const [imgUrl, setImgUrl] = useState(Image);
    const hiddenFileInput = React.useRef(null);

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    }
    const handleChange = (e) => {
        const dataNew = { ...data };
        const target = e.target
        const value = target.value
        const name = target.name
        dataNew[name] = value;
        setData(dataNew);
    }
    const handleGenre = (e) => {
        setData({
            ...data,
            idGenre: e.target.id
        })
        setGenre(e.target.name)

    };
    const handleChangePicture = (e) => {
        setInput(e.target.files[0].name);
        setImgUrl(URL.createObjectURL(e.target.files[0]));
        setDataImage({
            image: e.target.files[0],
        });
    }
    const handleLocation = (e) => {
        setLocation(e.target.name)
    };

    const handleCinemas = (e) => {
        setDetailCinema(e)
        console.log(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("movieName", data.movieName);
        formData.append("releaseDate", data.releaseDate);
        formData.append("directedBy", data.directedBy);
        formData.append("duration", data.duration);
        formData.append("casts", data.casts);
        formData.append("synopsis", data.synopsis);
        formData.append("image", dataImage.image);
        formData.append("idGenre", data.idGenre);

        dispatch(createMovie(formData))
            .then((res) => {
                Swal.fire("", "Movie successfully created", "success")
            })
            .catch((err) => {
                Swal.fire("", "Failed to create Movie", "error");
            })
    }

    useEffect(() => {
        axiosApiInstance.get(`${process.env.REACT_APP_API_RESTAPI}cinemas`).then((res) => {
            setCinema(res.data.data)
            // console.log(res.data.data);
        })
    }, [])

    return (
        <Fragment>
            <div className={style['cards-profile']}>
                <div className="container">
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <p className={style['title-admin']}>Movie Description</p>
                            <div className={style['info-profile']}>
                                <div className={style['form-img-admin']}>
                                    <Card className={style['card-detail-movie']}>
                                        <Container>
                                            <Card.Img className={style['card-img-detail-movie']} src={imgUrl} />
                                            <Button title="Insert Picture" btn="btn-insert-picture" color="white" onClick={handleClick} />
                                            <input type="file"
                                                ref={hiddenFileInput}
                                                onChange={handleChangePicture}
                                                style={{ display: 'none' }}
                                            />
                                        </Container>
                                    </Card>

                                    <Form className={style['form-admin']}>
                                        <label htmlFor="movieName">Movie Name</label><br />
                                        <input className={style['form-movie']} id="movieName" type="text" name="movieName" value={data.movieName} placeholder="Input Here" onChange={handleChange} />

                                        <label htmlFor="idGenre">Category</label><br />
                                        <Dropdown className={style['form-movie']} >
                                            <Dropdown.Toggle className={style['button-location']} id="idGenre" value={genre}>
                                                {genre === "" ? "Genre" : genre}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={handleGenre} id="1" name="Crime" >Crime</Dropdown.Item>
                                                <Dropdown.Item onClick={handleGenre} id="2" name="Drama">Drama</Dropdown.Item>
                                                <Dropdown.Item onClick={handleGenre} id="3" name="Action">Action</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* <input className={style['form-movie']} id="idGenre" name="idGenre" type="text" value={data.idGenre} placeholder="Input Here" onChange={handleChange} /> */}

                                        <div className={style['position-datetime']}>
                                            <label htmlFor="releaseDate">Release Date</label><br />
                                            {/* <Moment format='MMMM Do YYYY' > */}

                                            <input className={style['form-release']} id="releaseDate" name="releaseDate" type="date" value={data.releaseDate} placeholder="Input Here" onChange={handleChange} />
                                            {/* </Moment> */}
                                            <label className={style.duration} htmlFor="duration">Duration</label><br />
                                            <input className={style['form-release']} id="duration" name="duration" type="text" value={data.duration} placeholder="Input Here" onChange={handleChange} />

                                        </div>
                                    </Form>

                                </div>
                                <div className={style['form-img-admin']}>
                                    <Form className={style['form-admin-director']}>
                                        <label htmlFor="directedBy">Director</label><br />
                                        <input className={style['input-director']} id="directedBy" name="directedBy" type="text" value={data.directedBy} placeholder="Input Here" onChange={handleChange} />
                                    </Form>
                                    <Form className={style['form-admin-casts']}>
                                        <label htmlFor="casts">Casts</label><br />
                                        <input className={style['input-casts']} id="casts" name="casts" type="text" value={data.casts} placeholder="Input Here" onChange={handleChange} />
                                    </Form>
                                </div>
                                <label htmlFor="synopsis">Synopsis</label><br />
                                <input className={style['input-synopsis']} id="synopsis" name="synopsis" type="text" value={data.synopsis} placeholder="Input Here" onChange={handleChange} />
                            </div>
                            <Button title="Create" type="submit" btn="btn-update" color="yellow" onClick={handleSubmit} />
                        </div>
                        <div class="col-12 col-lg-4">
                            <p className={style['title-admin']}>Premiere Location</p>
                            <div className={style['info-profile-right']}>
                                <div  >
                                    <Dropdown className={style['dropdown-location']} >
                                        <i className="fab fas fa-map-marker-alt" id={style.marker} />
                                        <Dropdown.Toggle className={style['button-location']} id="dropdown-basic" value={location}>
                                            {location === "" ? "Location" : location}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={handleLocation} name="Jakarta" >Jakarta</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLocation} name="Bandung">Bandung</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLocation} name="Purwokerto">Purwokerto</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="row flex-wrap mt-4 pb-4 pt-2" id={style['admin-img-right']}>
                                    {cinema.map((item, index) => {
                                        return (
                                            <img className={`${activeBtn === `cinemas-${item.idCinemas}` ? style['img-admin-active'] : style['img-admin']}`} src={`${process.env.REACT_APP_API_RESTAPI}${item.image}`} alt="adminimg"
                                                onClick={(e) => {
                                                    handleCinemas(item)
                                                    setActiveBtn(`cinemas-${item.idCinemas}`);
                                                }
                                                }
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* <Button title="Previous Step" btn="btn-change-order" color="white" onClick={this.handleBack} />
                            <Button title="Pay Your Order" btn="btn-checkout" color="purple" onClick={this.handleLogin} /> */}
                    </div>
                </div>
            </div>


        </Fragment >
    )
}
