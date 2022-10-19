<template>
  <div>
    <b-container>
      <b-row cols-lg="2">
        <div>
          <div v-for="show of shows" :key="show.id">
            <b-col>
              <ShowItem :show="show" />
            </b-col>
          </div>
        </div>
      </b-row>
      <b-row>
        <div v-if="shows.length === 0">
          <p class="mt-3 text-center">
            You haven't saved any shows yet. Go to All Shows and tap the heart icon on any show you
            want to save.
          </p>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ShowItem from '@/components/ShowItem.vue';

export default {
  name: 'ShowsList',
  components: {
    ShowItem,
  },
  data() {
    return {
      shows: [],
    };
  },
  async created() {
    const savedShows = this.$localStorage.get('savedShows');
    const data = this.$localStorage.get('allShows').filter((show) => savedShows.includes(show.id));
    if (data) this.shows = data;
  },
};
</script>

<style scoped lang="scss"></style>
