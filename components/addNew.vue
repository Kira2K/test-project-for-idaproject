<template>
  <div>
    <div :class="$style['add-new']" @click="showForm = true">
      <span
        :class="[
          $style['add-new__span'],
          { [$style.darkAnimation]: darkTheme }
        ]"
      >
        Add new
      </span>

      <button
        :class="[$style['add-new__button'], { [$style.darkButton]: darkTheme }]"
      >
        <img
          src="~/static/plusOnButtonInAddNew.png"
          :class="$style['add-new__button-img']"
          alt=""
        />
      </button>
    </div>
    <AddForm
      :class="[$style.addForm, { [$style.addFormActive]: showForm }]"
      v-on:closeForm="closeForm()"
    />
    <div :class="$style.blur" v-if="showForm"></div>
  </div>
</template>

<script>
export default {
  computed: {
    darkTheme() {
      return this.$store.getters["darkTheme/getDarkTheme"];
    }
  },

  data: () => ({
    showForm: false
  }),

  methods: {
    closeForm() {
      this.showForm = false;
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

.add-new {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &__span {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #4959ff;
    display: flex;
    &:hover {
      color: black;
    }
    @include Breakpoint576 {
      font-size: 20px;
      line-height: 28px;
    }
  }

  &__button {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4959ff;
    border-radius: 8px;
    border: none;
    margin-left: 12px;
    &:hover {
      background-color: black;
    }
    @include Breakpoint576 {
      width: 48px;
      height: 48px;
      border-radius: 16px;
    }
  }

  &__button-img {
    width: 12px;
    height: 12px;
    @include Breakpoint576 {
      width: 17px;
      height: 17px;
    }
  }
}

.blur {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  backdrop-filter: blur(32px);
  background-color: transparent;
  z-index: 2;
  overflow: hidden;
}

.addForm {
  top: 100%;
  @include Breakpoint768 {
    top: unset;
    right: -100%;
  }
}

.addFormActive {
  top: calc(100vh - 653px);
  @include Breakpoint768 {
    right: 0px;
    top: 0px;
  }
}

.darkAnimation {
  &:hover {
    color: #fcfcfc;
  }
}

.darkButton {
  &:hover {
    background-color: #fcfcfc;

    & img {
      filter: invert(1);
    }
  }
}
</style>
