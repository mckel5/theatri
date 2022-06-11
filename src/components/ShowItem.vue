<template>
  <b-container>
    <b-row class="show-item">
      <b-col class="col-3 d-flex mx-auto">
        <b-container id="date">
          <b-row>
            <b-col id="month">{{
              new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(show.date))
            }}</b-col>
          </b-row>
          <b-row id="day-of-month">
            <b-col>{{ new Date(show.date).getDate() }}</b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col>
        <b-container id="info-text" style="border-left: 2px solid white">
          <b-row>
            <b-col style="font-weight: bold">{{ show.title }}</b-col>
          </b-row>
          <b-row>
            <b-col>{{ show.performed_by }}</b-col>
          </b-row>
          <b-row>
            <b-col>{{
              new Date(show.date).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
              })
            }}</b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ShowItem',
  props: {
    show: Object,
  },
};
</script>

<style scoped lang="scss">
@use '@/scss/colors';

.show-item {
  margin: 1em 0;
  padding: 0.75em 0;
  background-color: colors.$bg-secondary;
  border-radius: 1em;

  .col {
    padding: 0;
  }
}

#date {
  text-align: center;
  padding: 0;
  font-size: 15pt;
  padding-right: -1em;

  #month {
    text-transform: uppercase;
    font-weight: bold;
  }

  #day-of-month {
    color: colors.$accent-primary;
    font-size: 30pt;
    margin: -0.25em;
  }
}

#info-text {
  padding-left: 2em;
}
</style>
