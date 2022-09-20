import React, { useEffect, useState } from 'react'
import './TopPics.scss'

import NavBar from '../../components/NavBar/NavBar'
import { getTopPicsForYou } from '../../api'
import { Pagination } from 'react-bootstrap'

export default function TopPics() {

    const [topPics, setTopPics] = useState()
    const [pagination, setPagination] = useState({ pageNumber: 1, pageLength: 5 })

    useEffect(() => {
        async function asyncFunction() {
            const response = await getTopPicsForYou(pagination.pageNumber, pagination.pageLength)
            console.log(response.data)
            setTopPics(response.data)
        }
        asyncFunction()
    }, [])

    return (
        <div className='TopPics'>
            <NavBar currPage={"Top pics for you"} />
            <div className='TopPics_content'>

            </div>
        </div>
    )
}