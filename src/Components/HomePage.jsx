import React from 'react'
import Navbar from './Navbar'
import FooterPage from './FooterPage'
import Mission from './Mission'
import MainPage from './MainPage'
import WhatSet from './WhatSet'
import Services from './Services'
import ReadyPage from './ReadyPage'
// import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>

      {/* <Helmet>
        <title>Praxire – Professional Web Development & Digital Solutions for Growing Businesses</title>
        <meta 
          name="description" 
          content="Praxire helps businesses grow with custom websites, branding, UI/UX design, digital marketing, and technology solutions. Build a strong online presence with expert web design, SEO, and modern digital services."
        />
        <link rel="canonical" href="https://praxire.com/" />

        <meta 
          name="keywords" 
          content="Praxire, web development, digital solutions, branding, UI UX design, website design, SEO services, digital marketing, business growth, online presence"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Praxire – Professional Web Development & Digital Solutions" />
        <meta 
          property="og:description" 
          content="Grow your business with Praxire. We build fast, modern websites and offer complete digital solutions including branding, SEO, and marketing."
        />
        <meta property="og:url" content="https://praxire.com/" />
        <meta property="og:image" content="https://praxire.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Praxire – Web Development & Digital Solutions" />
        <meta 
          name="twitter:description" 
          content="Modern websites, branding, and complete digital solutions to help your business grow online."
        />
        <meta name="twitter:image" content="https://praxire.com/og-image.jpg" />
      </Helmet> */}

      <Navbar />
      <MainPage />
      <Mission />
      <WhatSet />
      <Services />
      <ReadyPage />
      <FooterPage />
    </div>
  )
}

export default HomePage
