import React from 'react'
import Section1Layer from './Section1/Section1Layer'
import Section2_Main from './Section2/Section2_Main'
import Section3 from './Section3/Section3'
import Section4main from './Section4/Section4main'
import Section5 from './Section5/Section5'
import Section6_main from './Section6/Section6_main'
import Section7_Main from './Section7/Section7_Main'
import Section8main from './Section8/Section8main'
import Section9 from './Section9/Section9'
import Section10 from './Section10/Section10'
import Section11 from './Section11/Section11'
import FooterMain from './Footer/FooterMain'


const Home = () => {
  return (
    <div className='homePage_Div'>
        <Section1Layer />
        <Section2_Main />
        <Section3 />
        <Section4main />
        <Section5 />
        <Section6_main />
        <Section7_Main />
        <Section8main />
        <Section9 />
        <Section10 />
        <Section11 />
        <FooterMain />
  
    </div>
  )
}

export default Home