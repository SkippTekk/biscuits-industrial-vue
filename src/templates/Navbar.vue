<template>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home Page</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="ships">Ship Manufacturing <i class="fas fa-sync"></i></a>
        <a class="nav-link disabled">Citadel Manufacturing <i class="fas fa-times"></i></a>
        <a class="nav-link disabled">Reprocessing <i class="fas fa-times"></i></a>
        <a class="nav-link disabled">Ship Fitting <i class="fas fa-times"></i></a>
        <a class="nav-link disabled">Jump Gate Refuel <i class="fas fa-times"></i></a>
        <a class="nav-link" target="_blank" href="http://localhost:8081/api">API for Geeks <i class="fas fa-sync"></i></a>
        <a class="nav-link" href="about">About <i class="fas fa-sync"></i></a>
      </div>
    </div>
  </div>
</template>