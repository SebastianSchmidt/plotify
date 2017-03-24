import { combineReducers } from "redux";
import {
  ADD_CHARACTER,
  CHANGE_CHARACTER_NAME,
  SET_FILTER,
  SELECT_CHARACTER,
  UNSELECT_CHARACTER
} from "./action-types";

function characters(state = [], action) {
  switch (action.type) {

    case ADD_CHARACTER:
      return state.concat(action.payload);

    case CHANGE_CHARACTER_NAME:

      return state.map((character, index) => {
        if (character.id == action.payload.id) {
          return Object.assign(Object.create(character), character, {
            name: action.payload.name
          });
        } else {
          return character;
        }
      });

    default:
      return state;

  }
}

function filter(state = "", action) {
  switch (action.type) {

    case SET_FILTER:
      return action.payload.filter;

    default:
      return state;

  }
}

function selected(state = { id: null, newCharacter: false }, action) {
  switch (action.type) {

    case SELECT_CHARACTER:
      return {
        id: action.payload.id,
        newCharacter: false
      };

    case ADD_CHARACTER:
      return {
        id: action.payload.id,
        newCharacter: true
      };

    case UNSELECT_CHARACTER:
      return {
        id: null,
        newCharacter: false
      };

    default:
      return state;

  }
}

const charactersReducer = combineReducers({
  characters,
  filter,
  selected
});

export default charactersReducer;
