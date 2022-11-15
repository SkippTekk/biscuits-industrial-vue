<template>
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Home Page</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="ships">Ship Manufacuring  <span class='bi-arrow-clockwise'></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-current="page" href="#">Citadel Manufacturing <span class='bi-x-lg'></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-current="page" href="#">Reprocessing <span class='bi-x-lg'></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-current="page" href="#">Ship Fitting <span class='bi-x-lg'></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-current="page" href="#">Jump Gate Refuel <span class='bi-x-lg'></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-current="page" href="#">API For Geeks <span class='bi-x-lg'></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="about">About <span class='bi-arrow-clockwise'></span></a>
            </li>
          </ul>
          <ul class="nav justify-content-end">
            <li>
              <a class="nav-link disabled" aria-current="page" href="#"><Clock /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-current="page" href="#">Login/register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-current="page" href="#">Log out</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-current="page" href="#">Toon Access</a>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
import Clock from '@/include/clock.js'

export default {
  name: 'HomeNavbar',
  components: {
    Clock
  }
}
</script>