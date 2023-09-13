import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (character) => character.id !== payload
        ),
      };
    case FILTER:
      if (payload === "All")
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      const filteredCharacters = state.allCharacters.filter(
        (character) => character.gender === payload
      );

      return {
        ...state,
        myFavorites: filteredCharacters,
      };

    case ORDER:
      const characterInOrder = [...state.allCharacters];
      if (payload === "A") {
        characterInOrder.sort((a, b) => a.id - b.id);
      } else if (payload === "D") {
        characterInOrder.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: characterInOrder,
      };
    default:
      return state;
  }
};

export default reducer;
