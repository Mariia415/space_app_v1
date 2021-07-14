const initialState = {
  date: 39,
  news: 39,
};

export const reducerMe = (state = initialState, action) => {
  switch (action.type) {
    case "Masha": {
      return {
        ...state,
        date: action.payload.birthday,
        news: action.payload.age,
      };
    }
  }
};
