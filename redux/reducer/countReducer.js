const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT_INCRESE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'COUNT_INCRESE_by_5':
      return {
        ...state,
        count: state.count + 5,
      };
    case 'COUNT_DECRESE':
      if(state.count>0)
      {
        return {
            ...state,
            count: state.count - 1,
          };
      }
      else
      {
        return {
            ...state,
            count: 0,
          };

      }
    case 'COUNT_DECRESE_by_5':
        if(state.count>5)
      {
        return {
            ...state,
            count: state.count - 5,
          };
      }
      else
      {
        return {
            ...state,
            count: 0,
          };

      }
      

    default:
      return state;
  }
};
