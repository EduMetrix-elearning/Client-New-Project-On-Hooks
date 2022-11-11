import React, { useEffect, useState } from 'react'
import './TopPics.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Suggestions from '../../components/_pages/Home/Suggestions/Suggestions'

import { getTopPicsForYou } from '../../api'
import Grid from '../../components/_pages/TopPics/Grid/Grid'

export default function TopPics() {

    const [topPics, setTopPics] = useState()
    const [pagination, setPagination] = useState({ pageNumber: 1, pageLength: 5 })

    useEffect(() => {
        async function asyncFunction() {
            const response = await getTopPicsForYou(pagination.pageNumber, pagination.pageLength)
            setTopPics(response.data.data)
        }
        asyncFunction()
    }, [])

    return (
        <div className='TopPics'>

            <header>
                <Header />
            </header>
            <main>
                <div className='TopPics_body'>
                    <div className="TopPics_content">
                        {topPics && <Grid items={topPics} />}
                    </div>
                </div>
            </main>

            <NavBar currPage={"Top pics for you"} />
            <Suggestions />
        </div>
    )
}