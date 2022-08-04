<template>
  <div class="saved-shows">
    <b-container>
      <SavedShows />
    </b-container>
    <BottomNavbar />
  </div>
</template>

<script>
import SavedShows from '@/components/SavedShows.vue';
import BottomNavbar from '@/components/BottomNavbar.vue';

export default {
  name: 'SavedShowsView',
  components: {
    SavedShows,
    BottomNavbar,
  },
};
</script>
