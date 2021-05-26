import React, { Fragment, useState, useEffect } from 'react'
import { Footers, NavigationUser, SearchMovie, Navigation } from '../../../components'
import { Container } from 'react-bootstrap';
import style from './home.module.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function Movie() {
    const history = useHistory();
    const [data, setData] = useState([])
    const [result, setResult] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);
    let [search, setSearch] = useState("");
    let [queryLimit, setQueryLimit] = useState("4");
    let [queryOrder, setQueryOrder] = useState("asc");
    let [querySort, setQuerySort] = useState("movieName");

    const sort = [
        {
            label: "Movie Name",
            value: "movieName",
        },
        {
            label: "Genre",
            value: "genre",
        },
        {
            label: "Directed By",
            value: "directedBy",
        },
        {
            label: "Release Date",
            value: "releaseDate",
        },

    ];
    const order = [
        {
            label: "Ascending",
            value: "ASC",
        },
        {
            label: "Descending",
            value: "DESC",
        },
    ];
    const limit = [
        {
            label: "Limit 2",
            value: "2",
        },
        {
            label: "Limit 4",
            value: "4",
        },
        {
            label: "Limit 5",
            value: "5",
        },
        {
            label: "Limit 10",
            value: "10",
        },
    ];


    useEffect(() => {
        const url = `${process.env.REACT_APP_API_RESTAPI}movies?page=${page}&limit=${queryLimit}&sort=${querySort}&order=${queryOrder}&search=${search}`;
        axios.get(url)
            .then((res) => {
                console.log(res.data);
                setData(res.data.data)
                setTotalPage(res.data.pageInfo.totalPage)
                setCurrentPage(res.data.pageInfo.currentPage)
            })
    }, [page, queryLimit, queryOrder, querySort, search]);


    const handleDetail = (data) => {
        history.push(`/movie/${data}`)
    }

    const handleChange = (e) => {
        setSearch(e.target.name = e.target.value)
    }
    const handleClickPage = (index) => {
        setPage(index + 1);
    };
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setResult(true)
        } else {
            setResult(false)
        }
    }, []); // eslint-disable-next-line
    return (
        <Fragment>
            {result === false ?
                <Navigation />
                :
                <NavigationUser />
            }
            <div className={style.container}>
                {/*Search Input*/}
                <label className={style['search-label']} htmlFor="search-input">
                    <input
                        type="text"
                        value={search}
                        name="search"
                        id="search-input"
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                    <i className="fa fa-search search-icon" />
                </label>
            </div>


            <Container className={style['up-coming']}>

                <div className="row mt-4 pb-4 pt-2" id={style.card} >
                    {data.map(data => {
                        return (
                            <div className="col-6 col-lg-3" key={data.idMovie}>
                                <SearchMovie
                                    data={data}
                                    detail={handleDetail}
                                />
                            </div>
                        )
                    })
                    }
                </div>
                {/* Paginasi */}
                <div className="row pl-2 pl-lg-0 mt-5">
                    <div className="col-12 d-flex justify-content-center">
                        {parseInt(totalPage) > 1 ? (
                            <Pagination aria-label="Page navigation example">
                                <PaginationItem>
                                    <PaginationLink first onClick={(e) => setPage(1)} />
                                </PaginationItem>
                                {Array.from(Array(totalPage).keys()).map((data, index) => {
                                    return (
                                        <PaginationItem active={currentPage === index + 1}>
                                            <PaginationLink onClick={(e) => handleClickPage(index)}>
                                                {index + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    );
                                })}
                                <PaginationItem>
                                    <PaginationLink
                                        last
                                        onClick={(e) => setPage(totalPage)}
                                    />
                                </PaginationItem>
                            </Pagination>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                {/* Akhir Pagnisai */}
                {/* awal sorting */}
                <div className="row mt-5 ml-1 mr-1 justify-content-center">
                    <div className="col-4">
                        <select
                            onChange={(event) => setQuerySort(event.target.value)}
                            className="w-100 custom-select font-weight-normal"
                        >
                            {sort.map((item, index) => {
                                return (
                                    <option value={item.value} key={index}>
                                        {item.label}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col-4">
                        <select
                            onChange={(event) => {
                                setQueryOrder(event.target.value);
                            }}
                            className="w-100 custom-select"
                        >
                            {order.map((item, index) => {
                                return (
                                    <option value={item.value} key={index}>
                                        {item.label}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col-4">
                        <select
                            onChange={(event) => {
                                setQueryLimit(event.target.value);
                            }}
                            className="w-100 custom-select"
                        >
                            {limit.map((item, index) => {
                                return (
                                    <option value={item.value} key={index}>
                                        {item.label}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                {/* akkhir sorting */}

            </Container>

            <Footers />
        </Fragment>
    )
}

export default Movie