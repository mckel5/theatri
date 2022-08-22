<template>
  <div>
    <b-navbar fixed="bottom" class="justify-content-center">
      <b-navbar-nav>
        <!--
          Adding .nav-item/.nav-link directly to <router-link> instead of using
          <b-nav-item> prevents conflicts between the <router-link> and the <a> that
          Bootstrap Vue automatically inserts into <b-nav-item>
         -->
        <router-link to="/" class="nav-item nav-link">
          <font-awesome-icon icon="fa-solid fa-masks-theater" />
          <span class="icon-label">All Shows</span>
        </router-link>

        <router-link to="/saved" class="nav-item nav-link">
          <font-awesome-icon icon="fa-solid fa-heart" />
          <span class="icon-label">Saved</span>
        </router-link>

        <router-link to="/about" class="nav-item nav-link">
          <font-awesome-icon icon="fa-regular fa-circle-question" />
          <span class="icon-label">About</span>
        </router-link>
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
    color: colors.$text-secondary;

    &:hover,
    &:focus {
      color: colors.$text-primary;
    }

    // The '.nav-item' is required for specificity, otherwise the style won't apply
    // https://stackoverflow.com/a/55134066
    &.router-link-exact-active.nav-item {
      // color: colors.$text-secondary;
      color: colors.$text-primary;
    }
  }

  .nav-item {
    width: 6rem;
    font-size: 10pt;
    text-align: center;

    .svg-inline--fa {
      height: 1.5rem;
      // display labels under icons
      display: block;
      // center icons relative to labels
      margin: auto;
      margin-bottom: 0.25rem;
    }
  }
}
</style>
