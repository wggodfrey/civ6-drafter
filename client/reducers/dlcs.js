const dlcsReducer = (state = {}, action) => {
  switch (action.type) {
    
    case 'INIT_DLCS':
      return action.payload;

    case 'TOGG_DLC':
      return state.map((dlc, i) => 
        i === action.payload
        ? {...dlc, active: !dlc.active }
        : dlc
      );

    default:
      return state;
  }
};

export default dlcsReducer;