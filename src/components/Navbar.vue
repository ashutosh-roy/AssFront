<template>
  <div>
    <b-navbar class="navbar" toggleable="lg">
      <b-navbar-brand href="#">SimplifyCV</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right href="#">Home</b-nav-item>

          <b-nav-item href="#">Contact Us</b-nav-item>

          <b-nav-item href="#">Link</b-nav-item>
          <b-button href="#" class="my-2 my-sm-0">Login/Singup</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar {
  border-bottom: 2px solid black;
  padding: 20px;
}
</style>
