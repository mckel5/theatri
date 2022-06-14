<template>
  <div>
    <b-navbar fixed="bottom" class="justify-content-center">
      <b-navbar-nav>
        <b-nav-item class="mx-5">
          <font-awesome-icon icon="fa-solid fa-masks-theater" />
          <br />
          All Shows
        </b-nav-item>
        <b-nav-item class="mx-5">
          <font-awesome-icon icon="fa-solid fa-heart" />
          <br />
          Saved
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'BottomNavbar',
};
</script>

<style scoped lang="scss">
nav {
  background-color: black;
  height: 4.5rem !important;

  .nav-link {
    color: white !important;
    font-size: 10pt;
    text-align: center;

    .svg-inline--fa {
      height: 1.5rem;
    }
  }
}
</style>
