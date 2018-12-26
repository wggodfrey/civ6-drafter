const civsReducer = (state = [], action) => {
  switch (action.type) {

    case 'INIT_CIVS':
      return action.payload;

    case 'TOGG_CIV':
      return state.map((civ, i) => 
        i === action.payload
        ? {...civ, active: !civ.active }
        : civ
      );

    default:
      return state;
  }
};

export default civsReducer;