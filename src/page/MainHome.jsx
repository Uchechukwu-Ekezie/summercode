import React from 'react'
import Herod from '../Component/MainHome/Herod'
import Part from '../Component/MainHome/Part'
import WeOffer from '../Component/MainHome/WeOffer'
import Prices from '../Component/MainHome/Price'

function MainHome() {
  return (
    <div className='pt-20'>
     <Herod/>
     <Part/>
     <WeOffer/>
     <Prices/>
      
    </div>
  )
}

export default MainHome