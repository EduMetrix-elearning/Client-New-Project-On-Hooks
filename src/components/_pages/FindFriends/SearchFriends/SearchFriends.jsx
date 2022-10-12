import React from 'react'
import './SearchFriends.scss'

export default function SearchFriends({ search, inputs, filterBtn }) {
    return (
        <div className='SearchFriends'>
            <div className='student_search'>
                <input type="text" placeholder='Enter student name' onChange={(e) => search(e.target.value)} />
            </div>
            <div className="other_search">
                <input type="text" placeholder='country' onChange={(e) => inputs((s) => ({ ...s, country: e.target.value }))} />
                <input type="text" placeholder='university' onChange={(e) => inputs((s) => ({ ...s, university: e.target.value }))} />
                <input type="text" placeholder='college' onChange={(e) => inputs((s) => ({ ...s, college: e.target.value }))} />
                <button onClick={filterBtn}><i className='fas fa-filter' /> Filter</button>
            </div>
        </div>
    )
}