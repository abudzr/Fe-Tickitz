import { React, Fragment, UseEffect, useState } from 'react'
import { NavigationUser, PageAdmin, Footers } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { login } from '../../../configs/redux/action/user'
import Loader from '../../../assets/img/loader.gif';
import Swal from 'sweetalert2'

export default function AdminPage() {

    return (
        <Fragment>
            <NavigationUser />
            <PageAdmin
            />
            <Footers />
        </Fragment>
    )
}

