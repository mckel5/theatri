<template>
  <div class="home">
    <b-container>
      <ShowsList />
    </b-container>
    <BottomNavbar />
  </div>
</template>

<script>
import ShowsList from '@/components/ShowsList.vue';
import BottomNavbar from '@/components/BottomNavbar.vue';

export default {
  name: 'HomeView',
  components: {
    ShowsList,
    BottomNavbar,
  },
};
</script>
