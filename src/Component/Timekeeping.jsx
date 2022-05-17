import React, { Component, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { async } from "@firebase/util";

const apiUrl = "https://sheetdb.io/api/v1/vpm85ghelydsv";

function callApi() {
  return Promise.resolve();
}

export default function Timekeeping() {
  const [danhSach, setDanhSach] = useState([]);
  const [danhSachTC, setDanhSachTC] = useState([]);
  const [danhSachNVVH, setDanhSachNVVH] = useState([]);
  const [Songuoitruc, setSonguoitruc] = useState([]);
  const [SonguoiNVVHtruc, setSonguoiNVVHtruc] = useState([]);

  var DStruongca = [];
  var DSNVVH = [];
  var DSRender = [];
  var DSRender1 = [];

  useEffect(() => {
    console.log(Songuoitruc);
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
      return truongca.Chucvu == "Trưởng Ca";
    });

    DSNVVH = danhSach.filter(function (nvvh) {
      return nvvh.Chucvu == "NVVH";
    });
  });

  function hienthi() {
    // console.log(danhSach);
    console.log(Songuoitruc);
    const sl = Songuoitruc.length + 1;
    setSonguoitruc([...Songuoitruc, { ...sl }]);

    // console.log(soluong);
  }

  function Laythongtin() {
    setDanhSachTC(DStruongca);
    setDanhSachNVVH(DSNVVH);
  }

  function Hienthidanhsach() {
    const matches = document.querySelectorAll(".truongca");
    for (var i = 0; i < matches.length; i++) {
      console.log(matches[i].value);
    }
    const matches1 = document.querySelectorAll(".nvvh");
    for (var j = 0; j < matches1.length; j++) {
      console.log(matches1[j].value);
    }
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
        <p className="form-label">CHẤM CÔNG NHÀ MÁY ĐIỆN GIÓ TÂN ÂN 1</p>
        <div>
          <div className="d-flex justify-content-center ">
            <ul>
              Số lượng trưởng ca trực:
              <select onChange={(e) => SLTruongCaChamCong(e)}>
                {danhSachTC.map((k, index) => (
                  <option key={index}>{index}</option>
                ))}
              </select>
            </ul>
          </div>

          <ul>
            Danh sách trưởng ca:
            {Songuoitruc.map((i) => {
              return (
                <div>
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
        <div>
          <div className="d-flex justify-content-center ">
            <ul>
              Số lượng NVVH tham gia trực:
              <select onChange={(e) => SLNVVHChamCong(e)}>
                {danhSachNVVH.map((k, index) => (
                  <option key={index}>{index}</option>
                ))}
              </select>
            </ul>
          </div>

          <ul>
            Danh sách nhân viên vận hành:
            {SonguoiNVVHtruc.map((i) => {
              return (
                <div>
                  <ol className="p-2">
                    <select className="nvvh">
                      {danhSachNVVH.map((item) => (
                        <option key={item.id}>{item.Hoten}</option>
                      ))}
                    </select>
                  </ol>
                </div>
              );
            })}
          </ul>
        </div>

        <button onClick={Laythongtin}> Lay Thoong tin </button>
        <button onClick={Hienthidanhsach}> Hien thi danh sach </button>
      </div>
    </div>
  );
}
