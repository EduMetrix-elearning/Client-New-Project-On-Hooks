import React, { useState } from 'react'
import './FindFriends.scss'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import SearchFriends from '../../components/_pages/FindFriends/SearchFriends/SearchFriends'
import DisplayFriends from '../../components/_pages/FindFriends/DisplayFriends/DisplayFriends'
import { useEffect } from 'react'
import { filterStudents, followFriend, getStudentsToFollow, searchFriends } from '../../api'
import { userInfo } from '../../utils/localStorage_Utils'

export default function FindFriends() {

    const [students, setStudents] = useState([])
    const [update, setUpdate] = useState(false)
    const [searchInputs, setSearchInputs] = useState({ country: "", university: "", college: "" })

    useEffect(() => {
        getAllStudents()
    }, [update])

    function getAllStudents() {
        getStudentsToFollow().then((res) => setStudents(res.data.data)).catch((err) => console.log(err))
    }

    function followButtonHandle(student) {
        if (student.followed) return;
        let obj = {
            user_name: student.user_name,
            follower_id: userInfo.id,
        }
        followFriend(obj).then((res) => console.log(res.data)).catch((err) => console.log(err))
        setUpdate(!update)
    }

    function searchFriendsHandle(text) {
        console.log(text === "")
        if (text === "") getAllStudents()
        else
            searchFriends({ user_name: text })
                .then((res) => setStudents(res.data.result))
                .catch((err) => console.log(err))
    }

    function filterButtonHandle() {
        let obj = {
            student_country: searchInputs.country,
            university: searchInputs.university,
            school: searchInputs.college
        }
        if (searchInputs.country === "" && searchInputs.university === "" && searchInputs.college === "") {
            getAllStudents()
        } else {
            filterStudents(obj)
                .then((res) => {
                    console.log(res.data)
                    setStudents(res.data.data)
                }).catch((err) => console.log(err))
        }
    }

    return (
        <div className='FindFriends'>
            <header>
                <Header />
            </header>
            <main>
                <div className='findFriends_content'>
                    <SearchFriends search={searchFriendsHandle} inputs={setSearchInputs} filterBtn={filterButtonHandle} />
                    <div className="display_friends">
                        {
                            students && students.map((student, index) => {
                                return (
                                    <DisplayFriends key={index} details={student} followButton={followButtonHandle} />
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <NavBar currPage={'Find friends'} />
        </div>
    )
}