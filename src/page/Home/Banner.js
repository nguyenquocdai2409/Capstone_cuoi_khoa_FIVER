import React from "react";
import { Carousel, Space } from "antd";
import Search from "antd/es/input/Search";
const contentStyle = {
  height: "80vh",

  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => (
  <div>
    <div className="banner_carousel">
      <Carousel className="banner_carousel" autoplay>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{
                width: "100vw",
                height: "100%",
              }}
              src="../img/carousel1_christina.png"
              alt=""
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{
                width: "100vw",
                height: "100%",
              }}
              src="../img/carousel2_gabrielle.png"
              alt=""
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{
                width: "100vw",
                height: "100%",
              }}
              src="../img/carousel3_andrea.png"
              alt=""
            />
          </h3>
        </div>
      </Carousel>
      <div className="title_carousel w-100 ">
        <h1 className="text-5xl text-white font-bold w-4/5 ">
          Find the right freelance service, right away
        </h1>
        <div className="mt-3 mb-5 search_carousel">
          <Space.Compact>
            <Search
              style={{ width: 600 }}
              placeholder="input search text"
              allowClear
            />
          </Space.Compact>
        </div>
        <div className="text-white carousel_popular ">
          <span className="mr-2 ">Popular:</span>
          <span className="mr-2 rounded-full border border-white px-2 py-1">
            Website Design
          </span>
          <span className="mr-2 rounded-full border border-white px-2 py-1">
            WordPress
          </span>
          <span className="mr-2 rounded-full border border-white px-2 py-1">
            Logo Design
          </span>
          <span className="mr-2 rounded-full border border-white px-2 py-1">
            Al Services
          </span>
        </div>
      </div>
    </div>

    <div className=" py-10 text-center text-3xl font-medium text-gray-300 bg-gray-100">
      <div className=" container">
        <span className="mx-5 ">Trusted by:</span>
        <span className="mx-5">Meta</span>
        <span className="mx-5">Google</span>
        <span className="mx-5">Netflix</span>
        <span className="mx-5">P&G</span>
        <span className="mx-5">PayPal</span>
      </div>
    </div>
  </div>
);
export default App;
