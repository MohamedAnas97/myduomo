const Reducer = (state: any, action: any) => {
    switch (action.type) {
      case "SET_ALL_PRODUCT_DATA":
        return {
          ...state,
          allproduct: action.payload,
        };
      default:
        return state;
    }
  };
  export default Reducer;
  