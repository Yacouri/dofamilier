<template>
  <div class="container get-started" id="get-started">
    <div class="row">
      <form class="form-row col-md-8">
        <div class="col-md-12 mb-5">
          <h3 class="widget-title">Commencer</h3>
          <div class="line"></div>
        </div>
        <div class="form-group col-md-6">
          <label for="xp-ac">Xp actuelle de votre familier</label>
          <input type="text" class="form-control cf" v-model="current_xp" />
        </div>
        <div class="form-group col-md-6">
          <label for="nr">Type de nourriture</label>
          <select class="form-control nourriture" v-model="food_type">
            <option value="Rose des sables" selected>Rose des sables</option>
            <option value="Rune Ga Pa">Rune Ga Pa</option>
            <option value="Rune Ga Pme">Rune Ga Pme</option>
            <option value="Croquette enrichie">Croquette enrichie</option>
          </select>
        </div>
        <div class="form-group col-md-12">
          <label for="xp-ac">Prix unitaire de nourriture en Kamas</label>
          <input type="text" class="form-control cf" v-model="food_price_u" />
        </div>
        <div class="form-group col-md-12 mt-4">
          <button class="col-md-12 clc" @click.prevent="get_req_info">
            Click pour calculer les resultats finaux !
          </button>
        </div>
      </form>
      <div class="results col-md-4">
        <div class="col-md-12 mb-5">
          <h3 class="widget-title">Resultats</h3>
          <div class="line"></div>
        </div>
        <results
          :current_xp="current_xp"
          :food_type="food_type"
          :food_quantity="this.$store.state.food_quantity"
          :kamas="this.$store.state.kamas"
          :xp_to_up="this.$store.state.xp_to_up"
        />
      </div>
    </div>
  </div>
</template>

<script>
import results from "./results.vue";
export default {
  components: { results },
  name: "get-started",
  computed: {
    current_xp: {
      get() {
        return this.$store.state.current_xp;
      },
      set(value) {
        this.$store.commit("updateCurrentXp", parseInt(value));
      }
    },
    food_type: {
      get() {
        return this.$store.state.food_type;
      },
      set(value) {
        this.$store.commit("updateFoodType", value);
      }
    },
    food_price_u: {
      get() {
        return this.$store.state.food_price_u;
      },
      set(value) {
        this.$store.commit("updateFoodPrice", parseInt(value));
      }
    }
  },
  methods: {
    updateCurrentXp(e) {
      this.$store.commit("updateCurrentXp", e.target.value);
    },
    updateFoodType(e) {
      this.$store.commit("updateFoodType", e.target.value);
    },
    updateFoodPrice(e) {
      this.$store.commit("updateFoodPrice", e.target.value);
    },

    get_req_info() {
      this.$store.commit("get_req_info");
    }
  }
};
</script>

<style scoped>
.get-started {
  margin-top: 5%;
}
.widget-title {
  font-weight: 700;
}
.line {
  width: 70px;
  height: 10px;
  background-color: #ee9797;
  border-radius: 15px;
}
label {
  font-size: 13px;
  font-weight: 600;
}
.cf {
  border: none;
  box-shadow: 0 0 14px 0 #ddd;
  font-weight: 500;
  height: 67px;
  padding: 30px;
}
.nourriture {
  border: none;
  box-shadow: 0 0 14px 0 #ddd;
  font-weight: 500;
  height: 67px;
  padding: 20px;
}
.clc {
  color: #ffffff;
  background-color: #ee9797;
  padding: 15px;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 14px 0 #ddd;
}
.clc:hover {
  transition: 0.3s;
  color: #ee9797;
  background-color: transparent;
  border: 1px solid #ee9797;
}
</style>
