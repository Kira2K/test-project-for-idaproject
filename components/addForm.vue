<template>
  <form
    :class="[$style.form, { [$style.dark1]: darkTheme }]"
    @submit.prevent="submit()"
  >
    <div :class="$style.row">
      <h2 :class="[$style.form__title, { [$style.white]: darkTheme }]">
        Add new vehicle
      </h2>

      <img
        :class="$style.form__cross"
        v-if="!darkTheme"
        @click="closeForm()"
        src="~/static/cross.png"
        alt=""
      />
      <img
        :class="[$style.form__cross, $style.dark2, $style.whiteBorder]"
        v-if="darkTheme"
        @click="closeForm()"
        src="~/static/crossDarkTheme.png"
        alt=""
      />
    </div>
    <label
      for="picture"
      :class="[
        $style.form__label,
        { [$style.dark2]: darkTheme },
        { [$style.error]: $v.fd.$error }
      ]"
    >
      <img
        :class="[
          $style.form__picture,
          { [$style['form__pictureFull']]: fileURL !== '' }
        ]"
        v-if="!darkTheme"
        id="image"
        src="~/static/addPicture.png"
        alt="mistake"
      />
      <img
        :class="[
          $style.form__picture,
          { [$style['form__pictureNoPadding']]: fileURL !== '' }
        ]"
        v-if="darkTheme"
        id="image"
        src="~/static/addPictureDarkTheme.png"
        alt="mistake"
      />

      <input
        :class="$style['form__input-file']"
        type="file"
        id="picture"
        accept=".png, .jpg, .jpeg"
        @change="onFileSelected"
      />
    </label>

    <div
      :class="[
        $style.input__shape,
        { [$style.dark2]: darkTheme },
        { [$style.error]: $v.name.$error }
      ]"
    >
      <input
        :class="[$style.input, { [$style.dark2]: darkTheme }]"
        v-model="name"
        type="text"
        placeholder="Name"
      />
    </div>

    <div
      :class="[
        $style.input__shape,
        { [$style.dark2]: darkTheme },
        { [$style.error]: $v.description.$error }
      ]"
    >
      <input
        :class="[$style.input, { [$style.dark2]: darkTheme }]"
        v-model="description"
        type="text"
        placeholder="Description"
      />
    </div>
    <div
      :class="[
        $style.input__shape,
        { [$style.dark2]: darkTheme },
        { [$style.error]: $v.price.$error }
      ]"
    >
      <input
        :class="[$style.input, { [$style.dark2]: darkTheme }]"
        v-model="price"
        type="text"
        placeholder="Rent price"
      />
      <span :class="$style.input__span">$/h</span>
    </div>
    <button
      type="submit"
      :class="[
        $style.input__shape,
        $style.input__btn,
        { [$style.darkButton]: darkTheme }
      ]"
    >
      <p :class="$style['input__btn-text']">Complete</p>
    </button>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  computed: {
    darkTheme() {
      return this.$store.getters["darkTheme/getDarkTheme"];
    }
  },

  data() {
    return {
      name: "",
      description: "",
      price: "",
      fd: null,
      fileURL: ""
    };
  },

  validations: {
    name: {
      required
    },
    description: {
      required
    },
    price: {
      required
    },
    fd: {
      required
    }
  },

  methods: {
    closeForm() {
      this.$emit("closeForm");
    },
    onFileSelected(event) {
      let file = event.target.files[0];
      console.log(file);
      this.fd = new FormData();
      this.fd.append("image", file, file.name);
      this.fileURL = URL.createObjectURL(file);
      document.getElementById("image").src = this.fileURL;
    },

    submit() {
      console.log("subd");
      this.$v.$touch();
      if (this.$v.$error) return false;
      console.log("no err");

      const vehicle = {
        name: this.name,
        type: "custom",
        description: this.description,
        rent: +this.price,
        preview: this.fileURL
      };

      this.$store.commit("vehicles/addNewVehicle", vehicle);

      this.$emit("closeForm");
    }
  }

  //
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

.form {
  z-index: 3;
  position: fixed;
  left: 0px;
  height: 653px;
  width: 100vw;
  background: #fcfcfc;
  border-radius: 24px 24px 0px 0px;
  transition: all 0.5s ease 0s;
  display: flex;
  flex-direction: column;
  padding: 24px 16px 32px 16px;
  @include Breakpoint768 {
    height: 100%;
    width: 600px;
    left: unset;
    padding: 45px 72px 45px 72px;
  }
  &__title {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #012345;
    @include Breakpoint768 {
      line-height: 30px;
      font-size: 30px;
    }
  }

  &__cross {
    cursor: pointer;
    width: 32px;
    height: 32px;
    padding: 10.5px;
    background-color: #f3f4f7;
    border-radius: 8px;
    box-sizing: border-box;
    &:hover {
      padding: 8.5px;
      border: 2px #012345 solid;
    }
    @include Breakpoint768 {
      width: 35px;
      height: 35px;
      padding: 12px;
      border-radius: 14px;
      &:hover {
        padding: 10px;
      }
    }
  }

  &__label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    height: 260px;
    background-color: #f3f4f7;
    border-radius: 16px;
    @include Breakpoint768 {
      height: calc(100% - 380px);
      margin-top: 30px;
    }
  }
  &__picture {
    max-width: 100%;
    display: block;

    width: 32px;
    height: 32px;

    @include Breakpoint768 {
      width: 40px;
      height: 40px;
    }
  }
  &__pictureFull {
    height: 100%;
    max-width: 100%;
    display: block;
    width: 100%;
    border-radius: 16px;
  }

  &__input-file {
    display: none;
  }
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.input {
  padding-left: 20px;
  width: 100%;
  background-color: #f3f4f7;
  border: none;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: #677b8f;
  @include Breakpoint768 {
    padding-left: 24px;
    font-size: 16px;
  }
  &__shape {
    box-sizing: border-box;
    margin-top: 16px;
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    background-color: #f3f4f7;
    border-radius: 12px;
    position: relative;
    @include Breakpoint768 {
      height: 56px;
      margin-top: 20px;
    }
  }

  &__span {
    position: absolute;
    right: 20px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #99a7b5;
    @include Breakpoint768 {
      right: 24px;
    }
  }
  &__btn {
    cursor: pointer;
    margin-top: 24px;
    background-color: #4959ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    &:hover {
      background-color: black;
      transform: translateY(4px);
      transition: all 0.3s ease 0s;
    }
    @include Breakpoint768 {
      margin-top: 30px;
    }
  }

  &__btn-text {
    user-select: none;
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #fcfcfc;
  }
}

.dark1 {
  background-color: #012345;
}

.dark2 {
  background-color: #011c37;
}

.white {
  color: #fcfcfc;
}

.whiteBorder:hover {
  border-color: #fcfcfc;
}

.darkButton {
  &:hover {
    background-color: #fcfcfc;

    & p {
      color: black;
    }
  }
}

.error {
  border: 2px #f84ab3 solid;
}
</style>
