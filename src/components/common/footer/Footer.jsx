import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      {/*
      <section className='newletter'>
        --------------------------
      </section>
      */}
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>TEKNOFOREST</h1>
            <span>TARIMDAN ORMANCILIĞA</span>
            <p>Hep beraber daha yeşil bir Türkiy'e için haydi el ele.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, Konya, Türkiye
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +90 555 55 55
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@teknoforest.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 Tüm hakları saklıdır. | Bu site <i className='fa fa-heart'></i> Orenda tarafından yapılmıştı.
        </p>
      </div>
    </>
  )
}

export default Footer
