import React from 'react'
import './SearchFriends.scss'

export default function SearchFriends() {
    return (
        <div className='SearchFriends'>
            <div className='student_search'>
                <input type="text" placeholder='Enter student name' />
            </div>
            <div className="other_search">
                <input type="text" placeholder='country' />
                <input type="text" placeholder='university' />
                <input type="text" placeholder='college' />
                <button><i className='fas fa-filter' /> Filter</button>
            </div>
        </div>
    )
}