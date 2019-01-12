const initialState = {
  isFinished: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_FINISHED':
      return {
        ...state,
        isFinished: true,
      };

    default:
      return state;
  }
};
