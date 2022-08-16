<template>
  <div>
    <b-container fluid>
      <b-row class="p-2" id="title">
        <b-col cols="1" class="align-self-center">
          <a @click="$router.back()" @keydown.enter="$router.back()" href="#">
            <font-awesome-icon icon="fa-solid fa-arrow-left" style="height: 2rem" />
            <span class="visually-hidden">Back</span>
          </a>
        </b-col>
        <b-col cols="11">
          <h1 style="font-weight: bold">{{ show['title'] }}</h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="pt-3">
      <b-row cols="1" cols-lg="2" id="details">
        <b-col>
          <b-row>
            <b-col cols="1">
              <font-awesome-icon icon="fa-solid fa-school-flag" />
            </b-col>
            <b-col cols="11">
              <p>{{ show['performed_by'] }}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col cols="1" class="text-center">
              <font-awesome-icon icon="fa-solid fa-calendar" />
            </b-col>
            <b-col cols="11">
              <p>{{ new Date(show['date']).toLocaleDateString('en-US', { dateStyle: 'full' }) }}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col cols="1">
              <font-awesome-icon icon="fa-solid fa-clock" />
            </b-col>
            <b-col cols="11">
              <p>
                {{ new Date(show['date']).toLocaleTimeString('en-US', { timeStyle: 'short' }) }}
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col cols="1">
              <font-awesome-icon icon="fa-solid fa-ticket" />
            </b-col>
            <b-col cols="11">
              <p v-html="show['ticket_price']" style="white-space: pre-line"></p>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col cols="1">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
            </b-col>
            <b-col cols="11">
              <p v-html="show['address']" style="white-space: pre-line"></p>
            </b-col>
          </b-row>
        </b-col>
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
import supabase from '@/js/supabase';

export default {
  name: 'ShowDetails',
  props: {
    id: Number,
  },
  data() {
    return {
      show: Object,
      api_key: process.env.VUE_APP_MAPS_EMBED_KEY,
      details: Array[Array],
    };
  },
  async created() {
    const data = await this.getShowFromSupabaseById(this.id);
    if (data) [this.show] = data;
  },
  methods: {
    async getShowFromSupabaseById(id) {
      const { data, error } = await supabase.from('shows').select('*').eq('id', id);

      if (error) {
        // TODO: spawn toast notification or something
        console.log(error);
      }

      return data;
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

#title {
  background-color: black;
  a {
    color: colors.$text-primary;
  }
}

#details > .col > .row {
  border: 0;
  border-bottom: 2px;
  border-style: solid;
  padding-top: 1rem;

  // TODO: remove border from last col
  .col:last-of-type {
    border: 0 !important;
  }
}

// #icons > .col {
//   border: 0;
//   border-bottom: 3px;
//   border-style: solid;
// }

// FontAwesome icons
svg {
  // color: colors.$accent-primary;
  font-size: 16pt;
}
</style>
