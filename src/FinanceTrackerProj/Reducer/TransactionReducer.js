export const transactionReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
  
      case "DELETE":
        return state.filter((t) => t.id !== action.payload);
  
      case "CLEAR":
        return [];
  
      default:
        return state;
    }
  };
  