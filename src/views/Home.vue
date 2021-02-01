<template>
  <div class="home">
    <five-clicks />
    <get-started />
    <Footer />
  </div>
</template>

<script>
import FiveClicks from "@/components/fiveClicks.vue";
import GetStarted from "@/components/getStarted.vue";
import Footer from "@/components/global/Footer.vue";

export default {
  components: {
    FiveClicks,
    GetStarted,
    Footer
  }
};
</script>
