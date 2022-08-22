<template>
  <div class="about-page">
    <AboutPage />
    <BottomNavbar />
  </div>
</template>

<script>
import AboutPage from '@/components/AboutPage.vue';
import BottomNavbar from '@/components/BottomNavbar.vue';

export default {
  name: 'AboutView',
  components: {
    AboutPage,
    BottomNavbar,
  },
};
</script>
