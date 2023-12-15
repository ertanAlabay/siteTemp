
/* Tamamlandı */

import React from "react"
import { team } from "../../dummydata"

const TeamCard = () => {
  return (
    <>
    {/* dummydata.js de kurucuların bilgileri var. Yeni kurucu gelince sadece bilgi ekle */}
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <a className='fab fa-linkedin icon' href={val.linkedin} target="_blank"></a>
              <a className='fab fa-facebook-f icon' href={val.facebook} target="_blank"></a>
              <a className='fab fa-twitter icon' href={val.twitter} target="_blank"></a>
              <a className='fab fa-instagram icon' href={val.instagram} target="_blank"></a>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
