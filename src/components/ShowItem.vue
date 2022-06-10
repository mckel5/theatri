<template>
  <b-row>
    <b-col>
      <p>{{ new Date(show.date).getMonth() }}</p>
    </b-col>
    <b-col>
      <p>{{ new Date(show.date).getDate() }}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'ShowItem',
  props: {
    show: Object,
  },
};
</script>

<style scoped lang="scss">
</style>
