import React, { Component, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Lichtruc from "../Component/Lichtruc";
import "./header.css";
var iconbrand = require("../Pic/wind-turbine.png");
var iconuser = require("../Pic/Users.png");

const Header = () => {
  const [ht, setht] = useState("none");
  const [ht1, setht1] = useState("none");
  const [ht2, setht2] = useState("none");

  function funcht() {
    if (ht == "none") {
      setht("block");
    } else {
      setht("none");
    }
  }

  function funcht1() {
    if (ht1 == "none") {
      setht1("block");
    } else {
      setht1("none");
    }
  }

  function funclichsu() {
    if (ht2 == "none") {
      setht2("block");
    } else {
      setht2("none");
    }
  }
  return (
    <div>
      <div style={{ backgroundColor: "#1e91a8" }}>
        <div className="d-flex justify-content-between px-2">
          <div className="d-flex fs-4 px-3 fw-bolder text-white py-2">
            <a href="/">
              <div className="d-flex">
                <img
                  src={iconbrand}
                  className="d-block"
                  alt="..."
                  width="32"
                  height="32"
                />
                <img
                  src={iconbrand}
                  className="d-block"
                  alt="..."
                  width="32"
                  height="32"
                />
                <img
                  src={iconbrand}
                  className="d-block"
                  alt="..."
                  width="32"
                  height="32"
                />
                <img
                  src={iconbrand}
                  className="d-block"
                  alt="..."
                  width="32"
                  height="32"
                />
                <img
                  src={iconbrand}
                  className="d-block"
                  alt="..."
                  width="32"
                  height="32"
                />
                <img
                  src={iconbrand}
                  className="d-block"
                  alt="..."
                  width="32"
                  height="32"
                />
              </div>
            </a>
          </div>
          <div>
            <p className="d-flex fs-4 fw-bolder text-white">
              NHÀ MÁY ĐIỆN GIÓ TÂN ÂN 1
            </p>
          </div>

          <div
            className="position-relative d-flex px-4 py-1"
            role="button"
            onClick={funcht1}
          >
            {/* Search */}
            <div>
              <div
                className="search px-5 py-2 d-flex justify-content-right"
                onMouseMove={funclichsu}
              >
                <div className="position-fixed">
                  <div className="search btn d-flex ">
                    <p style={{ display: ht2 }} className="hienthilichsu">
                      Lịch sử trực ca
                    </p>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Bell Alarm */}
            <div>
              <div className="bell px-2 py-1" role="button">
                <span className="fs-4">
                  <i className="fa fa-bell" aria-hidden="true"></i>
                </span>
                <span className="position-absolute translate-middle badge rounded-pill text-white bg-danger">
                  3
                </span>
              </div>
              <div
                className="bg-secondary position-absolute translate-middle mt-2 rounded-2 "
                style={{ display: ht1 }}
              >
                {/* <div className="z-index:200 px-3 mt-5">
                  <a className="btn  custom-btn "> mt1</a>
                  <div class="dropdown-divider"></div>
                  <a className="btn  custom-btn"> Thông báo 2</a>
                  <div class="dropdown-divider"></div>
                  <a className="btn  custom-btn"> Thông báo 3</a>
                  <div class="dropdown-divider"></div>
                  <a className="btn  custom-btn"> Tất cả thông báo</a>
                </div> */}
              </div>
            </div>

            <div className="users px-3" role="button" onClick={funcht}>
              <div>
                {" "}
                <img
                  src={iconuser}
                  className="d-block"
                  alt="..."
                  width="38"
                  height="38"
                />
              </div>
              <div
                className="bg-secondary position-absolute translate-middle-x mt-2 rounded-2"
                style={{ display: ht }}
              >
                <div className="z-index:100 ">
                  <a href="/Chamcong" className="btn  custom-btn text-white">
                    {" "}
                    Chấm công
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="/Lichtruc" className="btn  custom-btn text-white">
                    {" "}
                    Lịch trực
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="/Nhansu" className="btn  custom-btn text-white">
                    {" "}
                    Nhân sự
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
