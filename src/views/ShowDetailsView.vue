<template>
  <div class="show-details">
    <b-container>
      <ShowDetails />
    </b-container>
    <BottomNavbar />
  </div>
</template>

<script>
import ShowDetails from '@/components/ShowDetails.vue';
import BottomNavbar from '@/components/BottomNavbar.vue';

export default {
  name: 'ShowDetailsView',
  components: {
    ShowDetails,
    BottomNavbar,
  },
};
</script>

<style></style>
