import React, { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = "https://sheetdb.io/api/v1/o8go4k5u2edh8";

export default function Timekeeping() {
  const [danhSach, setDanhSach] = useState([]);
  const [danhSachTC, setDanhSachTC] = useState([]);
  const [danhSachNVVH, setDanhSachNVVH] = useState([]);
  const [Songuoitruc, setSonguoitruc] = useState([]);
  const [SonguoiNVVHtruc, setSonguoiNVVHtruc] = useState([]);
  const date = new Date().toLocaleDateString("en-GB");
  const time = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  var DStruongca = [];
  var DSNVVH = [];
  var DSRender = [];
  var DSRender1 = [];
  var DSExport = [];
  var dataimport = [];

  useEffect(() => {
    try {
      axios.get(apiUrl).then((response) => {
        setDanhSach(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    DStruongca = danhSach.filter(function (truongca) {
      return truongca.Chucvu === "Trưởng Ca";
    });

    DSNVVH = danhSach.filter(function (nvvh) {
      return nvvh.Chucvu === "NVVH";
    });
  });

  function Laythongtin() {
    setDanhSachTC(DStruongca);
    setDanhSachNVVH(DSNVVH);
  }

  function Hienthidanhsach() {
    const matches = document.querySelectorAll(".truongca");
    if (matches.length === 0) {
      alert("Chưa chọn trưởng ca!");
      return;
    } else {
      for (var i = 0; i < matches.length; i++) {
        console.log(matches[i].value);
        DSExport.push(matches[i].value);
      }
    }

    const matches1 = document.querySelectorAll(".nvvh");
    if (matches1.length === 0) {
      alert("Chưa chọn nhân viên!");
      return;
    } else {
      for (var j = 0; j < matches1.length; j++) {
        console.log(matches1[j].value);
        DSExport.push(matches1[j].value);
      }
    }

    if (DSExport !== undefined) {
      if (DSExport.length > 0) {
        for (var k = 0; k < DSExport.length; k++) {
          for (var m = k + 1; m < DSExport.length; m++) {
            if (DSExport[k] === DSExport[m]) {
              alert(`Trùng dữ liệu! ${DSExport[k]}`);
              DSExport = [];
              return;
            }
          }
        }

        for (var n = 0; n < DSExport.length; n++) {
          dataimport.push({
            Id: "=ROW()-1",
            Ngay: date,
            Gio: time,
            Theloaitruc: "Trực chính",
            Hotentrucchinh: DSExport[n],
            Hotentructhe: "Không trực thế",
          });
        }
        axios({
          method: "post",
          url: "https://sheet.best/api/sheets/1d3de1a0-ed31-45d5-851d-36f61d0a9685",
          data: dataimport,
        });
        alert("Cập nhập thành công!");
      }
    }
    DSExport = [];
  }

  function SLTruongCaChamCong(e) {
    DSRender = [];
    setSonguoitruc([]);
    console.log(e.target.value);
    for (var i = 1; i <= Number(e.target.value); i++) {
      // console.log("stt", i);
      DSRender.push(i);
    }
    setSonguoitruc(DSRender);
  }

  function SLNVVHChamCong(e) {
    DSRender1 = [];
    setSonguoiNVVHtruc([]);
    console.log(e.target.value);
    for (var i = 1; i <= Number(e.target.value); i++) {
      // console.log("stt", i);
      DSRender1.push(i);
    }
    setSonguoiNVVHtruc(DSRender1);
  }

  return (
    <div>
      <div>
        <div className="d-flex justify-content-center">
          <h5 className="form-label mt-2 py-2 ">
            CHẤM CÔNG NHÀ MÁY ĐIỆN GIÓ TÂN ÂN 1
          </h5>
        </div>

        <div className="mx-auto" style={{ width: "50rem" }}>
          <div className="d-flex justify-content-center">
            <p className="input-group-text w-25 text-center">Ngày: {date}</p>
            <p className="input-group-text w-25 text-center">Giờ: {time} </p>
          </div>
        </div>
        <div className="card mt-2 py-2 mx-auto" style={{ width: "50rem" }}>
          <div className="d-flex justify-content-center ">
            <p className="text-center fw-bold">Số lượng trưởng ca trực:</p>
            <ul className="text-center">
              <select
                onChange={(e) => SLTruongCaChamCong(e)}
                onClick={Laythongtin}
              >
                {danhSachTC.map((k, index) => (
                  <option key={index}>{index}</option>
                ))}
              </select>
            </ul>
          </div>

          <ul className="text-center">
            <p className="text-danger fw-bolder"> Danh sách trưởng ca: </p>
            {Songuoitruc.map((i) => {
              return (
                <div className="d-flex justify-content-center">
                  <ol className="p-2">
                    <select className="truongca">
                      {danhSachTC.map((item) => (
                        <option key={item.id}>{item.Hoten}</option>
                      ))}
                    </select>
                  </ol>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="card mt-2 py-2 mx-auto" style={{ width: "50rem" }}>
          <div className="d-flex justify-content-center">
            <p className="text-center fw-bold">Số lượng NVVH tham gia trực:</p>
            <ul className="px-2">
              <select onChange={(e) => SLNVVHChamCong(e)} onClick={Laythongtin}>
                {danhSachNVVH.map((k, index) => (
                  <option key={index}>{index}</option>
                ))}
              </select>
            </ul>
          </div>

          <ul className="text-center">
            <p className="text-danger fw-bolder">
              Danh sách nhân viên vận hành:
            </p>
            {SonguoiNVVHtruc.map((i) => {
              return (
                <div>
                  <ol className="p-2">
                    <select
                      className="nvvh"
                      id={`${i}`}
                      onChange={(e) => {
                        console.log(document.querySelectorAll(".nvvh"));
                      }}
                    >
                      {danhSachNVVH.map((item, index) => (
                        <option key={item.id}>{item.Hoten}</option>
                      ))}
                    </select>
                  </ol>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary py-2 mt-2 "
            onClick={Hienthidanhsach}
          >
            Chấm công
          </button>
        </div>
      </div>
    </div>
  );
}
