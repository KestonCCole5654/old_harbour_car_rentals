import React from 'react'
import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import BrandLogosBanner from '../components/BrandLogosBanner'
import StepsSection from '../components/StepsSection'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import ContactInfoSection from '../components/ContactInfoSection'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
    
      <StepsSection />
      <FeaturedSection />
    
      <Testimonial />
      <Banner />
      <ContactInfoSection />
    
    </>
  )
}

export default Home
