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

      const index = state.allIds.findIndex((el) => el === id)

      const beforeAllIds = state.allIds.slice(0, index)
      const afterAllIds = state.allIds.slice(index + 1)
      const newAllIds = [...beforeAllIds, ...afterAllIds]

      const byIdsArr = Object.entries(state.byIds)
      const beforeByIds = byIdsArr.slice(0, index)
      const afterByIds = byIdsArr.slice(index + 1)
      const newByIds = Object.fromEntries([...beforeByIds, ...afterByIds])

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
