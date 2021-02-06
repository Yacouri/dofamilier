<template>
  <div class="container" id="xp-per-resource">
    <div class="mb-5">
      <h3 class="widget-title">Tableau d'xp de ressources</h3>
      <div class="line"></div>
    </div>
    <div class="search-resource">
      <label>Cherche un ressource</label>
      <input
        type="text"
        class="form-control col-md-12 cf mb-3"
        placeholder="Eau calme..."
        v-model="query"
      />
    </div>
    <table class="table table-striped">
      <thead>
        <th id="t-header">Nom</th>
        <th id="t-header">Xp</th>
        <th id="t-header">Quantite</th>
      </thead>
      <tbody>
        <tr v-for="res in filterResource" :key="res.name">
          <td>{{ res.name }}</td>
          <td>{{ res.xp }}</td>
          <td>{{ res.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import xpPerRessource from "@/api/xp_per_resource.json";
export default {
  name: "xp-per-resource",
  data() {
    return {
      xpPerRessource: xpPerRessource,
      query: ""
    };
  },
  computed: {
    filterResource() {
      //var filtering = new RegExp(this.query, "i");
      return this.xpPerRessource.filter(resource => {
        return resource.name.match(this.query);
      });
    }
  }
};
</script>

<style scoped>
#xp-per-resource {
  margin-top: 10%;
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
table {
  font-size: 30px;
}
#t-header {
  font-weight: 700;
}
</style>
