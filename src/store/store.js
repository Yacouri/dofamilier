import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current_xp: 0,
    food_price_u: 0,
    food_type: "",
    xp_required: 197000,
    xp_to_up: 0,
    food_quantity: 0,
    roses_xp: 1.25,
    gapm_xp: 405,
    gapa_xp: 500,
    croquette_xp: 500,
    kamas: 0
  },
  mutations: {
    updateCurrentXp(state, current_xp) {
      state.current_xp = current_xp;
    },
    updateFoodType(state, food_type) {
      state.food_type = food_type;
    },
    updateFoodPrice(state, food_price_u) {
      state.food_price_u = food_price_u;
    },
    get_req_info(state) {
      state.xp_to_up = state.xp_required - state.current_xp;
      switch (state.food_type) {
        case "Rose des sables":
          state.food_quantity = parseInt(state.xp_to_up / state.roses_xp);
          break;
        case "Rune Ga Pme":
          state.food_quantity = parseInt(state.xp_to_up / state.gapm_xp);
          break;
        case "Rune Ga Pa":
          state.food_quantity = parseInt(state.xp_to_up / state.gapa_xp);
          break;
        case "Croquette enrichie":
          state.food_quantity = parseInt(state.xp_to_up / state.croquette_xp);
          break;
        default:
          return console.log("select a food type please");
      }
      state.kamas = parseInt(state.food_price_u * state.food_quantity);
    }
  },
  actions: {},
  modules: {}
});
