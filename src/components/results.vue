<template>
  <div class="container">
    <div class="results">
      <ul>
        <div class="res-wrapper">
          <li class="label">Type de nourriture</li>
          <li class="res">{{ food_type }}.</li>
        </div>
        <div class="res-wrapper">
          <li class="label">Quantite de nourriture</li>
          <li class="res">{{ food_quantity }} {{ food_type }}</li>
        </div>
        <div class="res-wrapper">
          <li class="label">Estimation en Kamas</li>
          <li class="res">{{ kamas }} Kamas</li>
        </div>
        <div class="res-wrapper">
          <li class="label">L'xp actuelle</li>
          <li class="res">{{ current_xp }} XP</li>
        </div>
        <div class="res-wrapper mb-2">
          <li class="label">L'xp requis</li>
          <li class="res">{{ xp_to_up }} XP</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "results",
  props: ["food_quantity", "food_type", "kamas", "current_xp", "xp_to_up"]
};
</script>

<style scoped>
.results {
  background-color: #ffffff;
  background-image: url("../assets/minikrone.png");
  background-size: 150px;
  background-position: right bottom;
  background-repeat: no-repeat;
  box-shadow: 0 0 14px 0 #ddd;
  border-radius: 4px;
  padding: 10px;
}
ul {
  list-style: none;
}
.label {
  margin-top: 20px;
  color: #afafaf;
  font-weight: 600;
  font-size: 13px;
}
.res {
  margin-bottom: 10px;
  color: #000000;
  font-weight: 600;
  font-size: 15px;
}
</style>
