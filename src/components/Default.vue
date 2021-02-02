<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col col-4">
        <slot name="default"> </slot>
      </div>
      <div class="col-lg-8 col-md-6 p-0 col right-panel">
        <div class="img-container">
          <img :src="image" alt="start_image" />
        </div>
        <div class="row-text-button">
          <p class="greenish-blue-text mr-3 mt-2" v-if="isLogin">
            ¿Ya tienes una cuenta en Wobiz?
          </p>
          <p class="greenish-blue-text mr-3 mt-2" v-else>
            ¿No tienes una cuenta en Wobiz?
          </p>
          <button type="button" class="btn btn-primary" @click="goTo">
            {{ btnText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginImage from "@/assets/img/login.png";
import registerImage from "@/assets/img/register.png";
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const signinImage = loginImage;
    const signupImage = registerImage;
    const image = ref(signinImage);
    const route = useRoute();
    const router = useRouter();
    const isLogin = ref(false);

    watch(route, () => {
      if (route.path.includes("signup")) {
        isLogin.value = false;
        image.value = signupImage;
      } else {
        isLogin.value = true;
        image.value = signinImage;
      }
    });

    const btnText = computed(() => {
      let textCallback = "Ingresa";
      if (route.path.includes("signin")) {
        textCallback = "Crea tu cuenta";
      }
      return textCallback;
    });

    function goTo() {
      if (isLogin.value) {
        router.push("/signup");
      } else {
        router.push("/signin");
      }
    }

    return {
      image,
      btnText,
      goTo,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components/default.scss";
</style>
