export default (state = {}, action) => {
  switch (action.type) {
    case 'HELLO_WORLD':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
