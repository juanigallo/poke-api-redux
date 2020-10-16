const InitialState = {
  isLogged: false
};

export const user = (state = InitialState, action) => {
  switch (action.type) {
    case "updateUserData":
      return {
        ...state,
        isLogged: action.value
      };
    default:
      return state;
  }
};
