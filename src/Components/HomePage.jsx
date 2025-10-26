import React from 'react'
import Navbar from './Navbar'
import FooterPage from './FooterPage'
import Mission from './Mission'
import MainPage from './MainPage'
import WhatSet from './WhatSet'

import Services from './Services'
import ReadyPage from './ReadyPage'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <MainPage/>
        <Mission/>
        <WhatSet/>
        <Services/>
        <ReadyPage/>
        <FooterPage/>

    </div>
  )
}

export default HomePage