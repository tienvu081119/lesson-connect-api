import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
    var statusClass = product.status ? 'warining' : 'default';
    return (
      <>
        <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <span className={`label label-${statusClass}`}>
                {statusName}
            </span>
          </td>
          <td>
            <button type="button" class="btn btn-success mr-10">
              Sửa
            </button>

            <button type="button" class="btn btn-danger mr-10">
              Xóa
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default ProductItem;
