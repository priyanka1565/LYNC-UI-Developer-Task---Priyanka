import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade } from "swiper/modules";

const Section8_Card_Template = () => {
  return (
    <div className="section8_slider">
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
          <div className="card_outer_divvv">
            <img src="./Assets/Photos/blogs_img.png" className="blogs_img" />
            <div className="card_text_flex_outer">
              <div className="title_b">
                LYNC teamed up with Astar Network to effortlessly bring the next
                billion gamers into Web3 🎮
              </div>
              <div className="small_content">
                LYNC joins forces with Astar Network to allow game developers
                and studios to launch games in just a few minutes using LYNC’s
                SDK and infrastructure.
              </div>
              <div className="read_more_bttn_outer_div">
                {" "}
                <button>Read more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 2 */}
        <SwiperSlide>
          <div className="card_outer_divvv">
            <img src="./Assets/Photos/blogs_img.png" className="blogs_img" />
            <div className="card_text_flex_outer">
              <div className="title_b">
                LYNC teamed up with Astar Network to effortlessly bring the next
                billion gamers into Web3 🎮
              </div>
              <div className="small_content">
                LYNC joins forces with Astar Network to allow game developers
                and studios to launch games in just a few minutes using LYNC’s
                SDK and infrastructure.
              </div>
              <div className="read_more_bttn_outer_div">
                {" "}
                <button>Read more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide3 */}
        <SwiperSlide>
          <div className="card_outer_divvv">
            <img src="./Assets/Photos/blogs_img.png" className="blogs_img" />
            <div className="card_text_flex_outer">
              <div className="title_b">
                LYNC teamed up with Astar Network to effortlessly bring the next
                billion gamers into Web3 🎮
              </div>
              <div className="small_content">
                LYNC joins forces with Astar Network to allow game developers
                and studios to launch games in just a few minutes using LYNC’s
                SDK and infrastructure.
              </div>
              <div className="read_more_bttn_outer_div">
                {" "}
                <button>Read more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide4  */}
        <SwiperSlide>
          <div className="card_outer_divvv">
            <img src="./Assets/Photos/blogs_img.png" className="blogs_img" />
            <div className="card_text_flex_outer">
              <div className="title_b">
                LYNC teamed up with Astar Network to effortlessly bring the next
                billion gamers into Web3 🎮
              </div>
              <div className="small_content">
                LYNC joins forces with Astar Network to allow game developers
                and studios to launch games in just a few minutes using LYNC’s
                SDK and infrastructure.
              </div>
              <div className="read_more_bttn_outer_div">
                {" "}
                <button>Read more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Section8_Card_Template;
