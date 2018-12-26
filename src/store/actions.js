const helloAction = () => (dispatch) => {
  dispatch({
    type: 'HELLO_WORLD',
    payload: 'Hi cosmos, my name is redux',
  });
};

export default helloAction;
