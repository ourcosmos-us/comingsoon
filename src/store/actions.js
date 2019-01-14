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

const auth0Login = () => (dispatch) => {
  dispatch({
    type: 'AUTH0_TRIGGER',
  })
} 

export default {
  auth0Login,
  movieLoadedAction,
  markFinishedAction,
  watchAgainAction,
};
