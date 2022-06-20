<template>
  <div>{{ show }}</div>
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
