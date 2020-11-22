<template>
  <div :class="$style.specifications">
    <h3 :class="[$style.title, { [$style.white]: darkTheme }]">Features:</h3>

    <div :class="$style['feature']">
      <img
        :class="[$style.feature__pictureOne, { [$style.dark2]: darkTheme }]"
        src="~/static/featureOne.png"
        alt=""
      />

      <div :class="$style['feature__info-wrapper']">
        <h5
          :class="[
            $style.feature__subtitle,
            $style.subtitle,
            { [$style.white]: darkTheme }
          ]"
        >
          A challenge for a true champion
        </h5>
        <p :class="[$style.feature__description, $style.text]">
          {{ vehicle.specifications_text }}
        </p>
      </div>
    </div>

    <div :class="$style['feature']">
      <img
        :class="[$style.feature__pictureTwo, { [$style.dark2]: darkTheme }]"
        src="~/static/featureTwo.png"
        alt=""
      />

      <div :class="$style['feature__info-wrapper']">
        <h5
          :class="[
            $style.feature__subtitle,
            $style.subtitle,
            { [$style.white]: darkTheme }
          ]"
        >
          Pilot's sweaty hands
        </h5>
        <p :class="[$style.feature__description, $style.text]">
          {{ vehicle.specifications_text }}
        </p>
      </div>
    </div>

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

.specifications {
  display: flex;
  flex-direction: column;
}

.feature {
  display: flex;
  flex-direction: row;
  margin-top: 12px;

  @include Breakpoint576 {
    margin-top: 32px;
  }

  &__pictureOne {
    max-width: 100%;
    display: block;
    width: 64px;
    height: 80px;
    padding: 31px 21px;
    background-color: #f3f4f7;
    border-radius: 16px;
    @include Breakpoint576 {
      width: 80px;
      height: 96px;
      padding: 36px 25px;
    }
  }

  &__pictureTwo {
    max-width: 100%;
    display: block;
    width: 64px;
    height: 80px;
    padding: 30px 24px;
    background-color: #f3f4f7;
    border-radius: 16px;
    @include Breakpoint576 {
      width: 80px;
      height: 96px;
      padding: 35px 29px;
    }
  }

  &__info-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
  }

  &__subtitle {
    margin-top: 12px;
  }
  &__description {
    margin-top: 8px;
  }
}
.title {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #012345;
  margin-top: 20px;
  @include Breakpoint576 {
    font-size: 24px;
    line-height: 21px;
    margin-top: 32px;
  }
}

.subtitle {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #012345;
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

.dark2 {
  background-color: #011c37;
}
</style>
