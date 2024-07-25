import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <section className="flex justify-center">
      <div className="flex w-4/6 justify-between bg-white px-4 py-4">
        <img
          src={logo}
          className="w-[150px] h-[30px] my-[12px] cursor-pointer"
          alt="mioto"
        ></img>
        <div className="flex gap-6">
          <a className="py-[12px] px-[16px] font-medium cursor-pointer drop-shadow-2xl">
            Về Mioto
          </a>
          <a className="py-[12px] px-[16px] font-medium cursor-pointer drop-shadow-2xl">
            Trở thành chủ xe
          </a>
          <div className="bg-gray-500 w-[2px]  h-[30px] my-3"></div>
          <a className="py-[12px] px-[16px] font-medium cursor-pointer drop-shadow-2xl">
            Đăng ký
          </a>
          <a className="py-[12px] px-[16px] rounded-xl font-medium border-gray-500 border-2 cursor-pointer  hover:bg-slate-100  drop-shadow-lg">
            Đăng nhập
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
