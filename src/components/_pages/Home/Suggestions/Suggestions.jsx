import React, { useState } from 'react'
import './suggestions.scss'
import { useEffect } from 'react'
import { followFriend, getStudentsToFollow } from '../../../../api'
import { userInfo } from '../../../../utils/localStorage_Utils'

export default function Suggestions() {

    const [peoples, setPeoples] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        async function asyncFunction() {
            const response = await getStudentsToFollow()
            setPeoples(response.data.data)
        }
        asyncFunction()
    }, [update])

    function followButtonHandle(people) {
        let obj = {
            user_name: people.user_name,
            follower_id: userInfo.id,
        }
        console.log(obj)
        followFriend(obj).then((res) => (console.log(res.data), setUpdate(!update))).catch((err) => console.log(err))
    }

    return (
        <div className='suggestions'>
            <div className="title">
                <h6>People suggestions</h6>
            </div>
            <div className="suggestions_inner_div">
                {peoples &&
                    peoples.map((people, i) => {
                        return (
                            <div className='people' key={i}>
                                <div>
                                    <img src={people.student_photo} alt="" />
                                    <p>{people.student_fname + " " + people.student_lname}</p>
                                </div>
                                <i className='fa fa-user-plus' onClick={() => followButtonHandle(people)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}