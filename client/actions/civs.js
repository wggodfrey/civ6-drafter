import axios from 'axios';

const initCivs = civs => ({
  type: 'INIT_CIVS',
  payload: civs,
});

const toggCiv = civ => ({
  type: 'TOGG_CIV',
  payload: civ,
});

const getCivs = () => {
  return dispatch => {
    axios.get('/civs')
      .then(({ data }) => {
        let civs = data.map(c => ({...c, active: true}))
          .sort((a,b) => {
            if (a.nation < b.nation) { return -1; }
            if (a.nation > b.nation) { return 1; }
            return 0;
          });
        console.log(civs)
        dispatch(initCivs(civs));
      });
  };
};

export { getCivs, toggCiv };