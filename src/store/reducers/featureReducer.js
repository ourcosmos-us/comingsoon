const initialState = {
  isFinished: false,
  movieLoaded: false,
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
    default:
      return state;
  }
};
