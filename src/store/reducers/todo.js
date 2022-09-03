import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_FILTER } from "../actions/types/todo";

const initialState = {
  allIds: [],
  byIds: {},
  filters: "all"
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      

      return {
        ...state,

        allIds: [...state.allIds, id],
        
        byIds: {
          ...state.byIds,

          [id]: {
            content,
            completed: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      

      const targetTodo = state.byIds[id];
      

      return {
        ...state,

        byIds: {
          ...state.byIds,

          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };

    }
      
    case DELETE_TODO: {
      const { id } = action.payload;
      const { allIds } = state;
      const { byIds } = state;

      const index = allIds.findIndex((el) => el === id)

      const newAllIds = [...allIds.slice(0, index), ...allIds.slice(index + 1)]

      const byIdsArr = Object.entries(byIds)
      const newByIds = Object.fromEntries([...byIdsArr.slice(0, index), ...byIdsArr.slice(index + 1)])

      return {
        ...state,

        allIds: newAllIds,

        byIds: newByIds
        
      }
    }
      
    case CHANGE_FILTER: {
      const { filter } = action.payload;


      return {
        ...state, 

        filters: filter
      }
    }

    default:
      return state;
  }
}
