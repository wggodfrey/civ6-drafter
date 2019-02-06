const initSettings = settings => ({
  type: 'INIT_SETTINGS',
  payload: settings,
});

const setPlayers = number => ({
  type: 'SET_PLAYERS',
  payload: number,
});

const setCivsPer = number => ({
  type: 'SET_CIVSPER',
  payload: number,
});

const setAIs = number => ({
  type: 'SET_AIS',
  payload: number,
});

const getSettings = () => (dispatch) => {
  const settings = {
    players: 2,
    civsper: 3,
    ais: 0,
  };
  dispatch(initSettings(settings));
};

export {
  getSettings, setPlayers, setCivsPer, setAIs,
};
