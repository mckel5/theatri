<template>
  <b-container fluid>
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
  font-style: italic;
  font-weight: bold;
  font-size: 32pt;
  text-align: center;

  #accented {
    color: colors.$accent-primary;
  }
}
</style>
