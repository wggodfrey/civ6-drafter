const settingsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_SETTINGS':
      return action.payload;

    case 'SET_PLAYERS':
      return { ...state, players: action.payload };

    case 'SET_CIVSPER':
      return { ...state, civsper: action.payload };

    case 'SET_AIS':
      return { ...state, ais: action.payload };

    default:
      return state;
  }
};

export default settingsReducer;
