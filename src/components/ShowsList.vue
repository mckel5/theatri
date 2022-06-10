<template>
  <div>
    <div v-for="show of shows" :key="show.id">
      <ShowItem :show="show" />
    </div>
  </div>
</template>

<script>
import supabase from '../js/supabase';
import ShowItem from './ShowItem.vue';

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
    const data = await this.getShowsFromSupabase();
    if (data) this.shows = data;
  },
  methods: {
    async getShowsFromSupabase() {
      // TODO: change to only future shows
      const { data, error } = await supabase.from('shows').select('*');

      if (error) {
        // TODO: spawn toast notification or something
        console.log(error);
      }

      return data;
    },
  },
};
</script>

<style scoped lang="scss"></style>
