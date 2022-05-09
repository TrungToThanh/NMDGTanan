import React, { useState } from "react";
import "ka-table/style.css";
import { kaReducer, Table } from "ka-table";
import { loadData, updateData } from "ka-table/actionCreators";
import {
  ActionType,
  DataType,
  SortingMode,
} from "ka-table/enums";
import "./Lichtruc.css";

const tablePropsInit = {
  columns: [
    // { key: "Id", title: "STT", dataType: DataType.String, width: 160 },
    { key: "Ngay", title: "Ngày ", dataType: DataType.String },
    { key: "Gio", title: "Giờ ", dataType: DataType.String },
    // {
    //   key: "Theloaitruc",
    //   title: "Theloaitruc",
    //   dataType: DataType.String,
    // },
    {
      key: "Hotentrucchinh",
      title: "Họ và tên",
      dataType: DataType.String,
      colGroup: { style: { minWidth: 50 } },
      width: 360,
    },
    // { key: "Catruc3", title: "Ca trực", dataType: DataType.String },
    // {
    //   key: "Hotentructhe",
    //   title: "Hotentructhe",
    //   dataType: DataType.String,
    // },
    // { key: "Email", title: "Email", dataType: DataType.String },
    // { key: "IP", title: "IP", dataType: DataType.String },
    // { key: "Photo", title: "Photo", dataType: DataType.String },
    // { key: "Toado", title: "Toado", dataType: DataType.String },
    // { key: "Ngayloc", title: "Ngayloc", dataType: DataType.String },
    // { key: "Catruc1", title: "Catruc1", dataType: DataType.String },
    // { key: "Catruc2", title: "Catruc2", dataType: DataType.String },
  ],
  singleAction: loadData(),
  sortingMode: SortingMode.None,
  rowKeyField: "Id",
};

const TableFilter = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);

  const [ht, setht] = useState("none");
  function hienthi() {
    if (ht === "none") {
      setht("block");
    } else {
      setht("none");
    }
  }

  const dispatch = async (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));

    if (action.type === ActionType.LoadData) {
      const response = await fetch("https://sheetdb.io/api/v1/2v4egm3vyukz6");
      const data = await response.json();

      // loc lay lich truc gan nhat:
      const tt = data.length - 1;
      const ngayhomnay = data[tt].Ngay;
      const giohomnay = data[tt].Gio;
      console.log(data[tt].Gio);
      console.log(data[tt].Ngay);
      const datamini = data.filter(filterByID);

      function filterByID(item) {
        if (item.Gio === giohomnay && item.Ngay === ngayhomnay) {
          if (item.Hotentrucchinh !== "Không có người trực") {
            return true;
          }
        }
        return false;
      }
      console.log("datamini");
      console.log(datamini);
      dispatch(updateData(datamini));
    }
  };

  return (
    <div>
      <center>
        <div className="lichtruc d-flex justify-content-center mt-2 ">
          <h5 > Danh sách chấm công gần đây:</h5>
          <button onClick={hienthi} className="btn btn-light btn-sm">
            <i class="fa fa-arrow-down" aria-hidden="true"></i>{" "}
            <i class="fa fa-arrow-up" aria-hidden="true"></i>{" "}
          </button>
        </div>
        <div style={{ width: "100%" }}>
            <div style={{ display: ht, width: "100%" }}>
            <Table {...tableProps} dispatch={dispatch} />
            </div>
         
        </div>
      </center>
    </div>
  );
};

export default TableFilter;
