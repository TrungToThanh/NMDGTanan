import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./header.css";
var iconbrand = require("../Pic/wind-turbine.png");
var iconuser = require("../Pic/Users.png");

const Header = () => {
  const [ht, setht] = useState("none");
  const [ht1, setht1] = useState("none");
  const [ht2, setht2] = useState("none");
  const [thongbao, setThongbao] = useState("");

  const getData = async () => {
    const res = await axios.get("https://sheetdb.io/api/v1/0rb3cvaptbdui")
    console.log(res.data);
    // console.log(res.data[0].Thongbao);
    setThongbao(res.data)
    console.log('thongbao', thongbao)
  };
  
  useEffect(()=>{
    getData()
  },[])


  function funcht() {
    if (ht === "none") {
      setht("block");
    } else {
      setht("none");
    }
  }

  function funcht1() {
    if (ht1 === "none") {
      setht1("block");
    } else {
      setht1("none");
    }
  }

  function funclichsu() {
    if (ht2 === "none") {
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
            
          >
            {/* Search */}
            <div>
              <div
                className="search px-5 py-2 d-flex justify-content-right"
                onMouseMove={funclichsu}
              >
                <div className="position-fixed">
                  <Link
                    to={(location) => ({ ...location, pathname: "/Timkiem" })}
                  >
                    <div className="search btn d-flex ">
                      <p style={{ display: ht2 }} className="hienthilichsu">
                        Lịch sử trực ca
                      </p>
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bell Alarm */}
            <div>
              <div className="bell px-2 py-1" role="button" onClick={funcht1}>
                <span className="fs-4">
                  <i className="fa fa-bell" aria-hidden="true"></i>
                </span>
                <span className="position-absolute translate-middle badge rounded-pill text-white bg-danger">
                  {thongbao.length}
                </span>
              </div>
              <div
                className="bg-secondary position-absolute translate-middle mt-2 rounded-2 mx-auto"
                style={{width:'300px',  display: ht1 }}
              >
               <div className="z-index:200 position-absolute ">
                 {thongbao && thongbao.map((el)=>{
                   return (
                    <p className="alert alert-primary text-center" style={{width:'250px'}} > {el.Thongbao}</p>
                   ) 
                 })}

                </div> 
              </div>
            </div>

            <div className="users px-3" role="button" >
              <div>
                <img
                  src={iconuser}
                  className="d-block"
                  alt="..."
                  width="38"
                  height="38"
                  onClick={funcht}
                />
              </div>
              <div
                className="bg-secondary position-absolute translate-middle-x mt-2 rounded-2"
                style={{ display: ht }}
              >
                <div className="z-index:100 ">
                  <Link
                    to={(location) => ({ ...location, pathname: "/History" })}
                    className="btn  custom-btn text-white"
                  >
 
                    Lịch sử
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link
                    to={(location) => ({ ...location, pathname: "/Dangnhap" })}
                    className="btn  custom-btn text-white"
                  >

                    Chấm công
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link
                    to={(location) => ({ ...location, pathname: "/Lichtruc" })}
                    className="btn  custom-btn text-white"
                  >
         
                    Lịch trực
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link
                    to={(location) => ({ ...location, pathname: "/Nhansu" })}
                    className="btn  custom-btn text-white"
                  >
                     Nhân sự
                  </Link>
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
