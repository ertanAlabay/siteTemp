import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='HOŞGELDİNİZ' title='DAHA YEŞİL BİR TÜRKİYE' />
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
