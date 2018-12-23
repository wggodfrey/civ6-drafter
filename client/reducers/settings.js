const defaultSettings = {
  hi: 'there',
};

const settingsReducer = (state = defaultSettings, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default settingsReducer;

