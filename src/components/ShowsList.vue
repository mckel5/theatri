<template>
  <div class="shows">
    <div v-for="show of shows" :key="show.id">
      <table>
        <tr>
          <td>Title:</td>
          <td>{{ show.title }}</td>
        </tr>
        <tr>
          <td>Date/Time:</td>
          <td>{{ new Date(show.date).toLocaleString() }}</td>
        </tr>
        <tr>
          <td>Ticket Price:</td>
          <td>
            {{
              new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(
                show.ticket_price_in_cents
              )
            }}
          </td>
        </tr>
      </table>
      <hr />
    </div>
  </div>
</template>

<script>
import supabase from '../supabase';

export default {
  name: 'ShowsList',
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

<style scoped>
* {
  text-align: left;
}

table {
  margin: auto 10%;
}

td {
  padding: 0.5em;
}
</style>
