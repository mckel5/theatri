<template>
  <div>
    <b-navbar fixed="bottom" class="justify-content-center">
      <b-navbar-nav>
        <b-nav-item class="mx-5">
          <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-masks-theater" />
            <span class="icon-label">All Shows</span>
          </router-link>
        </b-nav-item>

        <b-nav-item class="mx-5">
          <router-link to="/saved">
            <font-awesome-icon icon="fa-solid fa-heart" />
            <span class="icon-label">Saved</span>
          </router-link>
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
@use '@/scss/colors';

nav {
  background-color: colors.$bg-secondary;
  height: 4.5rem !important;

  a {
    text-decoration: none;
    color: colors.$text-primary;
  }

  .nav-link {
    color: colors.$text-primary !important;
    font-size: 10pt;

    .svg-inline--fa {
      height: 1.5rem;
      // display labels under icons
      display: block;
      // center icons relative to labels
      margin: auto;
      margin-bottom: 0.25em;
    }
  }
}
</style>
