import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
export default function Support() {
  return (
    <div className="">
      <div className="container  ">
        <div className="flex">
          <div className="support_title col-6">
            <h1 className="text-3xl font-bold mb-3">
              The best part? Everything.
            </h1>
            <div className="support_item">
              <span className="text-gray-400 text-2xl mr-2 ">
                <CheckCircleOutlined />
              </span>
              <span className="font-semibold text-2xl leading-8">
                Stick to your budget
              </span>
              <p className="text-xl font-medium text-gray-400">
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div className="support_item">
              <span className="text-gray-400 text-2xl mr-2 ">
                <CheckCircleOutlined />
              </span>
              <span className="font-semibold text-2xl leading-8">
                Stick to your budget
              </span>
              <p className="text-xl font-medium text-gray-400">
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div className="support_item">
              <span className="text-gray-400 text-2xl mr-2 ">
                <CheckCircleOutlined />
              </span>
              <span className="font-semibold text-2xl leading-8">
                Stick to your budget
              </span>
              <p className="text-xl font-medium text-gray-400">
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div className="support_item">
              <span className="text-gray-400 text-2xl mr-2 ">
                <CheckCircleOutlined />
              </span>
              <span className="font-semibold text-2xl leading-8">
                Stick to your budget
              </span>
              <p className="text-xl font-medium text-gray-400">
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
          </div>
          <div className="support_video col-6 pt-5">
            <video
              width="640"
              height="360"
              controls
              poster="../img/hinhanhvideo1.png"
            >
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
    </div>
  );
}
