const markFinishedAction = () => (dispatch) => {
  dispatch({
    type: 'MOVIE_FINISHED',
  });
};

const watchAgainAction = () => (dispatch) => {
  dispatch({
    type: 'MOVIE_RESTART',
  });
};

const movieLoadedAction = () => (dispatch) => {
  dispatch({
    type: 'MOVIE_LOADED',
  });
};

export default {
  markFinishedAction,
  watchAgainAction,
  movieLoadedAction,
};
