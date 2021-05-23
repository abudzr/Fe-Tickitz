import React, { useEffect, useState } from 'react'
import style from './showtime.module.css'
import { Container, Dropdown } from 'react-bootstrap';
import Button from '../Button'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { listShowtime } from '../../configs/redux/action/showtimes'
import axios from 'axios'

function CardShowtimes(match) {
    const history = useHistory();
    const dispatch = useDispatch();
    // const { showtimes } = useSelector((state) => state.showtimes);
    const [data, setData] = useState(null);
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [time, setTime] = useState([])
    const [movie, setMovie] = useState([])
    const [activeBtn, setActiveBtn] = useState("");

    const handleDate = (e) => {
        setDate(e.target.value)
    }
    const handleLocation = (e) => {
        setLocation(e.target.name)

    };
    const handleBook = (e) => {
        dispatch({
            type: "ADD_ORDER", payload: {
                movie: movie,
                showtime: time,
                cinema: e
            }
        })
        history.push('/order')
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

    useEffect(() => {
        dispatch(listShowtime({
            idMovie: match.match.params.idMovie,
            search: location,
            date: date
        })).then((res) => {
            setData(res)
        }).catch((err) => {
            setData(null)
        })
    }, [match, location, date])

    return (
        <>
            <Container className={style.showTimes}>
                <p class={style["title-show"]}>Showtimes and Tickets</p>
                <div class={style["dropdown-show"]}>
                    <div class={style["dropdown-showTimes"]}>
                        <input className={style["dropdown-showTimes"]} type="date" value={date} onChange={handleDate} />

                    </div>
                    <div>
                        <Dropdown className={style['dropdown-location']} >
                            <i class="fab fas fa-map-marker-alt" id={style.marker} ></i>
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
                            <h1>sorry, schedule is not available</h1>
                        </div>
                    </>
                }
                {data !== null &&
                    <>
                        <div className={style.schedule} >
                            <div className="container">
                                <div class="row">
                                    {data.map((item, index) => {
                                        return (
                                            <div class={style['card-schedule-special']} key={index}>
                                                <div class={style['title-schedule']}>
                                                    <div class={style['title-img']}>
                                                        <img class={style['card-img-schedule']} src={`${process.env.REACT_APP_API_RESTAPI}${item.image}`} alt="schedule" />
                                                    </div>
                                                    <div class={style['sub-title-schedule']}>
                                                        <p class={style.title}>{item.name}</p>
                                                        <p class={style['sub-title']}>{item.address}</p>
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