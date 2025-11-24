export const transactionReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TRANSACTION":
        return [...state, action.payload];
  
      case "DELETE_TRANSACTION":
        return state.filter(t => t.id !== action.payload);
  
      case "CLEAR_TRANSACTIONS":
        return [];
  
      default:
        return state;
    }
  };
  