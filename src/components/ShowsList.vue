<template>
  <div>
    <!-- TODO: Honestly let's consider removing the title or putting it on the about page -->
    <TitleBar />
    <b-container>
      <b-row cols-lg="2">
        <div v-for="show of shows" :key="show.id">
          <b-col>
            <ShowItem :show="show" />
          </b-col>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue';
import ShowItem from '@/components/ShowItem.vue';

export default {
  name: 'ShowsList',
  components: {
    TitleBar,
    ShowItem,
  },
  data() {
    return {
      shows: [],
    };
  },
  async created() {
    const data = this.$localStorage.get('allShows');
    if (data) this.shows = data;
  },
};
</script>

<style scoped lang="scss"></style>
