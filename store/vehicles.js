import { getVehicles } from "~/fakeAPI/request";

export const state = () => ({
  allVehicles: [],
  sortType: "whatever"
});

export const mutations = {
  setAllVehicles(state, allVehicles) {
    state.allVehicles = allVehicles;
  },

  setSortType(state, sortType) {
    state.sortType = sortType;
  },

  addNewVehicle(state, vehicle) {
    console.log(state.allVehicles);
    console.log(vehicle);
    state.allVehicles.push(vehicle);
    console.log(state.allVehicles);
  }
};

export const actions = {
  async fetchAllVehicles({ commit }) {
    const allVehicles = await getVehicles()
      .then(data => {
        console.log(data.length);
        commit("setAllVehicles", data);
      })
      .catch(err => {
        console.log(err);
        commit("setAllVehicles", "error");
      });
  },

  sortVehicles({ commit }, type) {
    commit("setSortType", type);
  }
};

export const getters = {
  getAllVehiclesSorted: s => {
    if (s.sortType !== "whatever") {
      return s.allVehicles.filter(vehicle => vehicle.type == s.sortType);
    } else {
      return s.allVehicles;
    }
  },

  getAllVehiclesTypes: s => {
    let types = ["whatever"];
    types.push("custom");
    for (let i = 0; i < s.allVehicles.length; i++) {
      if (!types.includes(s.allVehicles[i].type)) {
        types.push(s.allVehicles[i].type);
      }
    }

    return types;
  }
};
