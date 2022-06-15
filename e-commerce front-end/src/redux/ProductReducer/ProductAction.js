import axios from "axios";
export const ADDDATA = "ADDDATA";

export const addData = (val) => {
  return { type: ADDDATA, payload: val };
};

export const getProductData = (val) => async (dispatch) => {
  axios
    .get("https://simple-store-01.herokuapp.com/product?page=1&perPage=20")
    .then((res) => dispatch(addData(res.data)))
    .catch((error) => console.log(error));
};
