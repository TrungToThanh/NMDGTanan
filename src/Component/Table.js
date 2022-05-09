import React, { useState } from "react";
import "ka-table/style.css";
import { kaReducer, Table } from "ka-table";
import { loadData, updateData } from "ka-table/actionCreators";
import {
  ActionType,
  DataType,
  SortingMode,
  FilteringMode,
  PagingPosition,
} from "ka-table/enums";
import { kaPropsUtils } from "ka-table/utils";

import { CSVLink } from 'react-csv';

const tablePropsInit = {
  columns: [
    { key: "Id", title: "STT", dataType: DataType.String, width: 160 },
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
    { key: "Catruc3", title: "Ca trực", dataType: DataType.String },
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
  paging: {
    enabled: true,
    pageIndex: 0,
    pageSize: 15,
    pageSizes: [15, 20, 40],
    position: PagingPosition.Bottom,
  },
  sortingMode: SortingMode.None,
  filteringMode: FilteringMode.HeaderFilter,
  rowKeyField: "Id",
};

const OverviewDemo = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);

  const dispatch = async (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));

    if (action.type === ActionType.LoadData) {
      const response = await fetch("https://sheetdb.io/api/v1/2v4egm3vyukz6");
      const data = await response.json();

      // loc lay lich truc gan nhat:

      const datamini = data.filter(filterByID);

      function filterByID(item) {
        if (item.Hotentrucchinh !== "Không có người trực") {
          return true;
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
      <h5 className="mt-2"> DANH SÁCH NHÂN SỰ CHẤM CÔNG</h5>

      <div
        style={{
          marginBottom: 20,
          marginLeft: 20,
        }}
      >
        <CSVLink
          data={kaPropsUtils.getData(tableProps)}
          headers={tableProps.columns.map((c) => ({
            label: c.title,
            key: c.key,
          }))}
          filename="Lichtruc.csv"
        >
          Tải lịch trực!
        </CSVLink>
      </div>
      <Table
        {...tableProps}
        dispatch={dispatch}
        childComponents={{
          table: {
            elementAttributes: () => ({
              id: "table-to-xls",
            }),
          },
        }}
      />
    </div>
  );
};

export default OverviewDemo;
