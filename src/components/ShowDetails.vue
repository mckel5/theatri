<template>
  <div>
    <b-container fluid>
      <b-row class="p-2" id="title">
        <b-col cols="1" class="align-self-center">
          <a @click="$router.back()" @keydown.enter="$router.back()" title="Back">
            <font-awesome-icon icon="fa-solid fa-arrow-left" style="height: 2rem" />
            <span class="visually-hidden">Back</span>
          </a>
        </b-col>
        <b-col cols="11">
          <h1 style="font-weight: bold">{{ show['title'] }}</h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="px-4 mt-4">
      <b-row cols="1" cols-lg="2" id="details">
        <div v-for="[icon, text] of details.entries()" :key="icon">
          <b-col class="pb-2">
            <b-row>
              <b-col cols="1">
                <font-awesome-icon :icon="`fa-solid fa-${icon}`" />
              </b-col>
              <b-col cols="11">
                <p v-html="`${text ? text : '—'}`" style="white-space: pre-line"></p>
              </b-col>
            </b-row>
          </b-col>
        </div>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <div class="embed-responsive embed-responsive-1by1">
            <!-- width/height must be specified as Bootstrap doesn't resize the embed correctly -->
            <iframe
              class="embed-responsive-item"
              width="100%"
              height="400px"
              title="Google Maps preview"
              ref="embed"
              style="border: 0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              :src="`https://www.google.com/maps/embed/v1/place?key=${this.api_key}&q=${show['address']}`"
            >
            </iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ShowDetails',
  props: {
    id: Number,
  },
  data() {
    return {
      api_key: process.env.VUE_APP_MAPS_EMBED_KEY,
      show: Object,
      // if the type is changed to Map instead, errors appear about calling methods on a constructor
      details: new Map(),
    };
  },
  async created() {
    const data = this.$localStorage.get('allShows').filter((show) => show.id === this.id);
    if (data) {
      [this.show] = data;
      this.details = new Map([
        ['school-flag', this.show.performed_by],
        ['calendar', new Date(this.show.date).toLocaleDateString('en-US', { dateStyle: 'full' })],
        ['clock', new Date(this.show.date).toLocaleTimeString('en-US', { timeStyle: 'short' })],
        ['ticket', this.linkify(this.show.ticket_price)],
        ['location-dot', this.show.address],
      ]);
    }
  },
  methods: {
    // Adds <a> tags to URLs wrapped in `backticks`
    linkify(str) {
      // Prevent empty strings or strings without URLs from crashing the app
      if (!str) return '';
      if (!str.includes('`')) return str;

      const split = str.split('`');
      const url = split[1];
      let newUrl = url;
      if (!url.includes('http')) newUrl = `https://${url}`;
      return str.replaceAll(`\`${url}\``, `<a href=${newUrl}>${url}</a>`);
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/scss/colors';

p,
h1 {
  padding-left: 1rem;
}

// FontAwesome icons
svg {
  height: 1.5rem;
}

#title {
  background-color: black;

  a {
    color: colors.$text-primary;
    cursor: pointer;
  }

  h1 {
    margin-bottom: 0;
  }
}
</style>
