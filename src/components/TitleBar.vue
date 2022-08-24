<template>
  <b-container fluid class="py-2">
      <h1>Theat<span id="accented">RI</span></h1>
  </b-container>
</template>

<script>
export default {
  name: 'TitleBar',
};
</script>

<style scoped lang="scss">
@use '@/scss/colors';

* {
  margin: 0;
}

h1 {
  font-style: italic;
  font-weight: bold;
  font-size: 32pt;
  text-align: center;

  #accented {
    color: colors.$accent-primary;
  }
}
</style>
