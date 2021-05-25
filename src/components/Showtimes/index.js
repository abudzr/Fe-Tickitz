import React, { useEffect, useState } from 'react'
import style from './showtime.module.css'
import { Container, Dropdown } from 'react-bootstrap';
import Button from '../Button'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { listShowtime } from '../../configs/redux/action/showtimes'
import axios from 'axios'
import Swal from 'sweetalert2'

function CardShowtimes(match) {
    const history = useHistory();
    const dispatch = useDispatch(); // eslint-disable-next-line
    // const { showtimes } = useSelector((state) => state.showtimes);
    const [data, setData] = useState(null);
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [time, setTime] = useState([])
    // console.log(Object.keys(time).length);
    const [movie, setMovie] = useState([])
    const [activeBtn, setActiveBtn] = useState("");

    const handleDate = (e) => {
        setDate(e.target.value)
    }
    const handleLocation = (e) => {
        setLocation(e.target.name)

    };
    const handleBook = (e) => {
        if (localStorage.getItem("token")) {
            if (Object.keys(time).length > 0) {
                dispatch({
                    type: "ADD_ORDER", payload: {
                        movie: movie,
                        showtime: time,
                        cinema: e
                    }
                })
                history.push('/order')
            } else {
                Swal.fire("Info", "please select the movie time", "info")
            }
        } else {
            Swal.fire("Info", "login first, before continuing", "info")
        }
    };
    const handleClickTime = (e) => {
        setTime(e)
    }

    useEffect(() => {
        const url = process.env.REACT_APP_API_RESTAPI;
        axios.get(`${url}movies/${match.match.params.idMovie}`)
            .then((res) => {
                setMovie(res.data.data)
            })
    }, [match])

    useEffect(() => { // eslint-disable-next-line
        dispatch(listShowtime({
            idMovie: match.match.params.idMovie,
            search: location,
            date: date
        })).then((res) => {
            setData(res)
        }).catch((err) => {
            setData(null)
        })
    }, [dispatch, match, location, date]) // eslint-disable-next-line

    return (
        <>
            <Container className={style.showTimes}>
                <p className={style["title-show"]}>Showtimes and Tickets</p>
                <div className={style["dropdown-show"]}>
                    <div className={style["dropdown-showTimes"]}>
                        <input className={style["dropdown-showTimes"]} type="date" value={date} onChange={handleDate} />

                    </div>
                    <div>
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
                </div>
                {data === null &&
                    <>
                        <div>
                            <h1 className="mt-5">sorry, schedule is not available</h1>
                        </div>
                    </>
                }
                {data !== null &&
                    <>
                        <div className={style.schedule} >
                            <div className="container">
                                <div className="row">
                                    {data.map((item, index) => {
                                        return (
                                            <div className={style['card-schedule-special']} key={index}>
                                                <div className={style['title-schedule']}>
                                                    <div className={style['title-img']}>
                                                        <img className={style['card-img-schedule']} src={`${process.env.REACT_APP_API_RESTAPI}${item.image}`} alt="schedule" />
                                                    </div>
                                                    <div className={style['sub-title-schedule']}>
                                                        <p className={style.title}>{item.name}</p>
                                                        <p className={style['sub-title']}>{item.address}</p>
                                                    </div>
                                                </div>
                                                <hr className={style['line-hr']}></hr>
                                                <div className="d-flex flex-wrap">
                                                    {item.showtime.map((itemShowtime, index) =>
                                                        <div className={style['sub-detail-date']} key={index}>
                                                            <p className={`${activeBtn === `time${itemShowtime.id}`
                                                                ? style['title-date-active']
                                                                : style['title-date']
                                                                }`}
                                                                onClick={(e) => {
                                                                    handleClickTime({ id: itemShowtime.id, time: itemShowtime.showtime, date: itemShowtime.showtimeDate })
                                                                    setActiveBtn(`time${itemShowtime.id}`);
                                                                }}
                                                            >{itemShowtime.showtime}</p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className={style['detail-price']}>
                                                    <div className={style['sub-detail-price']}>
                                                        <p className={style['text-price']}>Price</p>
                                                    </div>
                                                    <div className={style['sub-detail-price']}>
                                                        <p className={style['text-price1']}>IDR{item.price}/seat</p>
                                                    </div>
                                                </div>
                                                <div className={style['detail-booking']}>
                                                    <Button title="Book Now" btn="btn-schedule" color="purple"
                                                        onClick={(e) => {
                                                            handleBook({ idCinemas: item.id, name: item.name, image: item.image, price: item.price })
                                                        }} />
                                                    <p className={style['text-booking']}>Add to cart</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </Container>
        </>
    )
}

export default CardShowtimes