import React from 'react'
import { Footer_Lower_Part } from './Footer_Lower_Part'

const FooterMain = () => {
  return (
    <div className='footer_main_outer_div'>
        <img src='./Assets/Photos/LYNC_footer_logo.png' className='LYNC_back' />

        <div className='foter_upper_text_flex'>
            <div>Got a game idea ?</div>
            <div> Let's make it big Together !!!</div>
            <div className='bttn_outer_div'> <button>get started</button></div>
        </div>
        <Footer_Lower_Part />

       

      
    </div>
  )
}

export default FooterMain
