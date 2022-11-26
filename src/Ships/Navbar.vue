<template>
  <div class="container-fluid">
    <!-- Toggle button -->
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Ship Manufacturing</a>
        </li>
        <!-- Navbar dropdown -->
        <ul class="navbar-nav">
      <!-- Dropdown -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">Faction Name
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a class="dropdown-item">Ship Class
            </a>
            <ul class="dropdown-menu dropdown-submenu">
              <li>
                <a class="dropdown-item">Ship Type</a>
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <a class="dropdown-item" href="#">Ship Name</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->
  </div>
</template>

<style>
.dropdown-menu li {
position: relative;
}
.dropdown-menu .dropdown-submenu {
display: none;
position: absolute;
left: 100%;
top: -1px;
}
.dropdown-menu .dropdown-submenu-left {
right: 100%;
left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
display: block;
}
</style>

<script>
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://localhost:8081/api/navbar')
  .then(function (response) {
    // handle success
    console.log(response);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
</script>