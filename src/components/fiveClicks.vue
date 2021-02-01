<template>
  <div class="container five-clicks">
    <div class="row">
      <div class="col-md-8 title">
        <h1 id="clicks">5 Clicks</h1>
        <br />
        <p id="caption">
          Pour calculer l'xp requis pour maximiser<br />
          le niveau de votre familier.
        </p>
        <button class="get-started">commencer maintenant</button>
      </div>
      <div class="col-md-4 familiers">
        <img
          :src="require('@/assets/familiers_groupe.png')"
          class="mx-auto d-block"
          alt="groupe familiers"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "five-clicks"
};
</script>

<style scoped>
.title {
  margin-top: 10%;
}
#clicks {
  font-size: 50px;
  font-weight: bold;
  color: #ee9797;
}
#caption {
  font-size: 30px;
  font-weight: 700;
}
.get-started {
  color: #ffffff;
  background-color: #ee9797;
  padding: 15px;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 14px 0 #ddd;
}
.get-started:hover{
	transition:0.3s;
	color:#ee9797;
	background-color: transparent;
	border: 1px solid #ee9797;
}
.familiers {
  margin-top: 5%;
}
</style>
