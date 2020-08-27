import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            callApi(`products/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            });
        }
    }

    onChange = (e) => {        
        var target = e.target;      
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            chkbStatus: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        if (id) { // update
            callApi(`products/${id}`,'PUT',{
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res=>{
                history.goBack();
            });
        }
        else {
            callApi('products', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            })
        }
    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSave}>
                    <legend>Thêm Sản Phẩm</legend>

                    <div className="form-group">
                        <label >Tên Sản Phẩm:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Giá Sản Phẩm:</label>
                        <input type="text" className="form-control" name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Trạng Thái:</label>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chklbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus}
                            />
                          Còn Hàng
                      </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger mr-10">
                        Trở Lại
                  </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>

            </div>
        );
    }
}

export default ProductActionPage;