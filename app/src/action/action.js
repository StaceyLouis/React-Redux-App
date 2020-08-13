import axios from 'axios'
export const START = "START";
export const SUCCESS = "SUCCESS";
export const LOAD = "LOAD";
export const getList = () => (dispatch) => {
  dispatch({ type: START });

  axios
    .get(`https://picsum.photos/v2/list?page=3&limit=100`)
    .then((res) => {
      console.log(res.data);

      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    action(store.dispatch);
  }
};
