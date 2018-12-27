const initSettings = settings => ({
  type: 'INIT_SETTINGS',
  payload: settings,
});

const toggMenu1 = () => ({
  type: 'TOGG_MENU1',
  payload: null,
});

const toggMenu2 = () => ({
  type: 'TOGG_MENU2',
  payload: null,
});

const setPlayers = number => ({
  type: 'SET_PLAYERS',
  payload: number,
});

const setCivsPer = number => ({
  type: 'SET_CIVSPER',
  payload: number,
});

const getSettings = () => {
  return dispatch => {
    const settings = {
      players: 2,
      civsper: 3,
      menu1open: false,
      menu2open: false,
    };
    dispatch(initSettings(settings));
  }
};

export { getSettings, setPlayers, setCivsPer, toggMenu1, toggMenu2 };