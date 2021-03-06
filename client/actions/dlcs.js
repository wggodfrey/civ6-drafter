const initDlcs = dlcs => ({
  type: 'INIT_DLCS',
  payload: dlcs,
});

const toggDlc = dlc => ({
  type: 'TOGG_DLC',
  payload: dlc,
});

const getDlcs = () => (dispatch) => {
  const dlcs = [
    { name: 'Base', active: true },
    { name: 'Poland', active: true },
    { name: 'Australia', active: true },
    { name: 'Persia and Macedon', active: true },
    { name: 'Nubia', active: true },
    { name: 'Khmer and Indonesia', active: true },
    { name: 'Rise and Fall', active: true },
    { name: 'Gathering Storm', active: false },
  ];
  dispatch(initDlcs(dlcs));
};

export { getDlcs, toggDlc };
