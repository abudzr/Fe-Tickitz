import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from "react-redux";
import { getListSeat } from "../../configs/redux/action/showtimes"

const SeatMobile = (props) => {
    const dispatch = useDispatch();
    const { order } = useSelector((state) => state.order); // eslint-disable-next-line
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [ordered, setOrdered] = useState([])
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    const checkSeatStatus = (val) => {
        if (checkIsChecked(val)) {
            return 'seat-mobile selected';
        } else {
            if (checkIsActive(val)) {
                return 'seat-mobile sold';
            } else {
                return 'seat-mobile';
            }
        }
    }

    const checkIsActive = (val) => {
        if (ordered.includes(val)) {
            return true;
        }
        return false;
    }

    const checkIsChecked = (val) => {
        if (selectedSeat.includes(val)) {
            return true;
        } else {
            return false;
        }
    }

    const handleSelectSeat = (val, newseat = '', type) => {
        // console.log('newset', newseat)
        if (newseat !== "null") {
            if (selectedSeat.includes(val)) {
                let index = selectedSeat.indexOf(val);
                if (type === "row") {
                    selectedSeat[index] = newseat + val.substring(1);
                } else {
                    selectedSeat[index] = val.substring(0, 1) + newseat;
                }
            } else {
                selectedSeat.push(newseat)
            }
            console.log(selectedSeat)
        } else {
            let index = selectedSeat.indexOf(val);
            if (index !== -1) {
                selectedSeat.splice(index, 1);
            }
        }
        setSelectedSeat([...selectedSeat])
        props.changeSeat(selectedSeat);
    }

    const SeatComp = ({ isActive, val }) => {
        return <button disabled={isActive} className={checkSeatStatus(val)}></button>
    }

    const RenderSeat = ({ start, end }) => {
        let result = [];
        rows.forEach((el, idx) => {
            let seat = [];
            for (let i = start; i <= end; i++) {
                seat.push(<SeatComp key={el + i} isActive={checkIsActive(el + i)} val={el + i} />)

            }
            result.push(
                <div className="row">
                    <div className="col-sm-12 seat-col">
                        {seat}
                    </div>
                </div>
            )
        })
        return result;
    }

    const seatNumber = [];
    for (var i = 1; i <= 14; i++) {
        seatNumber.push(<option key={i}>{i}</option>)
    }

    useEffect(() => {
        dispatch(getListSeat(order.showtime.id)) // eslint-disable-next-line
            .then((res) => {
                if (res.length > 1) {
                    setOrdered(res)
                } else {
                    setOrdered([])
                }
            })
            .catch((err) => {
                setOrdered([])
            })
    }, [dispatch, order.showtime.id]) // eslint-disable-next-line

    return (
        <>
            <div className="card seat-list-mobile">
                <div className="card-body">
                    <div className="divider-mobile mb-3"></div>
                    <div className="row seat-wrapper-mobile">
                        <div className="col-6 first">
                            <RenderSeat start={1} end={7} />
                            <hr className="divider-bottom" />
                        </div>
                        <div className="col-6 second">
                            <RenderSeat start={8} end={14} />
                            <hr className="divider-bottom" />
                        </div>
                    </div>
                    <h6 className="my-3">Seating key</h6>
                    <div className="row seating-key-mobile">
                        <div className="col-6">
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.834 9.9021L7.00065 15.4997L1.16732 9.9021" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <line x1="6.80664" y1="14.2776" x2="6.80664" y2="1.50003" stroke="#14142B" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <span>A - G</span>
                        </div>
                        <div className="col-6">
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.90234 1.16675L15.4999 7.00008L9.90234 12.8334" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <line x1="14.2773" y1="7.19312" x2="1.49979" y2="7.19312" stroke="#14142B" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <span>1 - 14</span>
                        </div>
                        <div className="col-6">
                            <div className="seat-mobile"></div>
                            <span>Available</span>
                        </div>
                        <div className="col-6">
                            <div className="seat-mobile selected"></div>
                            <span>Selected</span>
                        </div>
                        <div className="col-6">
                            <div className="seat-mobile love"></div>
                            <span>Love nest</span>
                        </div>
                        <div className="col-6">
                            <div className="seat-mobile sold"></div>
                            <span>Sold</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card select-seat mt-5">
                <div className="card-body">
                    {
                        selectedSeat.map((el, idx) => {
                            return (
                                <div key={idx} className="card select-item mb-2">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <select value={el.substring(0, 1)} onChange={(e) => { handleSelectSeat(el, e.target.value, 'row') }}>
                                                    <option value="null"></option>
                                                    {
                                                        rows.map((el, index) => {
                                                            return <option key={index} value={el} >{el}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <select value={el.substring(1)} onChange={(e) => { handleSelectSeat(el, e.target.value, 'col') }}>
                                                    <option value="null"></option>
                                                    {seatNumber}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button className="btn-add-seat mt-2" onClick={() => { setSelectedSeat([...selectedSeat, ""]) }}>Add new seat</button>
                </div>
            </div>
        </>
    )
}

export default SeatMobile;