<template>
  <div>
    <!-- TODO: Honestly let's consider removing the title or putting it on the about page -->
    <TitleBar />
    <b-container>
      <!-- Shows within 24 hours -->
      <b-row class="date-separator">
        <h3>Today</h3>
      </b-row>
      <b-row cols-lg="2">
        <div
          v-for="show of shows.filter(
            // (s) => new Date(s.date).getTime() <= new Date().getTime() + 1000 * 60 * 60 * 24,
            (s) => happensToday(new Date(s.date)),
          )"
          :key="show.id"
        >
          <b-col>
            <ShowItem :show="show" />
          </b-col>
        </div>
      </b-row>
      <!-- Shows in 1-7 days -->
      <b-row class="date-separator">
        <b-col>
          <h3>This week</h3>
        </b-col>
      </b-row>
      <b-row cols-lg="2">
        <div
          v-for="show of shows.filter(
            (s) =>
              !happensToday(new Date(s.date)) &&
              new Date(s.date).getTime() <= new Date().getTime() + 1000 * 60 * 60 * 24 * 7,
          )"
          :key="show.id"
        >
          <b-col>
            <ShowItem :show="show" />
          </b-col>
        </div>
      </b-row>
      <!-- Shows later than 7 days -->
      <b-row class="date-separator">
        <b-col>
          <h3>Upcoming</h3>
        </b-col>
      </b-row>
      <b-row cols-lg="2">
        <div
          v-for="show of shows.filter(
            (s) => new Date(s.date).getTime() > new Date().getTime() + 1000 * 60 * 60 * 24 * 7,
          )"
          :key="show.id"
        >
          <b-col>
            <ShowItem :show="show" />
          </b-col>
        </div>
      </b-row>
      <b-row>
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
  mounted() {
    this.shows = this.$localStorage.get('allShows');

    // On initial load, localStorage will be empty, so this will update the ShowsList when the
    // database fetch returns
    this.$root.$on('loadComplete', (newData) => {
      this.shows = newData;
    });

    this.$root.$on('dbFetchError', (error = { message: 'No error provided.' }) => {
      this.showError = true;
      this.errorMsg = error.message;
    });
  },
  methods: {
    happensToday(date) {
      const today = new Date();
      // prevents conflict with eslint operator-linebreak rule
      // prettier-ignore
      return (
        today.getFullYear() === date.getFullYear()
        && today.getMonth() === date.getMonth()
        && today.getDate() === date.getDate()
      );
    },
  },
};
</script>

<style scoped lang="scss">
.date-separator {
  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  h3 {
    text-transform: uppercase;
    font-weight: bold;
  }
}

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
