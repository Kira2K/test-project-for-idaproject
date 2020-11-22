<template>
  <div>
    <Navbar />

    <Nuxt v-if="allVehicles !== 'error'" />
    <ErrorPage v-if="allVehicles == 'error'" />
  </div>
</template>

<script>
export default {
  computed: {
    allVehicles() {
      return this.$store.getters["vehicles/getAllVehiclesSorted"];
    },
    darkTheme() {
      return this.$store.getters["darkTheme/getDarkTheme"];
    }
  }
};
</script>
<style module lang="scss">
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

body,
p,
h1,
h2,
h3,
h4,
h5,
ul,
li {
  margin: 0px 0px;
}

* {
  outline: none;
  box-sizing: border-box;
}
</style>
