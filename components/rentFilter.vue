<template>
  <div :class="$style.filter">
    <span :class="$style.filter__span">Rent</span>
    <select
      :class="[
        $style.filter__select,
        { [$style.dark2]: darkTheme },
        { [$style.darkAnimation]: darkTheme }
      ]"
      v-model="type"
      v-on:change="sortByType()"
    >
      <option v-for="vehicleType in allTypes" :key="vehicleType">{{
        vehicleType
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    allTypes() {
      return this.$store.getters["vehicles/getAllVehiclesTypes"];
    },
    getAllVehiclesSorted() {
      return this.$store.getters["vehicles/getAllVehiclesSorted"];
    },
    darkTheme() {
      return this.$store.getters["darkTheme/getDarkTheme"];
    }
  },
  data: () => ({
    type: "whatever"
  }),
  methods: {
    sortByType() {
      this.$store.dispatch("vehicles/sortVehicles", this.type);
    }
  }
};
</script>

<style module lang="scss">
@mixin Breakpoint376 {
  @media (min-width: 376px) {
    @content;
  }
}
@mixin Breakpoint576 {
  @media (min-width: 576px) {
    @content;
  }
}
@mixin Breakpoint768 {
  @media (min-width: 768px) {
    @content;
  }
}
@mixin Breakpoint992 {
  @media (min-width: 992px) {
    @content;
  }
}
@mixin Breakpoint1200 {
  @media (min-width: 1200px) {
    @content;
  }
}

.filter {
  &__span {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    @include Breakpoint576 {
      font-size: 40px;
    }
  }
  &__select {
    border: none;
    background-color: #f3f4f7;
    outline: none;
    cursor: pointer;
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #4959ff;
    user-select: none;
    &:hover {
      color: black;
    }
    @include Breakpoint576 {
      font-size: 40px;
    }
  }
}

.dark2 {
  background-color: #011c37;
}

.darkAnimation {
  &:hover {
    color: #fcfcfc;
  }
}
</style>
