const initialState = {
  isFinished: false,
  movieLoaded: false,
  auth0Pending: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_FINISHED':
      return {
        ...state,
        isFinished: true,
      };
    case 'MOVIE_RESTART':
      return {
        ...state,
        movieLoaded: false,
        isFinished: false,
      };
    case 'MOVIE_LOADED':
      return {
        ...state,
        movieLoaded: true,
      }
    case 'AUTH0_TRIGGER':
      return {
        ...state,
        auth0Pending: true,
      }
    default:
      return state;
  }
};
