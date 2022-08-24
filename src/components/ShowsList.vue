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
      </b-row>
    </b-container>
  </div>
</template>

<script>
import supabase from '@/js/supabase';
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
    };
  },
  async created() {
    const data = await this.getShowsFromSupabase();
    if (data) this.shows = data;
  },
  methods: {
    async getShowsFromSupabase() {
      const currentDate = new Date().toISOString();
      const { data, error } = await supabase
        .from('shows')
        .select('*')
        .gte('date', currentDate)
        .order('date');

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
