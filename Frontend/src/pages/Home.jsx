import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import ToDoctors from '../components/ToDoctors'

function Home() {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <ToDoctors />
    </div>
  )
}

export default Home