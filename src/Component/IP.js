import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import App from "./App";
import { Icon } from "semantic-ui-react";
import Lichtruc from "./Lichtruc";
import "./Lichtruc.css";
import TableFilter from "./TableFilter";

function IP() {
  //creating IP state
  const [ip, setIP] = useState("");
  const [latitude1, setlatitude] = useState("");
  const [longitude1, setlongitude] = useState("");
  const [hienthi, setHienthi] = useState("block");
  const [hienthi1, setHienthi1] = useState("none");
  const [hienthilichtruc, setHienthilichtruc] = useState("block");
  const [check1, setCheck1] = useState("");
  const [check2, setCheck2] = useState("");
  const [check3, setCheck3] = useState("");
  const [check4, setCheck4] = useState("");
  const [tgchamcong, setTgchamcong] = useState("none");
  const [tgchamcong1, setTgchamcong1] = useState("none");
  const [tgchamcong2, setTgchamcong2] = useState("none");
  const [checklocation, setChecklocation] = useState("none");
  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
    setlatitude(res.data.latitude);
    setlongitude(res.data.longitude);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();

    const date = new Date().toLocaleDateString("en-GB");
    const time = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    document.getElementById("Ngayht").value = date;
    document.getElementById("Gioht").value = time;

    if ((time > "09:00:00" && time < "17:00:00") || time > "19:00:00") {
      setTgchamcong("Nút đăng nhập đã bị ẩn!");
      setTgchamcong1("Không phải thời gian chấm công!");
      setTgchamcong2("none");
    } else {
      setTgchamcong("");
      setTgchamcong1("");
      setTgchamcong2("block");
    }

    if (
      ip.includes("115.72.91.92") ||
      ip.includes("115.75.182.108") ||
      ip.includes("115.74.251.70")
    ) {
      // console.log('Đúng')
      // console.log(hienthi)
      setCheck1("OK");
    } else {
      setCheck1("BAD");
    }
    // if ((latitude1.toString().includes('10.8'))||(latitude1.toString().includes('16'))) {

    if (
      latitude1.toString().includes("10.8") ||
      latitude1.toString().includes("16")
    ) {
      setCheck2("OK");
      setChecklocation("none");
    } else {
      setCheck2("BAD");
      setTgchamcong2("none");
      setChecklocation("block");
    }

    if (
      longitude1.toString().includes("105") ||
      longitude1.toString().includes("106")
    ) {
      setCheck3("OK");
      setChecklocation("none");
    } else {
      setCheck3("BAD");
      setTgchamcong2("none");
      setChecklocation("block");
    }
  });

  function Add() {
    var mk = document.getElementById("matkhau").value;
    var tk = document.getElementById("taikhoan").value;
    if (mk === "dgta" && tk === "dgta") {
      setCheck4("OK");
    } else {
      alert("Tài khoản và mật khẩu không đúng!");
    }
    if (
      check1 === "OK" &&
      check2 === "OK" &&
      check3 === "OK" &&
      check4 === "OK"
    ) {
      setHienthi("none");
      setHienthi1("block");
    }
  }

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    // Connect to a seaweedfs instance
  };

  function checkmk() {
    var mk = document.getElementById("matkhau").value;
    var tk = document.getElementById("taikhoan").value;
    if (mk === "thanhtrungantin" && tk === "thanhtrungantin") {
      setHienthi("none");
      setHienthi1("block");
    }
  }

  function hienthilichtrucf() {
    console.log(hienthilichtruc);
    if (hienthilichtruc === "none") {
      setHienthilichtruc("block");
    } else {
      setHienthilichtruc("none");
    }
  }
  return (
    <Fragment>
      <div>
        <div>
          <div
            className="d-flex mx-auto justify-content-center text-center"
          >
            <Lichtruc />
          </div>
        </div>

        <div>
          <div
            className="d-flex mx-auto justify-content-center text-center"
            style={{ width: "600px" }}
          >
            <TableFilter />
          </div>
        </div>

        <div class="container md-5">
          <div className="row">
            <hr />
            <div className="col-2 col-md-3"></div>
            <div className="col-9 col-md-6">
              <div className="input-group mb-2">
                <span className="input-group-text" id="basic-addon1">
                  Ngày:
                </span>
                <input
                  id="Ngayht"
                  className="form-control"
                  type="text"
                  name="Ngayht"
                  readOnly
                />
                <span className="input-group-text" id="basic-addon1">
                  Giờ:
                </span>
                <input
                  id="Gioht"
                  className="form-control"
                  type="text"
                  name="Gioht"
                  readOnly
                />
              </div>
              <p>
                <br></br>
                <ul>
                  {" "}
                  <strong> Thời gian chấm công mỗi ngày: </strong>
                  <li>Ca sáng: 07h00 : 09h00</li>
                  <li>Ca tối : 17h00 : 19h00</li>
                </ul>
              </p>
            </div>
            <div className="col-1 col-md-3"></div>
            <hr />
            <div className="col-2 col-md-3"></div>
            {/* Hien thi IP */}
            <div className="col-3 col-lg-2" style={{ textAlign: "left" }}>
              <div>
                <p>
                  {" "}
                  <i class="fa fa-address-book" aria-hidden="true"></i> Địa chỉ
                  IP:{" "}
                </p>
                <p>
                  {" "}
                  <i class="fa fa-location-arrow" aria-hidden="true"></i> Vĩ độ:{" "}
                </p>
                <p>
                  {" "}
                  <i class="fa fa-globe" aria-hidden="true"></i> Kinh độ:
                </p>
              </div>
            </div>
            <div className="col-3  col-lg-3">
              <p>{ip}</p>
              <p>{latitude1}</p>
              <p>{longitude1}</p>
            </div>
            <div className="col-1 col-lg-1">
              <p>{check1}</p>
              <p>{check2}</p>
              <p>{check3}</p>
            </div>
            <div style={{ display: checklocation }}>
              {" "}
              Bạn không có ở nhà máy!{" "}
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-2 col-md-4"></div>
            <div className="col-9 col-md-4">
              <form className="container">
                <div className="input-group mb-2">
                  <span className="input-group-text" id="basic-addon1">
                    {" "}
                    <i class="fa fa-id-card" aria-hidden="true"></i> Tài khoản:
                  </span>
                  <input id="taikhoan" className="form-control" type="text" />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    {" "}
                    <i class="fa fa-key" aria-hidden="true"></i> Mật khẩu:{" "}
                  </span>
                  <input
                    id="matkhau"
                    className="form-control"
                    type="password"
                    onMouseEnter={checkmk}
                  />
                </div>
                <div className="input-group mb-3"></div>
              </form>
            </div>
            <div className="col-1 col-md-3"></div>
            <hr />
            <div className="row">
              <div className="col-4 col-md-5"></div>
              <div className="col-7 col-md-3">
                <button
                  style={{ display: tgchamcong2 }}
                  className="btn btn-secondary"
                  onMouseDown={Add}
                  onClick={Add}
                >
                  {" "}
                  Truy cập chấm công{" "}
                </button>
              </div>
              <div className="col-1 col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-3 col-md-4"></div>
              <div className="col-8 col-md-5">
                {tgchamcong}
                <br></br>
                {tgchamcong1}
              </div>
              <div className="col-1 col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: hienthi1 }}>
        <App />
      </div>
    </Fragment>
  );
}

export default IP;
