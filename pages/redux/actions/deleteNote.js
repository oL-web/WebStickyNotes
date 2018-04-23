export const deleteNote = (id)=> (dispatch) => {
  dispatch({
    type: "DELETE_NOTE",
    payload: id
  });
};