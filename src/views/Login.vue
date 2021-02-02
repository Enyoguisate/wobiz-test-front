<template>
  <div class="row h-100 w-100">
    <div class="col-12 p-0 ml-0 col w-100">
      <div class="box vh-100 white-bg box-shadow">
        <div class="row h-100 w-100">
          <div class="col h-100">
            <a class="img-container" href="https://www.wobiz.com">
              <img src="../assets/img/wobiz-logo.svg" alt="wobiz-logo" />
            </a>
            <form class="login-form w-100" @submit.prevent="submitForm()">
              <h2>Ingresa a tu cuenta</h2>
              <fieldset class="form-group darkgrey-text bold email-fs">
                <legend for="email">
                  Email
                </legend>
                <input
                  class="text-lowercase form-control"
                  :class="{
                    'no-errors': !errors.email,
                    'text-danger': errors.email,
                  }"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ej: usuario@mail.com"
                  v-model.trim="fields.email"
                  :change="validateInput('email')"
                  @blur="validateInput('email')"
                />
                <alert-component
                  body="Necesitamos tu email."
                  v-if="errors.email"
                />
              </fieldset>

              <fieldset class="form-group darkgrey-text bold password-fs">
                <legend for="password">
                  Contraseña
                </legend>
                <input
                  class="text-lowercase form-control"
                  :class="{
                    'no-errors': !errors.password,
                    'text-danger': errors.password,
                  }"
                  id="password"
                  name="pasword"
                  type="password"
                  placeholder="Escribe tu contraseña"
                  v-model.trim="fields.password"
                  :change="validateInput('password')"
                  @blur="validateInput('password')"
                />
                <alert-component
                  body="Necesitamos tu contraseña."
                  v-if="errors.password"
                />
              </fieldset>
              <p class="gray-text mt-3 text-center forgot-password">
                <a href="/recovery" class="gray-text"
                  >¿Olvidaste tu contraseña?</a
                >
              </p>

              <div class="row w-100 mt-2 login-account-btn">
                <div class="col h-100 w-100">
                  <button class="btn btn-lg btn-block mt-3 btn-secondary  ">
                    Ingresar a mi cuenta
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- SPINNER -->
    <teleport to="body">
      <spinner-component v-if="isLoading" />
    </teleport>
    <!-- /SPINNER -->
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const fields = ref({
      email: "",
      password: "",
    });

    const errors = ref({
      email: false,
      password: false,
    });

    const submitTry = ref(false);
    const isLoading = ref(false);

    function submitForm() {
      submitTry.value = true;
      validateInput("email");
      validateInput("password");
      if (!errors.value.email || !errors.value.password) {
        isLoading.value = true;
        store.dispatch("auth", {
          email: fields.value.email,
          password: fields.value.password,
        });
      }
    }

    watch(store.getters.isAuthenticated, () => {
      console.log("watch");
      isLoading.value = true;
    });

    function validateInput(field) {
      if (submitTry.value) {
        errors.value[field] = fields.value[field] === "";
      }
    }

    return {
      fields,
      errors,
      submitTry,
      isLoading,
      submitForm,
      validateInput,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/views/login.scss";
</style>
