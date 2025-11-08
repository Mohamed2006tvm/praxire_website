import React from 'react'
import Navbar from './Navbar'
import FooterPage from './FooterPage'
import Mission from './Mission'
import MainPage from './MainPage'
import WhatSet from './WhatSet'

import Services from './Services'
import ReadyPage from './ReadyPage'
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>

      <Helmet>
        <title>Praxire - Elevate Your Business with Expert Digital Solutions</title>
        <meta name="description" content="Praxire is your trusted partner for cutting-edge digital solutions. We specialize in web development, digital marketing, and IT consulting to help your business thrive in the digital age." />
        <link rel="canonical" href="https://praxire.com/" />
      </Helmet>

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