<template>
  <div class="container">
    <nav class="mb-1 navbar navbar-expand-lg navbar-light" id="home">
      <a class="navbar-brand" href="#">dofamilier<span id="dot">.</span></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-4"
        aria-controls="navbarSupportedContent-4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a id="n-links" class="nav-link" href="#home"> Accueil </a>
          </li>
          <li class="nav-item">
            <a id="n-links" class="nav-link" href="#get-started"> Commencer</a>
          </li>
          <li class="nav-item">
            <a id="n-links" class="nav-link" href="#xp-per-level">
              Tableau d'xp
            </a>
          </li>
          <li class="nav-item">
            <a
              id="n-links"
              class="nav-link don"
              href="https://www.buymeacoffee.com/yacouri"
              target="blank"
            >
              <span id="don">Faire un don</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="scroll-top">
      <button id="sct" class="scroll-top-btn" @click="scrollToTop">
        <font-awesome-icon icon="arrow-up" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
nav {
  box-shadow: none;
}
.navbar-brand {
  font-size: 30px;
}
#dot {
  color: #ee9797;
}
#n-links {
  font-weight: 500;
  margin-left: 20px;
}
#don {
  color: #ffffff;
  background-color: #ee9797;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 4px;
   box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}
#don:hover {
  transition: 0.3s;
  color: #ee9797;
  background-color: transparent;
  border: 1px solid #ee9797;
}
#don {
  color: #ffffff;
}
.scroll-top {
  position: fixed;
  right: 10%;
  bottom: 5%;
}
.scroll-top-btn {
  width: 40px;
  height: 40px;
  background-color: #ee9797;
  border: none;
  outline: none;
  color: #ffffff;
  border-radius: 5px;
   box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11);
}
.scroll-top-btn:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
</style>
