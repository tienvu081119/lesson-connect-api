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

export const actAddProductRequest = (product) =>{
    return dispath =>{
        return callApi('products','POST',product).then(res=>{
            dispath(actAddProduct(res.data));
        })
    }

}

export const actAddProduct = (product) =>{
    return{
        type: Typers.ADD_PRODUCT,
        product
    }
}

export const actGetProdctRequest = (id) =>{
    return dispath =>{
        return callApi(`products/${id}`, 'GET', null).then(res=>{   
            dispath(actGetProdct(res.data));
        });
    }
}

export const actGetProdct = (product) =>{
    return {
        type: Typers.EDIT_PRODUCT,
        product
    }
}