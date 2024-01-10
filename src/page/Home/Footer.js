import React from "react";
import { GlobalOutlined } from "@ant-design/icons";
export default function Footer() {
  return (
    <div>
      <hr className="my-5" />
      <div className="container footer">
        <div className="flex justify-between footer_title">
          <ul>
            <h4 className="footer_item">Categorles</h4>
            <li>
              <a href="#">Graphics & Design</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Writing & Translation</a>
            </li>
            <li>
              <a href="#">Video & Animation</a>
            </li>
            <li>
              <a href="#">Music & Audio</a>
            </li>
            <li>
              <a href="#">Fiverr Logo Maker</a>
            </li>
            <li>
              <a href="#">Programming & Tech</a>
            </li>
            <li>
              <a href="#">Data</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Photography</a>
            </li>

            <li>
              <a href="#">End-to-End Projects</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
          <ul>
            <h4 className="footer_item">About</h4>
            <li>
              <a href="#">Graphics & Design</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press & News</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Intellectual Property Claims</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
          <ul>
            <h4 className="footer_item">Support and Education</h4>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Trust & Safety</a>
            </li>
            <li>
              <a href="#">Selling on Fiverr</a>
            </li>
            <li>
              <a href="#">Buying on Fiverr</a>
            </li>
            <li>
              <a href="#">Fiverr Guides</a>
            </li>
            <li>
              <a href="#">
                <p>Fiverr Workspace</p>
                <p>Invoice Software</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Learn</p>
                <p>Online Courses</p>
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="footer_item">Community</h4>
            <li>
              <a href="#">Customer Success Stories</a>
            </li>
            <li>
              <a href="#">Community Hub</a>
            </li>
            <li>
              <a href="#">Forum</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
          </ul>
          <ul>
            <h4 className="footer_item">Business Solutions</h4>
            <li>
              <a href="#">About Business Solutions</a>
            </li>
            <li>
              <a href="#">Fiverr Pro</a>
            </li>
            <li>
              <a href="#">Fiverr Certified</a>
            </li>
            <li>
              <a href="#">Fiverr Enterprise</a>
            </li>
            <li>
              <a href="#">
                <p>ClearVoice</p>
                <p>Content Marketing</p>
              </a>
            </li>
            <li>
              <a href="#">Working Not Working</a>
            </li>
          </ul>
        </div>
        <hr className="mt-3" />
        <div className="footer_icon">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h2>fiverr</h2>
              <p> © Fiverr International Ltd. 2024</p>
            </div>
            <div className="flex justify-center ">
              <span>
                <a href="#">
                  <img src="./img/icon1_tiktok.jpg" alt="" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src="./img/icon2_insta.jpg" alt="" />
                </a>
              </span>

              <span>
                <a href="#">
                  <img src="./img/icon3_linkedin.jpg" alt="" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src="./img/icon4_facebook.jpg" alt="" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src="./img/icon5_pinterest.jpg" alt="" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src="./img/icon6_x.jpg" alt="" />
                </a>
              </span>
              <span>
                <a href="#">
                  <span>
                    <GlobalOutlined />
                    English
                  </span>
                </a>
              </span>
              <span>
                <p>$ USD</p>
              </span>
              <span>
                <img src="./img/icon7_person.jpg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
