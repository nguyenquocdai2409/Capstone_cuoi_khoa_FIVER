import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";

export default function Services() {
  return (
    <div>
      <div className="container py-20">
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
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service4.png" alt="" />
              <div className="item_service">
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service5.png" alt="" />
              <div className="item_service">
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service6.png" alt="" />
              <div className="item_service">
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service7.png" alt="" />
              <div className="item_service">
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service8.png" alt="" />
              <div className="item_service">
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service9.png" alt="" />
              <div className="item_service">
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service10.png" alt="" />
              <div className="item_service">
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service_item">
              <img src="../img/service1.png" alt="" />
              <div className="item_service">
                <p>Add talent to Al</p>
                <p className="text-2xl font-medium">Al Artists</p>
              </div>
            </div>
          </SwiperSlide>

          <div />
        </Swiper>
      </div>
    </div>
  );
}
