<template>
  <div class="shows-list">
    <ShowsList />
    <BottomNavbar />
  </div>
</template>

<script>
import ShowsList from '@/components/ShowsList.vue';
import BottomNavbar from '@/components/BottomNavbar.vue';

export default {
  name: 'ShowsListView',
  components: {
    ShowsList,
    BottomNavbar,
  },
};
</script>
