<template>
  <div class="footer-widget">
    <footer>
      <div class="container footer-content">
        <div class="row">
          <div class="col-md-3 mt-5">
            <a class="navbar-brand logo" href="#home"
              >dofamilier<span id="dot">.</span></a
            >
          </div>
          <div class="col-md-3 mt-5">
            <a class="navbar-brand links" href="#home">Accueil</a>
          </div>
          <div class="col-md-3 mt-5">
            <a class="navbar-brand links" href="#get-started">Commencer</a>
          </div>
          <div class="col-md-3 mt-5">
            <a
              class="navbar-brand links"
              href="https://www.buymeacoffee.com/yacouri"
              target="blank"
              >Faire un don</a
            >
          </div>
        </div>
      </div>
    </footer>
    <div class="heart">
        Made with ❤️ by <a class="twitter" href="https://www.twitter.com/zyacouri" target="blank">Yacouri</a>.
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-cmp",
};
</script>

<style scoped>
footer {
  margin-top: 8%;
  background-color: #ee9797;
  min-height: 150px;
}
.logo {
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
}
#dot {
  color: #000000;
}
.links {
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 15px;
}
.heart{
    font-weight:500;
    text-align:center;
    padding:20px;
}
</style>
