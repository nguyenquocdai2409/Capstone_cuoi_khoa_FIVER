import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";

export default function Services() {
  return (
    <div>
      <div className="container service">
        <h1 className="text-3xl font-bold mb-5">Popular services</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service1.png" alt="" />
              <div className="item_service">
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service2.png" alt="" />
              <div className="item_service">
                <p>Build your brand</p>
                <p className="text-2xl font-medium">Logo Design</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service3.png" alt="" />
              <div className="item_service">
                <p>Customize your site</p>
                <p className="text-2xl font-medium">WordPress</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service4.png" alt="" />
              <div className="item_service">
                <p>Share your message</p>
                <p className="text-2xl font-medium">Voice Over</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service5.png" alt="" />
              <div className="item_service">
                <p>Engage your audience</p>
                <p className="text-2xl font-medium">Video Explainer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service6.png" alt="" />
              <div className="item_service">
                <p>Reach more customers</p>
                <p className="text-2xl font-medium">Social Media</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service7.png" alt="" />
              <div className="item_service">
                <p>Unlock growth online</p>
                <p className="text-2xl font-medium">SEO</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service8.png" alt="" />
              <div className="item_service">
                <p>Color your dreams</p>
                <p className="text-2xl font-medium">Illustration</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service9.png" alt="" />
              <div className="item_service">
                <p>Go global</p>
                <p className="text-2xl font-medium">Translation</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service10.png" alt="" />
              <div className="item_service">
                <p>Learn your business</p>
                <p className="text-2xl font-medium">Data Entry</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service1.png" alt="" />
              <div className="item_service">
                <p>Showcase your story</p>
                <p className="text-2xl font-medium">Book Covers</p>
              </div>
            </div>
          </SwiperSlide>

          <div />
        </Swiper>
      </div>
    </div>
  );
}
