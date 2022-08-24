<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@use 'scss/colors';
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');

#app,
html {
  // adding 'html' to this rule removes white spaces at top and bottom of page
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: colors.$text-primary;
  background: colors.$bg-primary;

  body {
    margin-bottom: 4.5rem;
  }
}
</style>
