import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { useHistory } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: "",
      Ngay: "",
      Gio: "",
      Theloaitruc: "",
      Hotentrucchinh: "",
      Hotentructhe: "",
      Email: "",
      IP: "",
      Photo: "none",
      Toado: "",
      Ngayloc: "",
      Catruc1: "",
      Catruc2: "",
      Catruc3: "",
    };
  }

  componentDidMount() {
    const date = new Date().toLocaleDateString("en-GB");
    const time = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    document.getElementById("Ngay1").value = date;
    document.getElementById("Gio1").value = time;
  }

  submitHandler = (e) => {
    // e.preventDefault();
    // console.log(this.state);

    // Get API
    // fetch("https://sheet.best/api/sheets/1d3de1a0-ed31-45d5-851d-36f61d0a9685")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    //Khai bao bien
    const id = "=ROW()-1";
    const date = new Date().toLocaleDateString("en-GB");
    const time = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const Theloaitruc1 = document.getElementById("Theloaitruc").value;
    const Hotentrucchinh1 = "";
    const Hotentructhe1 = "";
    const Truongca = document.getElementById("Truongca").value;
    const Trucphu1 = document.getElementById("Trucphu1").value;
    const Trucphu2 = document.getElementById("Trucphu2").value;
    const Trucphu3 = document.getElementById("Trucphu3").value;
    const Trucphu4 = document.getElementById("Trucphu4").value;
    const Trucphu5 = document.getElementById("Trucphu4").value;
    const TTTruongca = document.getElementById("TTTruongca").value;
    const TTTrucphu1 = document.getElementById("TTTrucphu1").value;
    const TTTrucphu2 = document.getElementById("TTTrucphu2").value;
    const TTTrucphu3 = document.getElementById("TTTrucphu3").value;
    const TTTrucphu4 = document.getElementById("TTTrucphu4").value;
    const TTTrucphu5 = document.getElementById("TTTrucphu4").value;
    const Email1 = document.getElementById("Email").value;
    const Ngayloc1 = "";
    var ct1 = "";
    if (time > "12:00:00") {
      ct1 = "T";
    } else {
      ct1 = "N";
    }
    const ct2 = "";
    const ct3 = "";
    const photo = "=ROW()-1";

    this.setState({
      Id: id,
      Ngay: date,
      Gio: time,
      Theloaitruc: Theloaitruc1,
      Hotentrucchinh: Truongca,
      Hotentructhe: Trucphu1,
      Email: Email1,
    });
    console.log(date);
    const data = this.state;
    console.log("dât", data);
    alert("Đã cập nhập xong!");

    // // Add one line to the sheet
    // fetch("https://sheet.best/api/sheets/1d3de1a0-ed31-45d5-851d-36f61d0a9685", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((r) => r.json())
    //   .then((data) => {
    //     // The response comes here
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     // Errors are reported there
    //     console.log(error);
    //   });

    // Add two lines to the sheet

    fetch(
      "https://sheet.best/api/sheets/1d3de1a0-ed31-45d5-851d-36f61d0a9685",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            Id: id,
            Ngay: date,
            Gio: time,
            Theloaitruc: Theloaitruc1,
            Hotentrucchinh: Truongca,
            Hotentructhe: TTTruongca,
          },
          {
            Id: id,
            Ngay: date,
            Gio: time,
            Theloaitruc: Theloaitruc1,
            Hotentrucchinh: Trucphu1,
            Hotentructhe: TTTrucphu1,
          },
          {
            Id: id,
            Ngay: date,
            Gio: time,
            Theloaitruc: Theloaitruc1,
            Hotentrucchinh: Trucphu2,
            Hotentructhe: TTTrucphu2,
          },
          {
            Id: id,
            Ngay: date,
            Gio: time,
            Theloaitruc: Theloaitruc1,
            Hotentrucchinh: Trucphu3,
            Hotentructhe: TTTrucphu3,
          },
          {
            Id: id,
            Ngay: date,
            Gio: time,
            Theloaitruc: Theloaitruc1,
            Hotentrucchinh: Trucphu4,
            Hotentructhe: TTTrucphu4,
          },
          {
            Id: id,
            Ngay: date,
            Gio: time,
            Theloaitruc: Theloaitruc1,
            Hotentrucchinh: Trucphu5,
            Hotentructhe: TTTrucphu5,
          },
        ]),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
        // window.location.href = "/";
        window.location.assign("https://www.w3schools.com");
        window.location = "/";
        // window.open("/");
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  };

  hienthidanhsachtrucchinh = (e) => {
    this.setState({ Photo: "none" });
  };
  hienthidanhsachtructhe = (e) => {
    this.setState({ Photo: "block" });
  };

  checktrucphu = (e) => {
    const Truongca = document.getElementById("Truongca").value;
    const Trucphu1 = document.getElementById("Trucphu1").value;
    const Trucphu2 = document.getElementById("Trucphu2").value;
    const Trucphu3 = document.getElementById("Trucphu3").value;
    const Trucphu4 = document.getElementById("Trucphu4").value;
    const Trucphu5 = document.getElementById("Trucphu5").value;

    if (
      Trucphu1 === Trucphu2 ||
      Trucphu1 == Trucphu3 ||
      Trucphu1 === Trucphu4 ||
      Trucphu1 === Trucphu5
    ) {
      alert("Không được phép chọn trùng tên");
    }
    if (
      Trucphu2 === Trucphu3 ||
      Trucphu2 === Trucphu4 ||
      Trucphu2 === Trucphu5
    ) {
      alert("Không được phép chọn trùng tên");
    }

    if (Trucphu3 != "Không có người trực") {
      if (Trucphu4 != "Không có người trực") {
        if (Trucphu3 === Trucphu4) {
          alert("Không được phép chọn trùng tên");
        }
      }
    }

    if (Trucphu3 != "Không có người trực") {
      if (Trucphu5 != "Không có người trực") {
        if (Trucphu3 === Trucphu5) {
          alert("Không được phép chọn trùng tên");
        }
      }
    }

    if (Trucphu4 != "Không có người trực") {
      if (Trucphu5 != "Không có người trực") {
        if (Trucphu4 === Trucphu5) {
          alert("Không được phép chọn trùng tên");
        }
      }
    }
  };

  render() {
    console.log(this.state.Photo);

    return (
      <div className="Container">
        <div className="row">
          <div className="col-1 col-md-3"></div>
          <div className="col-10 col-md-6">
            <br></br>
            <h1 style={{ textAlign: "center" }}> Nhà Máy</h1>
            <h1 style={{ textAlign: "center" }}> Điện Gió Tân Ân 1</h1>

            <br></br>
            <Container fluid className="container">
              <Form className="form">
                <div className="input-group mb-2">
                  <span className="input-group-text" id="basic-addon1">
                    Ngày:
                  </span>
                  <input
                    id="Ngay1"
                    className="form-control"
                    type="text"
                    name="Ngay1"
                    readOnly
                  />
                  <span className="input-group-text" id="basic-addon1">
                    Giờ:
                  </span>
                  <input
                    id="Gio1"
                    className="form-control"
                    type="text"
                    name="Gio1"
                    readOnly
                  />
                </div>
                <Form.Field style={{ display: "none" }}>
                  <label className="form-label">Id:</label>
                  <input className="form-control" type="text" name="Id" />
                </Form.Field>

                <Form.Field style={{ display: "none" }}>
                  <label id="Theloaitruc" className="form-label">
                    Thể loại trực:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="Theloaitruc"
                  />
                </Form.Field>
                <br />
                <div className="card card-body" style={{ textAlign: "left" }}>
                  <div className="row">
                    <div className="col-md-5">
                      <h3> Hình thức trực:</h3>
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                          onClick={this.hienthidanhsachtrucchinh}
                        >
                          Trực chính
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          value=""
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          defaultChecked
                          onChange={this.hienthidanhsachtrucchinh}
                        ></input>
                      </div>
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                          onClick={this.hienthidanhsachtructhe}
                        >
                          Có trực thế
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          value=""
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          onChange={this.hienthidanhsachtructhe}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card card-body" style={{ textAlign: "left" }}>
                  <h2 style={{ textAlign: "center" }}> Danh sách trực chính</h2>
                  <p style={{ textAlign: "center" }}>
                    {" "}
                    <i>
                      (Nếu số lượng người trực <strong>hơn 5 người,</strong>{" "}
                      thực hiện chấm công nhiều lần. <br></br> Các lần sau chọn{" "}
                      <strong>"Trưởng ca: Không chấm công"</strong> ){" "}
                    </i>
                  </p>
                  <Form.Field>
                    <div>
                      <label className="form-label">Trưởng Ca:</label>
                      <select id="Truongca" className="form-control">
                        <option>Huỳnh Đông Thức</option>
                        <option>Trương Thành Công</option>
                        <option>Phạm Văn Lĩnh</option>
                        <option>Phạm Văn Lợi</option>
                        <option>Không chấm công</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">Trực phụ 1:</label>
                      <select
                        id="Trucphu1"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Nguyễn Minh Chơn</option>
                        <option>Trần Anh Kiệt</option>
                        <option>Hồ Hữu Trung</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">Trực phụ 2:</label>
                      <select
                        id="Trucphu2"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Trần Anh Kiệt</option>
                        <option>Hồ Hữu Trung</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                        <option>Nguyễn Minh Chơn</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">Trực phụ 3:</label>
                      <select
                        id="Trucphu3"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Không có người trực</option>
                        <option>Hồ Hữu Trung</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                        <option>Nguyễn Minh Chơn</option>
                        <option>Trần Anh Kiệt</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">Trực phụ 4:</label>
                      <select
                        id="Trucphu4"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Không có người trực</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                        <option>Nguyễn Minh Chơn</option>
                        <option>Trần Anh Kiệt</option>
                        <option>Hồ Hữu Trung</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">Trực phụ 5:</label>
                      <select
                        id="Trucphu5"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Không có người trực</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                        <option>Nguyễn Minh Chơn</option>
                        <option>Trần Anh Kiệt</option>
                        <option>Hồ Hữu Trung</option>
                      </select>
                    </div>
                  </Form.Field>
                </div>

                <div
                  className="card card-body"
                  style={{ display: this.state.Photo, textAlign: "left" }}
                >
                  <h1> Danh sách trực thế</h1>
                  <Form.Field>
                    {/* <label className="form-label">Trưởng Ca:</label>
              <input id='Hotentrucchinh' className="form-control" type="text" name="Hotentrucchinh" /> */}
                    <div className="form-group">
                      <label className="form-label">
                        Trực thế cho Trưởng Ca:
                      </label>
                      <select id="TTTruongca" className="form-control">
                        <option>Không trực thế</option>
                        <option>Huỳnh Đông Thức</option>
                        <option>Trương Thành Công</option>
                        <option>Phạm Văn Lĩnh</option>
                        <option>Phạm Văn Lợi</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">
                        {" "}
                        Trực phụ 1 trực thế cho:
                      </label>
                      <select
                        id="TTTrucphu1"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Không trực thế</option>
                        <option>Nguyễn Minh Chơn</option>
                        <option>Trần Anh Kiệt</option>
                        <option>Hồ Hữu Trung</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">
                        {" "}
                        Trực phụ 2 trực thế cho:
                      </label>
                      <select
                        id="TTTrucphu2"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Không trực thế</option>
                        <option>Nguyễn Minh Chơn</option>
                        <option>Trần Anh Kiệt</option>
                        <option>Hồ Hữu Trung</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">
                        Trực phụ 3 trực thế cho:
                      </label>
                      <select
                        id="TTTrucphu3"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Không trực thế</option>
                        <option>Nguyễn Minh Chơn</option>
                        <option>Trần Anh Kiệt</option>
                        <option>Hồ Hữu Trung</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">
                        Trực phụ 4 trực thế cho:
                      </label>
                      <select
                        id="TTTrucphu4"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Không trực thế</option>
                        <option>Nguyễn Minh Chơn</option>
                        <option>Trần Anh Kiệt</option>
                        <option>Hồ Hữu Trung</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                      </select>
                    </div>
                  </Form.Field>
                  <Form.Field>
                    {/* <label className="form-label">Trực phụ 1:</label>
              <input id='Hotentructhe' className="form-control" type="text" name="Hotentructhe" /> */}
                    <div className="form-group">
                      <label className="form-label">
                        Trực phụ 5 trực thế cho:
                      </label>
                      <select
                        id="TTTrucphu5"
                        className="form-control"
                        onMouseLeave={this.checktrucphu}
                        onSelect={this.checktrucphu}
                      >
                        <option>Không trực thế</option>
                        <option>Nguyễn Minh Chơn</option>
                        <option>Trần Anh Kiệt</option>
                        <option>Hồ Hữu Trung</option>
                        <option>Nguyễn Sa Nưa</option>
                        <option>Đặng Quốc Chiến</option>
                        <option>Nguyễn Văn Vinh</option>
                        <option>Hồ Trọng Nguyễn</option>
                        <option>Nguyễn Chí Lăng</option>
                        <option>Nguyễn Quốc Mi</option>
                        <option>Bùi Công Bằng</option>
                        <option>Trần Văn Điền</option>
                        <option>Lâm Phú Quốc</option>
                      </select>
                    </div>
                  </Form.Field>
                </div>

                <Form.Field style={{ display: "none" }}>
                  <label className="form-label">Email:</label>
                  <input
                    id="Email"
                    className="form-control"
                    type="text"
                    name="Email"
                  />
                </Form.Field>
                <Form.Field style={{ display: "none" }}>
                  <label className="form-label">IP:</label>
                  <input
                    id="IP"
                    className="form-control"
                    type="text"
                    name="IP"
                  />
                </Form.Field>
                <Form.Field style={{ display: "none" }}>
                  <label className="form-label">Tọa độ:</label>
                  <input
                    id="Toado"
                    className="form-control"
                    type="text"
                    name="Toado"
                  />
                </Form.Field>
                <Form.Field style={{ display: "none" }}>
                  <label className="form-label">Ngày lọc:</label>
                  <input
                    id="Ngayloc"
                    className="form-control"
                    type="text"
                    name="Ngayloc"
                  />
                </Form.Field>
                <Form.Field style={{ display: "none" }}>
                  <label className="form-label">Ca trực 1:</label>
                  <input
                    id="Catruc1"
                    className="form-control"
                    type="text"
                    name="Catruc1"
                    v
                  />
                </Form.Field>
                <Form.Field style={{ display: "none" }}>
                  <label className="form-label">Ca trực 2:</label>
                  <input
                    id="Catruc2"
                    className="form-control"
                    type="text"
                    name="Catruc2"
                  />
                </Form.Field>
                <Form.Field style={{ display: "none" }}>
                  <label className="form-label">Ca trực 3:</label>
                  <input
                    id="Catruc3"
                    className="form-control"
                    type="text"
                    name="Catruc3"
                  />
                </Form.Field>
                <br></br>
              </Form>
              <div className="card row" style={{ textAlign: "left" }}>
                <Button
                  className="btn btn-secondary"
                  onClick={this.submitHandler}
                >
                  {" "}
                  <i className="fa fa-check-circle" aria-hidden="true"></i> Chấm
                  công{" "}
                </Button>
              </div>
            </Container>
          </div>
          <div className="col-1 col-md-3"></div>
        </div>
      </div>
    );
  }
}
