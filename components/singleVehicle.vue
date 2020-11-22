<template>
  <NuxtLink
    :to="'single/' + vehicle.id + '/specifications'"
    :class="[$style.single, { [$style.dark1]: darkTheme }]"
  >
    <div :class="$style.single__container">
      <img :class="$style.single__photo" :src="vehicle.preview" alt="" />

      <div :class="$style.single__info">
        <p :class="[$style.single__name, { [$style.white]: darkTheme }]">
          {{ vehicle.name }}
        </p>

        <p :class="$style.single__description">
          {{ vehicle.description }}
        </p>

        <p :class="$style['single__price']">{{ vehicle.rent }} $/h</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    vehicle: {
      single: Object,
      required: true
    }
  },

  computed: {
    darkTheme() {
      return this.$store.getters["darkTheme/getDarkTheme"];
    }
  },
  mounted() {
    console.log(typeof this.vehicle.rent);
  }
};
</script>

<style module lang="scss">
@mixin Breakpoint576 {
  @media (min-width: 576px) {
    @content;
  }
}

.single {
  width: 340px;
  height: 150px;
  background-color: #fcfcfc;
  border-radius: 24px;
  margin-top: 12px;
  text-decoration: none;

  &:hover {
    transform: translateY(5px);
    transition: all 0.3s ease 0s;
  }
  @include Breakpoint576 {
    margin-top: 32px;
  }

  &__container {
    margin: 25px 32px;
    display: flex;
  }

  &__photo {
    max-width: 100%;
    display: block;
    width: 88px;
    height: 88px;
    border-radius: 24px;
  }

  &__info {
    margin-left: 25px;
  }

  &__name {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: #012345;
    margin-top: 15px;
  }

  &__description {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: #677b8f;
    margin-top: 12px;
  }

  &__price {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #f84ab3;
    margin-top: 16px;
  }
}
.dark1 {
  background-color: #012345;
}

.white {
  color: #fcfcfc;
}
</style>
