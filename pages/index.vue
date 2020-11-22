<template>
  <main :class="[$style.vehicles__container, { [$style.dark2]: darkTheme }]">
    <div :class="$style['vehicles__filter-andNew']">
      <RentFilter />
      <AddNew />
    </div>

    <div :class="$style['vehicles__content-wrapper']">
      <SingleVehicle
        v-for="single in allVehicles"
        :key="single.id"
        v-bind:vehicle="single"
      />
    </div>
  </main>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["vehicles/getAllVehiclesSorted"].length === 0) {
      await store.dispatch("vehicles/fetchAllVehicles");
    }
  },

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

.vehicles {
  &__container {
    box-sizing: border-box;
    width: 100%;
    max-width: 1406px;
    height: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 25px 15px;
    background-color: #f3f4f7;
    border-radius: 24px;

    @include Breakpoint376 {
      margin-top: 55px;
    }

    @include Breakpoint1200 {
      border-radius: 48px;
      width: calc(100% - 130px);
      padding: 55px 65px;
    }
  }

  &__filter-andNew {
    display: flex;
    justify-content: space-between;
  }

  &__content-wrapper {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include Breakpoint576 {
      margin-top: 8px;
    }

    @include Breakpoint768 {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
}
.dark2 {
  background-color: #011c37;
}
</style>
