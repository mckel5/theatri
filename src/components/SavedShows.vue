<template>
  <div>
    <b-row cols-lg="2">
      <div v-for="show of shows" :key="show.id">
        <b-col>
          <ShowItem :show="show" />
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
import supabase from '@/js/supabase';
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
    const data = await this.getSpecifiedShowsFromSupabase(savedShows);
    if (data) this.shows = data;
  },
  methods: {
    async getSpecifiedShowsFromSupabase(ids) {
      const currentDate = new Date().toISOString();
      const { data, error } = await supabase
        .from('shows')
        .select('*')
        .in('id', ids)
        // prevents loading past shows
        .gte('date', currentDate);

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
