<template>
  <div :class="$style.single__container">
    <img :src="vehicle.image" alt="" :class="$style['single__photo']" />

    <div :class="$style.single__information">
      <h1 :class="[$style.single__name, { [$style.white]: darkTheme }]">
        {{ vehicle.name }}
      </h1>

      <ul :class="[$style.single__menu, $style.menu]">
        <li>
          <NuxtLink
            :active-class="$style.active"
            :class="[$style.menu__single, { [$style.whiteHover]: darkTheme }]"
            :to="'/single/' + vehicle.id + '/specifications'"
            >Specifications</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :active-class="$style.active"
            :class="[$style.menu__single, { [$style.whiteHover]: darkTheme }]"
            :to="'/single/' + vehicle.id + '/team'"
            >Team</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :active-class="$style.active"
            :class="[$style.menu__single, { [$style.whiteHover]: darkTheme }]"
            :to="'/single/' + vehicle.id + '/rentTerms'"
            >Rent terms</NuxtLink
          >
        </li>
      </ul>

      <p :class="[$style.single__description, $style.text]">
        {{ vehicle.description }}
      </p>

      <NuxtChild v-bind:vehicle="vehicle" />

      <div
        :class="[$style['single__rent-panel'], { [$style.dark2]: darkTheme }]"
      >
        <p
          :class="[$style['single__rent-info'], { [$style.white]: darkTheme }]"
        >
          Rent for
          <span :class="$style['single__rent-info-pink']"
            >{{ vehicle.rent }} $/h</span
          >
        </p>
        <button
          :class="[
            $style['single__rent-button'],
            { [$style.darkButton]: darkTheme }
          ]"
        >
          <p :class="$style['single__rent-button-text']">Rent now</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["vehicles/getAllVehiclesSorted"].length === 0) {
      await store.dispatch("vehicles/fetchAllVehicles");
    }
  },

  computed: {
    getVehicle() {
      return this.$store.getters["vehicles/getAllVehiclesSorted"];
    },
    darkTheme() {
      return this.$store.getters["darkTheme/getDarkTheme"];
    }
  },

  data() {
    return {
      vehicle: {}
    };
  },

  mounted() {
    this.vehicle = this.getVehicle.find(
      vehicle => vehicle.id == location.pathname.split("/")[2]
    );

    console.log(this.vehicle);
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

.single {
  &__container {
    position: relative;
    box-sizing: border-box;
    width: calc(100%-30px);
    height: 500px;
    max-width: 1406px;
    margin: 8px 15px 0px 15px;
    display: flex;
    flex-direction: column;
    @include Breakpoint376 {
      margin-top: 55px;
    }

    @include Breakpoint992 {
      flex-direction: row;
      justify-content: space-between;
    }

    @include Breakpoint1200 {
      border-radius: 48px;
      margin: 55px auto 0px auto;
      width: calc(100% - 130px);
    }
  }

  &__photo {
    max-width: 100%;
    display: block;
    border-radius: 16px;

    @include Breakpoint992 {
      width: 55%;
    }
  }

  &__information {
    display: flex;
    flex-direction: column;
    @include Breakpoint992 {
      width: 40%;
    }
  }

  &__name {
    margin-top: 22px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    @include Breakpoint576 {
      font-size: 40px;
      margin-top: 32px;
    }
  }

  &__menu {
    margin-top: 16px;
    @include Breakpoint576 {
      margin-top: 32px;
    }
  }

  &__description {
    margin-top: 20px;
    text-align: left;
    @include Breakpoint576 {
      margin-top: 32px;
    }
  }

  &__rent-panel {
    box-sizing: border-box;
    position: fixed;
    bottom: 32px;
    left: 0px;
    right: 0px;
    width: calc(100% - 32px);
    margin: 0 auto;
    background-color: #f3f4f7;
    border-radius: 16px;
    display: flex;
    // display: none;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;

    @include Breakpoint576 {
      padding: 16px 32px;
    }

    @include Breakpoint992 {
      margin-top: 50px;
      position: static;
      width: 100%;
      margin-bottom: 50px;
    }
  }

  &__rent-info {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #012345;
    @include Breakpoint576 {
      font-size: 20px;
    }
  }

  &__rent-info-pink {
    color: #f84ab3;
  }

  &__rent-button {
    cursor: pointer;
    border: none;
    width: 111px;
    height: 44px;
    background-color: #4959ff;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    &:hover {
      transform: translateY(4px);
      transition: all 0.3s ease 0s;
    }

    @include Breakpoint576 {
      width: 136px;
      height: 48px;
    }
  }

  &__rent-button-text {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #fcfcfc;

    @include Breakpoint576 {
      font-size: 16px;
    }
  }
}

.menu {
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0px;

  &__single {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #677b8f;
    text-decoration: none;
    margin-right: 20px;
    user-select: none;
    &:hover {
      color: black;
    }
  }
}

.active {
  color: #4959ff;
}

.text {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #677b8f;
}

.white {
  color: #fcfcfc;
}

.whiteHover {
  &:hover {
    color: #fcfcfc;
  }
}

.dark2 {
  background-color: #011c37;
}

.darkButton {
  &:hover {
    background-color: #fcfcfc;

    & p {
      color: black;
    }
  }
}
</style>
