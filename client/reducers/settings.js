const settingsReducer = (state = {}, action) => {
  
  switch (action.type) {

    case 'INIT_SETTINGS':
      return action.payload;

    case 'TOGG_MENU1':
      return {...state, menu1open: !state.menu1open};

    case 'TOGG_MENU2':
      return {...state, menu2open: !state.menu2open};

    case 'SET_PLAYERS':
      return {...state, players: action.payload};

    case 'SET_CIVSPER':
      return {...state, civsper: action.payload};

    default:
      return state;
  }
};

export default settingsReducer;