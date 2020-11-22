<template>
  <main :class="[$style.error__container, { [$style.dark2]: darkTheme }]">
    <div :class="$style.error__info">
      <h1 :class="[$style.error__title, { [$style.white]: darkTheme }]">
        An error has occurred
      </h1>
      <h3 :class="$style.error__subtitle">Please refresh the page</h3>
      <button
        :class="[$style.error__button, { [$style.darkButton]: darkTheme }]"
        @click="reloadPage()"
      >
        <p :class="$style['error__button-text']">Reload page</p>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    darkTheme() {
      return this.$store.getters["darkTheme/getDarkTheme"];
    }
  },
  methods: {
    reloadPage() {
      this.$router.go();
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

.error {
  &__container {
    box-sizing: border-box;
    width: 100%;
    max-width: 1406px;
    height: calc(100vh - 84px);
    margin: 0 auto;
    background-color: #f3f4f7;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include Breakpoint376 {
      margin-top: 55px;
      height: calc(100vh - 210px);
    }

    @include Breakpoint1200 {
      border-radius: 48px;
      width: calc(100% - 130px);
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #012345;

    @include Breakpoint576 {
      font-size: 40px;
      line-height: 48px;
    }
  }

  &__subtitle {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #677b8f;
    margin-top: 16px;
    @include Breakpoint576 {
      margin-top: 24px;
    }
  }

  &__button {
    cursor: pointer;
    width: 133px;
    height: 44px;
    background-color: #4959ff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: 32px;
    &:hover {
      background-color: black;
      transform: translateY(4px);
      transition: all 0.3s ease 0s;
    }
    @include Breakpoint576 {
      width: 160px;
      height: 48px;
      margin-top: 40px;
    }
  }

  &__button-text {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 12px;
    color: #fcfcfc;
    @include Breakpoint576 {
      font-size: 16px;
    }
  }
}

.dark2 {
  background-color: #011c37;
}

.white {
  color: #fcfcfc;
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
