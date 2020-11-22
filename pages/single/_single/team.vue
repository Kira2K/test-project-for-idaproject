<template>
  <div :class="$style.team">
    <h3 :class="[$style.title, { [$style.white]: darkTheme }]">
      Qualified specialists
    </h3>

    <div :class="$style['team__specialist-wrapper']">
      <div
        :class="[
          $style.team__specialist,
          $style.specialist,
          $style.specialist_first
        ]"
      >
        <img
          :class="$style.specialist__photo"
          src="~/static/team1.png"
          alt=""
        />
        <div :class="$style.specialist__info">
          <h5
            :class="[
              $style.specialist__subtitle,
              $style.subtitle,
              { [$style.white]: darkTheme }
            ]"
          >
            Marvin McKinney
          </h5>
          <p :class="[$style.specialist__text, $style.text]">Pilot assistant</p>
        </div>
      </div>

      <div :class="[$style.team__specialist, $style.specialist]">
        <img
          :class="$style.specialist__photo"
          src="~/static/team2.png"
          alt=""
        />
        <div :class="$style.specialist__info">
          <h5
            :class="[
              $style.specialist__subtitle,
              $style.subtitle,
              { [$style.white]: darkTheme }
            ]"
          >
            Savannah Nguyen
          </h5>
          <p :class="[$style.specialist__text, $style.text]">Mechanic</p>
        </div>
      </div>

      <div :class="[$style.team__specialist, $style.specialist]">
        <img
          :class="$style.specialist__photo"
          src="~/static/team3.png"
          alt=""
        />
        <div :class="$style.specialist__info">
          <h5
            :class="[
              $style.specialist__subtitle,
              $style.subtitle,
              { [$style.white]: darkTheme }
            ]"
          >
            Courtney Henry
          </h5>
          <p :class="[$style.specialist__text, $style.text]">Stewardess</p>
        </div>
      </div>
    </div>
    <p :class="[$style.team__description, $style.text]">
      {{ vehicle.team_text }}
    </p>

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

.team {
  &__specialist-wrapper {
    @include Breakpoint1200 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__specialist {
    margin-top: 8px;
    @include Breakpoint576 {
      margin-top: 32px;
    }
  }

  &__description {
    margin-top: 20px;
    @include Breakpoint576 {
      margin-top: 32px;
    }
  }
}

.specialist {
  display: flex;
  justify-content: left;

  @include Breakpoint1200 {
    flex-direction: column;
    width: 30%;
    // max-width: 162px;
  }

  &_first {
    margin-top: 20px;
    @include Breakpoint576 {
      margin-top: 32px;
    }
  }
  &__photo {
    max-width: 100%;
    display: block;
    width: 132px;
    height: 80px;
    border-radius: 16px;
    @include Breakpoint576 {
      width: 162px;
      height: 96px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }

  &__subtitle {
    margin-top: 17px;
  }

  &__text {
    margin-top: 4px;
    @include Breakpoint576 {
      margin-top: 8px;
    }
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
  height: 130px;
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
