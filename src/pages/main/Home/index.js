import React, { Fragment, useEffect, useState } from 'react'
import { NavigationUser, HeaderHome, Footers, CardEmail, Navigation } from '../../../components'
import NowShowingPart from '../../../parts/NowShowing/NowShowing'
import UpComingPart from '../../../parts/upComing/UpComing'

import { Container } from 'react-bootstrap';

function Home() {
    const [result, setResult] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setResult(true)
        } else {
            setResult(false)
        }
    }, []);

    return (
        <Fragment>
            {result === false ?
                <Navigation />
                :
                <NavigationUser />
            }
            <HeaderHome />
            <NowShowingPart />
            <UpComingPart />

            <Container>
                <CardEmail
                    title='Be the vanguard of the'
                    subTitle='By joining you as a Tickitz member,
                        we will always send you the latest updates via email .'
                />

            </Container>
            <Footers />
        </Fragment>
    )
}

export default Home