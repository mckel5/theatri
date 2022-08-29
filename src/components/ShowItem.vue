<template>
  <router-link
    :to="{ name: 'show-details', params: { id: show.id } }"
    style="text-decoration: none; color: inherit"
  >
    <b-container>
      <b-row class="show-item">
        <b-col class="col-3 d-flex mx-auto">
          <b-container id="date">
            <b-row>
              <b-col id="month">{{
                new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(show.date))
              }}</b-col>
            </b-row>
            <b-row id="day-of-month">
              <b-col>{{ new Date(show.date).getDate() }}</b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col>
          <b-container id="info-text" style="border-left: 2px solid white">
            <b-row>
              <b-col style="font-weight: bold">{{ show.title }}</b-col>
            </b-row>
            <b-row>
              <b-col>{{ show.performed_by }}</b-col>
            </b-row>
            <b-row>
              <b-col>{{
                new Date(show.date).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                })
              }}</b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col
          class="col-2 d-flex mx-auto align-items-center justify-content-center"
          id="save-button"
        >
          <font-awesome-icon
            :icon="`${fill} fa-heart`"
            @click.prevent="saved = !saved"
            :title="saved ? 'Unsave' : 'Save'"
          />
        </b-col>
      </b-row>
    </b-container>
  </router-link>
</template>

<script>
export default {
  name: 'ShowItem',
  props: {
    show: Object,
  },
  data() {
    return {
      saved: this.$localStorage.get('savedShows').includes(this.show.id),
    };
  },
  computed: {
    /*
    this.saved cannot be used due to the way arrow functions are bound in Vue

    an arrow function must be used because defining fill() { ... } breaks all variable
    accesses/assignments in <template>. not really sure why.
    */
    fill: ({ saved }) => (saved ? 'fa-solid' : 'fa-regular'),
  },
  watch: {
    saved() {
      const savedShows = this.$localStorage.get('savedShows');

      if (this.saved) {
        savedShows.push(this.show.id);
      } else {
        const index = savedShows.indexOf(this.show.id);
        savedShows.splice(index, 1);
      }

      this.$localStorage.set('savedShows', savedShows);
    },
  },
};
</script>

<style scoped lang="scss">
@use '@/scss/colors';

.show-item {
  margin: 1em 0;
  padding: 0.75em 0;
  background-color: colors.$bg-secondary;
  border-radius: 1em;

  .col {
    padding: 0;
  }
}

#date {
  text-align: center;
  padding: 0;
  font-size: 15pt;
  padding-right: -1em;

  #month {
    text-transform: uppercase;
    font-weight: bold;
  }

  #day-of-month {
    color: colors.$accent-primary;
    font-size: 30pt;
    margin: -0.25em;
  }
}

#info-text {
  padding-left: 2em;
}

#save-button {
  svg {
    height: 1.75em;
  }
}
</style>
