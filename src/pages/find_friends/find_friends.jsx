import React from 'react'
import './find_friends.scss'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import SearchFriends from '../../components/_pages/FindFriends/SearchFriends/SearchFriends'
import DisplayFriends from '../../components/_pages/FindFriends/DisplayFriends/DisplayFriends'

export default function FindFriends() {
    return (
        <div className='FindFriends grid'>
            <Header />
            <NavBar currPage={'Find friends'} />
            <div className='findFriends_content'>
                <SearchFriends />
                <DisplayFriends />
            </div>
        </div>
    )
}