<template>
  <b-container>
    <b-row>
      <h1>{{ show['title'] }}</h1>
    </b-row>
    <b-row cols="1" cols-lg="2">
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
          <b-col cols="1">
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
            <p v-html="show['ticket_price']"></p>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col cols="1">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
          </b-col>
          <b-col cols="11">
            <p v-html="show['address']"></p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
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

<style></style>
