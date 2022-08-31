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
          <b-alert id="error-alert" :show="showError" variant="secondary">
            <h6 class="alert-heading fw-bold">Error while refreshing data</h6>
            <p>If you have cached data on your device, it will be used instead.</p>
            <p class="text-muted">{{ errorMsg }}</p>
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

    this.$root.$on('dbFetchError', (error = { message: 'No error provided.' }) => {
      this.showError = true;
      this.errorMsg = error.message;
    });
  },
};
</script>

<style scoped lang="scss">
#error-alert {
  background-color: #222;
  border-color: darkred;
  color: white;

  p {
    margin-bottom: 0;
    font-size: 11pt;
  }
}
</style>
