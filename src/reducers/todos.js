const initialState = {
  tasks: [{ taskName: "Vezbaj jos redux", id: 1 }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
