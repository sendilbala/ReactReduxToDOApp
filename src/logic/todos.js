import * as actionTypes from './actions';

export const addItem = content => {
  return { type: actionTypes.ADD_ITEM, content };
};

export const deleteItem = id => {
  return { type: actionTypes.DELETE_ITEM, id };
};

export const toggleItem = id => {
  return { type: actionTypes.TOGGLE_ITEM, id };
};

export const toggleList = showCompleted => {
  return { type: actionTypes.TOGGLE_LIST };
};

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', complete: false },
    { id: 2, content: 'Buy cat food', complete: false },
    { id: 3, content: 'Water the plants', complete: true },
  ],
  showCompleted: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id != action.id)
      };

    case actionTypes.TOGGLE_ITEM:

      const itemIndex = state.items.findIndex(item => {
        return item.id === action.id;
      });

      const item = {
        ...state.items[itemIndex]
      };

      item.complete = !item.complete;

      const items = [...state.items];
      items[itemIndex] = item;
      return {
        ...state,
        items: items
      };
    case actionTypes.TOGGLE_LIST:
      const showCompleted = state.showCompleted;

      return {
        ...state,
        showCompleted: !showCompleted
      };

    default:
      return state;
  }
};

export default reducer;
