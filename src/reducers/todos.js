const initialState = {
  tasks: [{ taskName: "Vezbaj jos redux, ps mrtav si", id: 1 }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
