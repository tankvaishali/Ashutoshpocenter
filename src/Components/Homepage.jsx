import React from 'react'
import HOCcomponent from './HOCcomponent'
import Innovation from './Innovation'
import "../assets/css/Homepage.css"
import Capability from './Capability'
import Services from './Services'
import WhyChoose from './WhyChoose'
import Happy from './Happy'
import Comments from './Comments'
import Counter from './Counter'
import Products from './Products'
import HomeCrousel from './HomeCrousel'
import Facility from './Facility'

function Homepage() {
  return (
    <>
      <HomeCrousel />
      <Innovation />
      <Capability />
      <Products />
      <Services />
      <Facility />
      <Counter />
      <WhyChoose />
      <Comments />
      <Happy />
    </>
  )
}

export default HOCcomponent(Homepage)