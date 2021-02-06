<template>
  <div class="container" id="xp-per-level">
    <div class="mb-5">
      <h3 class="widget-title">Tableau d'xp par niveau</h3>
      <div class="line"></div>
    </div>
    <table class="table table-striped">
      <thead>
        <th id="t-header">Niveau</th>
        <th id="t-header">Xp</th>
        <th id="t-header">XP entre les niveaux</th>
      </thead>
      <tbody>
        <tr v-for="lvl in xpPerLevel" :key="lvl.level">
          <td>{{ lvl.level }}</td>
          <td>{{ lvl.xp }}</td>
          <td>{{ lvl.xp_diff }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import xpPerLevel from "@/api/xp_per_level.json";
export default {
  name: "xp-per-level",
  data() {
    return {
      xpPerLevel: xpPerLevel
    };
  }
};
</script>

<style scoped>
#xp-per-level {
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
table {
  font-size: 30px;
}
#t-header {
  font-weight: 700;
}
</style>
