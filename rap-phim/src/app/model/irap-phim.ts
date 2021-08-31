import {IXuatChieu} from "./ixuat-chieu";

export interface IRapPhim {
  id?: number;
  maXuatChieu?: string;
  ngayChieu?: string;
  soLuongVe?: number;
  xuatChieu?: IXuatChieu;
}
