<template>
  <div class="home">
    <five-clicks />
    <get-started />
    <xp-per-level-table />
    <xp-per-resource />
    <Footer />
  </div>
</template>

<script>
import FiveClicks from "@/components/fiveClicks.vue";
import GetStarted from "@/components/getStarted.vue";
import Footer from "@/components/global/Footer.vue";
import XpPerLevelTable from "@/components/xpPerLevelTable.vue";
import XpPerResource from "@/components/xpPerResource.vue";

export default {
  components: {
    FiveClicks,
    GetStarted,
    Footer,
    XpPerLevelTable,
    XpPerResource
  }
};
</script>
