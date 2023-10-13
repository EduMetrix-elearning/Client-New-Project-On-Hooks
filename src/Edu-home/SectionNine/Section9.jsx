import React from 'react'
// import "../../Components/SectionNine/Section9.jsx"
// import "../../Components/SectionNine/Section9.css"
// import "../SectionNine/Section9MediaQuery.css"
import "./Section9.css"
import "./Section9"
import "./Section9MediaQuery.css"

const Section9 = () => {

  return (
    <div className="section-9">
      {/* =======================custom Solutions================================== */}
      {/* ========================================================================= */}
      <div className="section-9-1">
        <div className='section-9-2'>
        <h1>Custom</h1>
        <h1>Solutions</h1>
        </div>
        <div className='section-9-3'>
          <p className='section-9-left-text'>Our team specializes in customizing IT development to meet your specific requierments. With our expertise, we deliver bespoke solutions tailored to address your unique challenges. Leverage our technical prowess and propet your business forward with our customized IT solutions.</p>
        </div> 
      </div>

      {/* ======================== courses =========================================== */}
      {/* ========================================================================== */}

      <div className='section-9-4'>
      {/* =========================================course one=================================== */}
      {/* ===================================================================================== */}

        <div className='section-9-5'>
          <div className='section-9-6'>
            <span className='section-9-6-spans'>Front End</span>
            <span className='section-9-6-spans'>Development</span>
          </div>
          <div className='section-9-6'>
            <span className='section-9-6-spans'>Back End</span>
            <span className='section-9-6-spans'>Development</span>
          </div>
        </div>

      {/* =========================================course two=================================== */}
      {/* ===================================================================================== */}

        <div className='section-9-5'>
          <div className='section-9-7'>
            <span className='section-9-6-spans'>Progressive</span>
            <span className='section-9-6-spans'>Web Apps</span>
          </div>
          <div className='section-9-7'>
            <span className='section-9-6-spans'>Custom</span>
            <span className='section-9-6-spans'>Web Apps</span>
          </div>
        </div>

      {/* =========================================course three================================= */}
      {/* ===================================================================================== */}

      <div className='section-9-5'>
          <div className='section-9-8'>
            <span  className='section-9-6-spans'>UI / UX Design</span>
          </div>
          <div className='section-9-8'>
            <span className='section-9-6-spans'>React Native Apps</span>
            <span className='section-9-6-spans'>(Android & IOS)</span>
          </div>
        </div>

      {/* =========================================course four================================== */}
      {/* ===================================================================================== */}

      <div className='section-9-5'>
          <div className='section-9-9'>
            <span className='section-9-6-spans'>Cloud Solutions</span>
            <span className='section-9-6-spans'>Microsoft Azure</span>
          </div>
          <div className='section-9-9'>
            <span className='section-9-6-spans'>Prototyping &</span>
            <span className='section-9-6-spans'>Tech Support</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section9