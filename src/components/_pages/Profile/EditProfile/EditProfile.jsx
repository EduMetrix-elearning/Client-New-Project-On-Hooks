import React, { useRef, useState } from 'react'
import { insertDescription, insertEducationalDetails, insertFamily, insertHobbies, insertLifeAmbition, insertSkills } from '../../../../api'
import { userInfo } from '../../../../utils/localStorage_Utils'
import './EditProfile.scss'

export default function EditProfile({ currentDetails }) {

    const HobbiesInput = useRef()
    const SkillsInput = useRef()
    const LifeGoalsInput = useRef()

    const [toggle, setToggle] = useState({ "About": true })
    const [inputs, setInputs] = useState({ About: null, Skills: [], Hobbies: [], Qualifications: {}, LifeGoals: [] })

    function aboutUpdateHandle() {
        insertFamily({
            student_id: userInfo.id,
            fatherName: inputs.About.fatherName,
            motherName: inputs.About.motherName
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))

        insertDescription({
            student_id: userInfo.id,
            description: inputs.About.description
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    function HobbiesInputHandle() {
        insertHobbies({
            student_id: userInfo.id,
            hobbies: inputs.Hobbies.toString()
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    function SkillsInputHandle() {
        insertSkills({
            student_id: userInfo.id,
            skills: inputs.Skills.toString()
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    function QualificationsInputHandle() {
        insertEducationalDetails({
            student_id: userInfo.id,
            university: this.state.university,
            school: this.state.collage,
            courseName: this.state.courseName,
            specification: this.state.specialization,
            courseYear: this.state.courseYear
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    function LifeGoalsInputHandle() {
        insertLifeAmbition({
            student_id: userInfo.id,
            lifeAmbition: inputs.LifeGoals()
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    // console.log(inputs)
    console.log(currentDetails)

    return (
        <div className='EditProfile'>
            <h4>Edit Profile</h4>
            <div className='title' onClick={() => setToggle({ "About": true })}>
                <h6>About</h6>
                <i className={'fa fa-angle-' + (toggle.About ? 'down' : 'right')}></i>
                {toggle.About &&
                    <div className='inputs'>
                        <div>
                            <label htmlFor="">State</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, About: { ...s.About, state: e.target.value } }))}
                                placeholder={currentDetails.student_state} />
                        </div>
                        <div>
                            <label htmlFor="">Country</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, About: { ...s.About, country: e.target.value } }))}
                                placeholder={currentDetails.student_country} />
                        </div>
                        <div>
                            <label htmlFor="">Date of Birth </label>
                            <input type="date"
                                onChange={(e) => setInputs(s => ({ ...s, About: { ...s.About, dob: e.target.value } }))}
                                placeholder={currentDetails.student_dob} />
                        </div>
                        <div>
                            <label htmlFor="">Father 's name</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, About: { ...s.About, fatherName: e.target.value } }))}
                                placeholder={currentDetails.student_fatherName} />
                        </div>
                        <div>
                            <label htmlFor="">Mother 's name</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, About: { ...s.About, motherName: e.target.value } }))}
                                placeholder={currentDetails.student_motherName} />
                        </div>
                        <div>
                            <label htmlFor="">Description</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, About: { ...s.About, description: e.target.value } }))}
                                placeholder={currentDetails.description} />
                        </div>
                        <button onClick={aboutUpdateHandle} >Update About</button>
                    </div>
                }
            </div>
            <div className='title' onClick={() => setToggle({ "Hobbies": true })}>
                <h6>Hobbies</h6>
                <i className={'fa fa-angle-' + (toggle.Hobbies ? 'down' : 'right')}></i>
                {toggle.Hobbies &&
                    <div>
                        <p>{currentDetails.hobbies && currentDetails.hobbies}</p>
                        <input ref={HobbiesInput} type="text" />
                        <button onClick={(e) => (setInputs(s => ({ ...s, Hobbies: [...s.Hobbies, HobbiesInput.current.value] })), HobbiesInputHandle())}>&#x2713;</button>
                    </div>
                }
            </div>
            <div className='title' onClick={() => setToggle({ "Skills": true })}>
                <h6>Skills</h6>
                <i className={'fa fa-angle-' + (toggle.Skills ? 'down' : 'right')}></i>
                {toggle.Skills &&
                    <div>
                        <p>{currentDetails.skills && currentDetails.skills}</p>
                        <input ref={SkillsInput} type="text" />
                        <button onClick={(e) => (setInputs(s => ({ ...s, Skills: [...s.Skills, SkillsInput.current.value] })), SkillsInputHandle())}>&#x2713;</button>
                    </div>
                }
            </div>
            <div className='title' onClick={() => setToggle({ "Qualifications": true })}>
                <h6>Qualifications</h6>
                <i className={'fa fa-angle-' + (toggle.Qualifications ? 'down' : 'right')}></i>
                {toggle.Qualifications &&
                    // <div>
                    //     <input ref={QualificationsInput} type="text" />
                    //     <button onClick={(e) => (setInputs(s => ({ ...s, Qualifications: [...s.Qualifications, QualificationsInput.current.value] })), QualificationsInputHandle())}>&#x2713;</button>
                    // </div>

                    // collage
                    // courseName
                    // specialization
                    // courseYear
                    <div className="inputs">
                        <div>
                            <label htmlFor="">University</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, Qualifications: { ...s.Qualifications, university: e.target.value } }))}
                                placeholder={currentDetails.university} />
                        </div>
                        <div>
                            <label htmlFor="">College</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, Qualifications: { ...s.Qualifications, collage: e.target.value } }))}
                                placeholder={currentDetails.university} />
                        </div>
                        <div>
                            <label htmlFor="">Course Name</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, Qualifications: { ...s.Qualifications, courseName: e.target.value } }))}
                                placeholder={currentDetails.university} />
                        </div>
                        <div>
                            <label htmlFor="">Specialization</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, Qualifications: { ...s.Qualifications, specialization: e.target.value } }))}
                                placeholder={currentDetails.university} />
                        </div>
                        <div>
                            <label htmlFor="">CourseYear</label>
                            <input type="text"
                                onChange={(e) => setInputs(s => ({ ...s, Qualifications: { ...s.Qualifications, courseYear: e.target.value } }))}
                                placeholder={currentDetails.university} />
                        </div>
                        <button onClick={QualificationsInputHandle} >Update Qualifications</button>
                    </div>
                }
            </div>
            <div className='title' onClick={() => setToggle({ "LifeGoals": true })}>
                <h6>Life Goals</h6>
                <i className={'fa fa-angle-' + (toggle.LifeGoals ? 'down' : 'right')}></i>
                {toggle.LifeGoals &&
                    <div>
                        <input ref={LifeGoalsInput} type="text" />
                        <button onClick={(e) => (setInputs(s => ({ ...s, LifeGoals: [...s.LifeGoals, LifeGoalsInput.current.value] })), LifeGoalsInputHandle())}>&#x2713;</button>
                    </div>
                }
            </div>
        </div >
    )
}