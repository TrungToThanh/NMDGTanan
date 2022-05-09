import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Ngay: "00",
      Gio: "00",
      Hotentrucchinh: "",
    };
  }
  componentDidMount() {
    //Get API
    fetch("") //https://sheetdb.io/api/v1/2v4egm3vyukz6
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.length);
        const tt = data.length - 1;
        const giohomnay = data[tt].Gio;
        console.log(data[tt].Gio);
        console.log(data[tt].Ngay);
        this.setState({ Ngay: data[tt].Ngay, Gio: data[tt].Gio });

        if (data[tt].Hotentrucchinh !== "Không có người trực") {
          console.log(data[tt].Hotentrucchinh);
          this.setState({ Hotentrucchinh: data[tt].Hotentrucchinh });
        }

        var hotentruc = this.state.Hotentrucchinh;

        for (var i = 1; i < 15; i++) {
          const giososanh = data[tt - i].Gio;
          if (giohomnay === giososanh) {
            console.log(data[tt - i].Hotentrucchinh);
            if (data[tt - i].Hotentrucchinh !== "Không có người trực") {
              hotentruc = hotentruc + " - " + data[tt - i].Hotentrucchinh;
            }
          }
        }
        this.setState({ Hotentrucchinh: hotentruc });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {" "}
          Danh sách những cá nhân được chấm công vào lúc: {this.state.Gio} giờ,
          ngày {this.state.Ngay}:<p> {this.state.Hotentrucchinh} </p>
          <p> Lưu ý: Không chấm công nhiều lần! </p>
        </ul>
      </div>
    );
  }
}
