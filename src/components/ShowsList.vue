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
        <b-col>
          <b-alert :show="showError" variant="danger" fade>
            <h4 class="alert-heading">Error while fetching data</h4>
            <p>{{ errorMsg }}</p>
          </b-alert>
        </b-col>
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
      showError: false,
      errorMsg: '',
    };
  },
  async created() {
    const data = this.$localStorage.get('allShows');
    if (data) this.shows = data;

    this.$root.$on('dbFetchError', (error) => {
      this.showError = true;
      this.errorMsg = error.message;
    });
  },
};
</script>

<style scoped lang="scss"></style>
