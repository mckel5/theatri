<template>
  <div class="home">
    <b-container>
      <ShowsList />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ShowsList from '@/components/ShowsList.vue';

export default {
  name: 'HomeView',
  components: {
    ShowsList,
  },
};
</script>
