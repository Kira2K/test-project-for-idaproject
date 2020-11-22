export const state = () => ({
  darkTheme: false
});

export const mutations = {
  changeTheme(state) {
    state.darkTheme = !state.darkTheme;
    if (state.darkTheme)
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "#012345";
    else
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "#fcfcfc";
  }
};

export const actions = {};

export const getters = {
  getDarkTheme: s => s.darkTheme
};
