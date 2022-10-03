import React from 'react'
import About from './About'
import BookATable from './BookATable'
import Chefs from './Chefs'
import Events from './Events'
import Gallery from './Gallery'
import Menu from './Menu'
import Specials from './Specials'
import Testimonials from './Testimonials'
import WhyUs from './WhyUs'

const Main = ({meals}) => {
  return (
    <main id='main'>
      {/* <About />
      <WhyUs /> */}
      <Menu meals={meals} />
      {/* <Specials />
      <Events />
      <BookATable /> 
      <Gallery />
      <Chefs />
      <Testimonials /> */}
    </main>
  )
}

export default Main