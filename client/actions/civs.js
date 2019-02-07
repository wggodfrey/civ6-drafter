import axios from 'axios';

const initCivs = civs => ({
  type: 'INIT_CIVS',
  payload: civs,
});

const toggCiv = civ => ({
  type: 'TOGG_CIV',
  payload: civ,
});

const getCivs = ruleset => dispatch => {
  axios.get('/civs/' + ruleset)
    .then(({ data }) => {
      const civs = data.map(c => ({ ...c, active: true }))
        .sort((a, b) => {
          if (a.nation < b.nation) { return -1; }
          if (a.nation > b.nation) { return 1; }
          return 0;
        });
      dispatch(initCivs(civs));
    });
};

export { getCivs, toggCiv };
