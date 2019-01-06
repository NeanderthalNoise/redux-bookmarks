import {
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  UPDATE_BOOKMARK
} from '../actions';

const initialState = {
  bookmarks: [],
  nextId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK: {
      const { bookmarks, nextId } = state;
      const { url, label } = action;
      const bookmark = { id: nextId, url, label };
      return {
        bookmarks: [...bookmarks, bookmark],
        nextId: nextId + 1
      };
    }
    case DELETE_BOOKMARK: {
      const bookmarks = state.bookmarks.filter(
        bookmark => bookmark.id !== action.id
      );
      return {
        bookmarks, nextId: state.nextId
      };
    }
    case UPDATE_BOOKMARK: {
      const { id, url, label } = action;
      const bookmarks = state.bookmarks.map(
        bookmark => bookmark.id !== id
          ? bookmark
          : { ...bookmark, url, label }
      );
      return {
        bookmarks, nextId: state.nextId
      };
    }
    default:
      return state;
  }
}

export default reducer;
