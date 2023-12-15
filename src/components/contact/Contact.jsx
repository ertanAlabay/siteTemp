import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.73018296151!2d32.83436897683527!3d39.92505397152299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1str!2str!4v1697146568175!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  return (
    <>
      <Back title='Bize Yazın' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Bize Yazın</h1>
            <p>Her türlü fikir ve öneriye açığız.</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>KONYA/TURKEY</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +90 555 555 55 55</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='İsim' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Konu' />
              <textarea cols='30' rows='10'>
                Mesaj yazın...
              </textarea>
              <button className='primary-btn'>GÖNDERİN</button>
            </form>

            <h3>Bizi takip edin</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
