<template>
  <div>
    <b-container>
      <b-row id="logo" class="mt-3">
        <h1>Theat<span id="accented">RI</span></h1>
      </b-row>
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

<style scoped lang="scss">
@use '@/scss/colors';

#logo h1 {
  font-style: italic;
  font-weight: bold;
  font-size: 32pt;
  text-align: center;

  #accented {
    color: colors.$accent-primary;
  }
}
</style>
