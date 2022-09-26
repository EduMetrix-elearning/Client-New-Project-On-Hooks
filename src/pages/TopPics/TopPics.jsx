import React, { useEffect, useState } from 'react'
import './TopPics.scss'

import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Suggestions from '../../components/Suggestions/Suggestions'

import { getTopPicsForYou } from '../../api'

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
        <div className='TopPics grid'>
            <Header />
            <NavBar currPage={"Top pics for you"} />

            <div className='TopPics_body'>
                <div className="TopPics_content">
                    <div className="center_platform">
                        {topPics &&
                            topPics.map((topPic) => {
                                return (
                                    <div className='TopPic_element'>
                                        <img src={topPic.adminPicture_uploaded} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
            <Suggestions />
        </div>
    )
}