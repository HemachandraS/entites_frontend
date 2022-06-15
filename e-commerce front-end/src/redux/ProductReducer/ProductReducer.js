import { ADDDATA } from "./ProductAction";

const init = {
    productData: [],
    totalPage:""
};

export const ProductReducer = (store = init, { type, payload }) => {
    switch (type) {
      case ADDDATA:return {...store,productData:payload.product,totalPage:payload.totalPage}
    default:
      return store;
  }
};
// ===================================================================
export const getProductDataFilterSort = (val) => async (dispatch) => {
  console.log(val);
  axios
    .get(
      `https://entities-01.herokuapp.com/product?${
        val.color ? `color=${val.color}` : ""
      }&${val.size ? `size=${val.size}` : ""}&${
        val.sort ? `sort=${val.sort}` : ""
      }&${val.page ? `page=${val.page}` : ""}&${
        val.perPage ? `perPage=${val.perPage}` : ""
      }`
    )
    .then((res) => dispatch(addData(res.data)))
    .catch((error) => console.log(error));
};
