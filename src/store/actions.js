const markFinishedAction = () => (dispatch) => {
  dispatch({
    type: 'MOVIE_FINISHED',
  });
};

export default {
  markFinishedAction,
};
