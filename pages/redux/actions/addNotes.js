export const addNotes = (notes)=> (dispatch) => {
  dispatch({
    type: "ADD_NOTES",
    payload: notes
  });
};