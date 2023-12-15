import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='deneme 2' title='deneme 2 nin yazısı ' />
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
