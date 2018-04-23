export const changeAccent = (color)=> (dispatch) => {
  dispatch({
    type: "CHANGE_ACCENT",
    payload: color
  });
};