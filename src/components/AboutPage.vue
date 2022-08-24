<template>
  <b-container class="text-center">
    <b-row>
      <b-col>
        <h1 class="my-3 display-4">About</h1>
        <p>
          This app is a passion project created by Aidan Kelly, a Computer Science student at the
          University of Rhode Island.
        </p>
        <p>
          All data comes from publicly-available sources, such as Facebook, Instagram, and school
          websites.
        </p>
        <p style="font-weight: bold">
          Found an issue? Want your school to appear on the list? Discovered the meaning of life?
          Email me using the button below.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <a href="mailto:aidan_kelly@uri.edu">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <span class="visually-hidden">Email</span>
        </a>
        <a href="https://github.com/aidankay1/theatri" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" />
          <span class="visually-hidden">Source code</span>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
h1 {
  font-weight: bold;
}

svg {
  height: 2rem;
  margin: 0.5rem 1.5rem;
  color: white;
}
</style>
