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
    // TODO: change to only future shows
    const { data, error } = await supabase.from('shows').select('*');

    if (error) {
      // TODO: spawn toast notification or something
      console.log(error);
      return;
    }

    this.shows = data;
  },
};
</script>

<style scoped lang="scss"></style>
