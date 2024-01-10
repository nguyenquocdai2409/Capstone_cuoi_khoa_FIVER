import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

export default function Support() {
  return (
    <div className=" support">
      <div className="support_1">
        <div className="flex justify-between container ">
          <div className="support_title_2 ">
            <h1 className="text-3xl font-bold mb-3">
              The best part? Everything.
            </h1>

            <div className="support_item my-4">
              <div className="support_item_title flex items-center">
                <span>
                  <CheckCircleOutlined />
                </span>

                <span className="text-xl font-medium ml-2">
                  Stick to your budget
                </span>
              </div>

              <p>
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div className="support_item my-4">
              <div className="support_item_title flex items-center">
                <span>
                  <CheckCircleOutlined />
                </span>

                <span className="text-xl font-medium ml-2">
                  Get quality work done quickly
                </span>
              </div>

              <p>
                Hand your project over to a talented freelancer in minutes, get
                long-lasting resdivts.
              </p>
            </div>
            <div className="support_item my-4">
              <div className="support_item_title flex items-center">
                <span>
                  <CheckCircleOutlined />
                </span>

                <span className="text-xl font-medium ml-2">
                  Pay when you're happy
                </span>
              </div>

              <p>
                Upfront quotes mean no surprises. Payments only get released
                when you approve.
              </p>
            </div>
            <div className="support_item my-4">
              <div className="support_item_title flex items-center">
                <span>
                  <CheckCircleOutlined />
                </span>

                <span className="text-xl font-medium ml-2">
                  Count on 24/7 support
                </span>
              </div>

              <p>
                Our round-the-clock support team is available to help anytime,
                anywhere.
              </p>
            </div>
          </div>
          <div className="support_video pl-5 pt-5">
            <video width="640" height="360" controls>
              {/* poster="../img/hinhanhvideo1.png" */}
              <source
                style={{
                  width: "640",
                  height: "360",
                }}
                src="../video/video1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="support_2">
        <div className="flex justify-between row container">
          <div className="support_video col-6  pt-5">
            <video width="640" height="360" controls>
              {/* poster="../img/hinhanhvideo1.png" */}
              <source
                style={{
                  width: "640",
                  height: "360",
                }}
                src="../video/video2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="support_title_2 col-6  ml-16">
            <h1>
              Kay Kim, Co-Founders <span className="">- rooted</span>
            </h1>
            <p>
              "When you want to create a business bigger than yourself, you need
              a lot of help. That's what fiverr does"
            </p>
          </div>
        </div>
      </div>

      <div className="support_3">
        <div className="support_icon  container">
          <h1 className="text-3xl font-bold mb-10">
            You need it, we've got it
          </h1>
          <div>
            <div className="text-center ">
              <Row className="flex justify-between mb-10">
                <Col span={4}>
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
                      alt=""
                    />
                    Graphics & Design
                  </a>
                </Col>
                <Col span={4}>
                  {" "}
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
                      alt=""
                    />
                    Digital Marketing
                  </a>
                </Col>
                <Col span={4}>
                  {" "}
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"
                      alt=""
                    />
                    Writing & Translation
                  </a>
                </Col>
                <Col span={4}>
                  {" "}
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"
                      alt=""
                    />
                    Video & Animation
                  </a>
                </Col>
                <Col span={4}>
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg"
                      alt=""
                    />
                    Music & Audio
                  </a>
                </Col>
              </Row>
              <Row className="flex justify-between">
                <Col span={4}>
                  {" "}
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"
                      alt=""
                    />
                    Programming & Tech
                  </a>
                </Col>
                <Col span={4}>
                  {" "}
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg"
                      alt=""
                    />
                    Programming & Tech
                  </a>
                </Col>
                <Col span={4}>
                  {" "}
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg"
                      alt=""
                    />
                    Lifestyle
                  </a>
                </Col>
                <Col span={4}>
                  {" "}
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
                      alt=""
                    />
                    Data
                  </a>
                </Col>
                <Col span={4}>
                  <a href="#">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
                      alt=""
                    />
                    Photography
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
