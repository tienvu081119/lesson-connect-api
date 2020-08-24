import React, { Component } from "react";
import App from "../../App";

class Menu extends Component {
  render() {
    return (
      <>
        <div className="navbar navbar-default">
          <a className="navbar-brand">CALL API</a>
          <ul className="nav navbar-nav">
            <li>
              <a>Trang Chủ</a>
            </li>
            <li>
              <a>Quản Lý Sản Phẩm</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Menu;
