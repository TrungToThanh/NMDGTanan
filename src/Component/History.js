import React from "react";
import "./History.css";
import pic1 from "../Pic/Phuxuan.jpg";
import pic2 from "../Pic/Hatec.jpg";
import pic3 from "../Pic/Vestas.jpg";
import pic4 from "../Pic/Vengy.png";
import pic5 from "../Pic/Vinhthanh.png";

const History = () => {
  return (
    <div className="justify-content-center">
      <div className="d-flex justify-content-center">
        <p className="text-lg fs-5 mt-2 badge bg-primary text-wrap">
          Tóm tắt dự án:
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <ul class="timeline">
          <li class="timeline-item mb-5 flex">
            <h5 class="fw-bold">Lễ động thổ</h5>
            <p class="text-muted mb-2 fw-bold">12/2020 </p>
            <p class="text-muted">
              Công ty CP Đầu tư thủy điện Sông Lam vừa tổ chức Lễ khởi công xây
              dựng Nhà máy điện gió Tân Ân 1 - giai đoạn 1, tại ấp Xẻo Mắm, xã
              Tân Ân, huyện Ngọc Hiển, Cà Mau
            </p>
            <a href="https://baodautu.vn/ca-mau-khoi-cong-xay-dung-nha-may-dien-gio-tan-an-1---giai-doan-1-d134775.html">
              Read more
            </a>
          </li>

          <li class="timeline-item mb-5">
            <h5 class="fw-bold">Tập trung thi công</h5>
            <p class="text-muted mb-2 fw-bold">04/2021</p>
            <p class="text-muted">
              Tất cả các đơn vị, hạng mục công trình tập trung thi công 3 ca.
            </p>
          </li>

          <li class="timeline-item mb-5">
            <h5 class="fw-bold">Đóng điện trạm biến áp</h5>
            <p class="text-muted mb-2 fw-bold">29/10/2021</p>
            <p class="text-muted">
              Trạm biến áp 110kV Nhà máy Điện gió Tân Ân hòa lưới điện Quốc gia!
            </p>
          </li>

          <li class="timeline-item mb-5">
            <h5 class="fw-bold">Hòa lưới Turbine cuối cùng giai đoạn 1</h5>
            <p class="text-muted mb-2 fw-bold">30/10/2020</p>
            <p class="text-muted">
              Turbine WTG-7 hòa lưới điện Quốc Gia! Hoàn thành COD giai đoạn 1
              25MW!
            </p>
          </li>
        </ul>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <p className="text-lg fs-5 mt-2 badge bg-primary text-wrap">
            Các đơn vị tham gia vào dự án:
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <img
              src={pic1}
              className="d-block rounded justify-content-center mx-auto"
              alt="Tổng Thầu Phú Xuân"
              placeholder="Tổng Thầu Phú Xuân"
              width="100"
              height="100"
            />
            <p> Tổng thầu Phú Xuân </p>
          </div>
          <div>
            <img
              src={pic2}
              className="d-block rounded justify-content-center mx-auto"
              alt="..."
              width="100"
              height="100"
            />
            <p> Nhà thầu TBA và ĐZ HATEC </p>
          </div>
          <div>
            <img
              src={pic3}
              className="d-block rounded justify-content-center mx-auto"
              alt="..."
              width="100"
              height="100"
            />
            <p> Nhà thầu Turbine Vestas </p>
          </div>
          <div>
            <img
              src={pic4}
              className="d-block rounded justify-content-center mx-auto"
              alt="..."
              width="100"
              height="100"
            />
            <p> Thí nghiệm TBA và ĐZ VENGY</p>
          </div>
          <div>
            <img
              src={pic5}
              className="d-block rounded justify-content-center mx-auto"
              alt="..."
              width="100"
              height="100"
            />
            <p>Thí nghiệm Turbine Vĩnh Thanh </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
