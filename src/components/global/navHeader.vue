<template>
  <div class="container">
    <!--Navbar -->
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
    <!--/.Navbar -->
  </div>
</template>

<script>
export default {
  name: "nav-header",
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
  box-shadow: 0 0 14px 0 #ddd;
}
#don:hover{
	transition:0.3s;
	color:#ee9797;
	background-color: transparent;
	border: 1px solid #ee9797;
}
#don {
  color: #ffffff;
}
</style>
