import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade } from "swiper/modules";

const Section9_slider = () => {
    return (
        <div className="section9_slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
    
            {/* slide 1 */}
            <SwiperSlide>
              <div className="s9_card_outer_div">
                <div className="review">
                Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!
                </div>
                <div className="reviewing_person_outer_div">
                    <div className="photo_div"></div>
                    <div className="personn" >
                        Rohan Taneja
                    </div>
                </div>
              </div>
            </SwiperSlide>
    
            {/* slide 2 */}
            <SwiperSlide>
              <div className="s9_card_outer_div">
                <div className="review">
                Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!
                </div>
                <div className="reviewing_person_outer_div">
                    <div className="photo_div"></div>
                    <div className="personn" >
                        Rohan Taneja
                    </div>
                </div>
              </div>
            </SwiperSlide>
    
            {/* slide3 */}
            <SwiperSlide>
              <div className="s9_card_outer_div">
                <div className="review">
                Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!
                </div>
                <div className="reviewing_person_outer_div">
                    <div className="photo_div"></div>
                    <div className="personn" >
                        Rohan Taneja
                    </div>
                </div>
              </div>
            </SwiperSlide>
    
            {/* slide4  */}
            <SwiperSlide>
              <div className="s9_card_outer_div">
                <div className="review">
                Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!
                </div>
                <div className="reviewing_person_outer_div">
                    <div className="photo_div"></div>
                    <div className="personn" >
                        Rajesh 
                    </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default Section9_slider