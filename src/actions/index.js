import * as Typers from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () =>{
    return (dispath) =>{
        return callApi('products', 'GET', 'null').then(res=>{
            dispath(actFetchProducts(res.data));
        });
    }
}

export const actFetchProducts = (products) =>{
    return {
        type: Typers.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) =>{ 
    return dispath => {
        return callApi(`products/${id}`,'DELETE',null).then(
            res =>{
                dispath(actDeleteProduct(id))
            }
        )
    }
}

export const actDeleteProduct = (id) =>{
    return {
        type: Typers.DELETE_PRODUCT,
        id
    }
}
