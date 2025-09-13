import React from 'react'
import Header from './componant/header'
import Navbar from './componant/navbar'
import Footer from './componant/footer'
import HeroSection from './componant/heroSection'
import NoticeBoard from './componant/noticeBoard'
import AboutSection from './componant/about'
import PrincipalSection from './componant/principalSection'
import Contact from './componant/contact'

const home = () => {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <NoticeBoard/>
    <PrincipalSection/>
    <Contact/>
    </>
  )
}

export default home;