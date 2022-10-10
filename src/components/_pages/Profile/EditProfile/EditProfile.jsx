import React, { useState } from 'react'
import { insertEducationalDetails, insertFamily, insertHobbies, insertSkills } from '../../../../api'
import './EditProfile.scss'

export default function EditProfile() {

    const [toggle, setToggle] = useState({ "About": true })
    const [inputs, setInputs] = useState({ About: null, Skills: null, Hobbies: null, Qualifications: null, LifeGoals: null })

    // function updateHandle() {
    //     let obj = {
    //         student_id: localStorage.getItem("userId"),
    //         skills: tempArr.toString()
    //     }
    //     insertSkills()
    //     let obj = {
    //         student_id: localStorage.getItem("userId"),
    //         fatherName: this.state.fatherName,
    //         motherName: this.state.motherName
    //     }
    //     insertFamily()
    //     let obj = {
    //         student_id: localStorage.getItem("userId"),
    //         hobbies: tempArr.toString()
    //     }
    //     insertHobbies()
    //     let obj = {
    //         student_id: localStorage.getItem("userId"),
    //         skills: tempArr.toString()
    //     }
    //     insertSkills()
    //     let obj = {
    //         student_id: localStorage.getItem("userId"),
    //         university: this.state.university,
    //         school: this.state.collage,
    //         courseName: this.state.courseName,
    //         specification: this.state.specialization,
    //         courseYear: this.state.courseYear
    //     }
    //     insertEducationalDetails()
    //     let obj = {
    //         student_id: localStorage.getItem("userId"),
    //         lifeAmbition: this.state.ambition
    //     }
    //     insertLifeAmbition()
    // }

    console.log(inputs)

    return (
        <div className='EditProfile'>
            <h4>Edit Profile</h4>
            <div className='title'>
                <h6 onClick={() => setToggle({ "About": true })}>About</h6>
                <i className={'fa fa-angle-' + (toggle.About ? 'down' : 'right')}></i>
                {toggle.About &&
                    <div className='inputs'>
                        <div>
                            <label htmlFor="">State</label>
                            <input type="text" onChange={(e) => setInputs(s => ({ ...s.About, state: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="">Country</label>
                            <input type="text" onChange={(e) => setInputs(s => ({ ...s.About, country: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="">Date of Birth </label>
                            <input type="text" onChange={(e) => setInputs(s => ({ ...s.About, dob: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="">Father 's name</label>
                            <input type="text" onChange={(e) => setInputs(s => ({ ...s.About, fatherName: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="">Mother 's name</label>
                            <input type="text" onChange={(e) => setInputs(s => ({ ...s.About, motherName: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="">Description</label>
                            <input type="text" onChange={(e) => setInputs(s => ({ ...s.About, description: e.target.value }))} />
                        </div>
                    </div>
                }
            </div>
            <div className='title'>
                <h6 onClick={() => setToggle({ "Hobbies": true })}>Hobbies</h6>
                <i className={'fa fa-angle-' + (toggle.Hobbies ? 'down' : 'right')}></i>
                {toggle.Hobbies &&
                    <div>

                    </div>
                }
            </div>
            <div className='title'>
                <h6 onClick={() => setToggle({ "Skills": true })}>Skills</h6>
                <i className={'fa fa-angle-' + (toggle.Skills ? 'down' : 'right')}></i>
                {toggle.Skills &&
                    <div></div>
                }
            </div>
            <div className='title'>
                <h6 onClick={() => setToggle({ "Qualifications": true })}>Qualifications</h6>
                <i className={'fa fa-angle-' + (toggle.Qualifications ? 'down' : 'right')}></i>
                {toggle.Qualifications &&
                    <div></div>
                }
            </div>
            <div className='title'>
                <h6 onClick={() => setToggle({ "LifeGoals": true })}>Life Goals</h6>
                <i className={'fa fa-angle-' + (toggle.LifeGoals ? 'down' : 'right')}></i>
                {toggle.LifeGoals &&
                    <div></div>
                }
            </div>
        </div >
    )
}