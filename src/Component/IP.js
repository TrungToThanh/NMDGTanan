import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Schedule from "./Schedule";
import TableFilter from "./TableFilter";
import "./Schedule.css";

function IP() {
  //creating IP state
  const [ip, setIP] = useState("");
  const [latitude1, setlatitude] = useState("");
  const [longitude1, setlongitude] = useState("");
  const [hienthi1, setHienthi1] = useState("none");
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

  let history = useHistory();

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

    if ((time > "10:00:00" && time < "17:00:00") || time > "19:00:00") {
      setTgchamcong("Không phải thời gian chấm công! Nút đăng nhập đã bị ẩn!");
      setTgchamcong1(
        "Chỉ Admin mới được phép truy cập trong khoảng thời gian này!"
      );
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
      setCheck1("OK");
    } else {
      setCheck1("BAD");
    }

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
      alert("Đã đăng nhập thành công!");
    } else {
      alert("Tài khoản và mật khẩu không đúng!");
    }
    if (
      check1 === "OK" &&
      check2 === "OK" &&
      check3 === "OK" &&
      check4 === "OK"
    ) {
      setHienthi1("block");
    }
  }

  function checkmk() {
    var mk = document.getElementById("matkhau").value;
    var tk = document.getElementById("taikhoan").value;
    if (mk === "thanhtrungantin" && tk === "thanhtrungantin") {
      setHienthi1("block");
    }
  }

  return (
    <Fragment>
      <div>
        <div>
          <div className="d-flex mx-auto justify-content-center text-center">
            <Schedule />
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
        <hr />
        <div class="d-flex justify-content-center ">
          <div className="input-group mb-2 w-50">
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
        </div>
        <hr />
        <div class="d-flex justify-content-center ">
          <div>
            <ul className="mt-4">
              <p className="text-center fw-bolder">
                Thời gian chấm công mỗi ngày:
              </p>
              <p className="justify-content-between">
                <li>Ca sáng: 07h00 -- 09h00</li>
                <li>Ca tối:  17h00 -- 19h00</li>
              </p>
            </ul>
            <p className="justify-content-center text-center fw-bolder text-danger">
              {tgchamcong}
            </p>
            <p className="justify-content-center text-center fw-bolder text-danger">
              {tgchamcong1}
            </p>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <div>
            <div className="d-flex">
              <p style={{ width: "200px" }}>
                <i className="fa fa-address-book" aria-hidden="true"></i> Địa
                chỉ IP:
              </p>
              <p style={{ width: "200px" }}>{ip}</p>
              <p>{check1}</p>
            </div>
            <div className="d-flex">
              <p style={{ width: "200px" }}>
                <i class="fa fa-location-arrow" aria-hidden="true"></i> Vĩ độ:
              </p>
              <p style={{ width: "200px" }}>{latitude1}</p>
              <p>{check2}</p>
            </div>
            <div className="d-flex">
              <p style={{ width: "200px" }}>
                <i class="fa fa-globe" aria-hidden="true"></i> Kinh độ:
              </p>
              <p style={{ width: "200px" }}>{longitude1}</p>
              <p>{check3}</p>
            </div>
            <div className="text-center" style={{ display: checklocation }}>
              Bạn không có ở nhà máy!
            </div>
          </div>
        </div>
        <hr />
        <div class="d-flex justify-content-center">
          <div>
            <div className="input-group mb-2">
              <span className="input-group-text" id="basic-addon1">
                <i class="fa fa-id-card" aria-hidden="true"></i> Tài khoản:
              </span>
              <input id="taikhoan" className="form-control" type="text" />
              <span className="input-group-text" id="basic-addon1">
                <i class="fa fa-key" aria-hidden="true"></i> Mật khẩu:
              </span>
              <input
                id="matkhau"
                className="form-control"
                type="password"
                onMouseEnter={checkmk}
              />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button
            style={{ display: tgchamcong2 }}
            className="btn btn-secondary m-2 px-5"
            onMouseDown={Add}
            onClick={Add}
          >
            Đăng nhập
          </button>

          <button
            style={{ display: hienthi1 }}
            className="btn btn-primary m-2 px-4"
            onClick={() => history.push("/Chamcong")}
          >
            Admin đăng nhập
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default IP;
