<template>
  <div>
    <h5 :class="[$style.subtitle, { [$style.white]: darkTheme }]">
      Additional conditions:
    </h5>
    <ul :class="$style.info">
      <li :class="[$style.info__single, $style.text]" v-for="i in 3" :key="i">
        {{ vehicle.term_text }}
      </li>
    </ul>
    <div :class="$style.whitespace"></div>
  </div>
</template>

<script>
export default {
  props: {
    vehicle: {
      vehicle: Object,
      required: true
    }
  },
  computed: {
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

.info {
  padding: 0px;
  list-style: none;
  &__single {
    margin-left: 16px;
    margin-top: 8px;
    @include Breakpoint992 {
      margin-top: 16px;
      margin-left: 24px;
    }
    &::before {
      content: "\2022";
      color: #f84ab3;
      font-weight: bold;
      display: inline-block;
      width: 11px;
      margin-left: -16px;
      @include Breakpoint992 {
        width: 19px;
        margin-left: -24px;
      }
    }
  }
}

.subtitle {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #012345;
  margin-top: 16px;
  margin-bottom: 16px;
  @include Breakpoint992 {
    margin-top: 24px;
    margin-bottom: 24px;
  }
}

.text {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #677b8f;
}

.whitespace {
  height: 132px;
  @include Breakpoint576 {
    width: 230px;
  }
  @include Breakpoint992 {
    display: none;
  }
}

.white {
  color: #fcfcfc;
}
</style>
