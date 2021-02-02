<template>
  <div class="row h-100 w-100">
    <div class="col-12 p-0 ml-0 col w-100">
      <div class="box vh-100 white-bg box-shadow">
        <div class="row h-100 w-100">
          <div class="col h-100">
            <a class="img-container" href="https://www.wobiz.com">
              <img src="../assets/img/wobiz-logo.svg" alt="wobiz-logo" />
            </a>
            <form class="register-form w-100" @submit.prevent="submitForm()">
              <h2>Comienza a vender online</h2>
              <p>Crea tu cuenta y prueba Wobiz 14 días gratis.</p>
              <fieldset class="form-group darkgrey-text bold  brand-fs">
                <legend for="brand-name">Nombre de tu marca</legend>
                <input
                  class="form-control"
                  :class="{
                    'no-errors': !errors.brandName,
                    'text-danger': errors.brandName
                  }"
                  id="brand-name"
                  name="brand-name"
                  type="text"
                  placeholder="Ej: Mi tienda online"
                  v-model.trim="fields.brandName"
                  :change="validateInput('brandName')"
                  @blur="validateInput('brandName')"
                />
                <alert-component
                  body="Necesitamos tu nombre."
                  v-if="errors.brandName"
                />
              </fieldset>

              <fieldset class="form-group darkgrey-text bold  email-fs">
                <legend for="email">Email</legend>
                <input
                  class="form-control"
                  :class="{
                    'no-errors': !errors.email,
                    'text-danger': errors.email
                  }"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="ej: usuario@mail.com"
                  v-model.trim="fields.email"
                  :change="validateInput('email')"
                  @blur="validateInput('email')"
                />
                <alert-component
                  body="Necesitamos tu email."
                  v-if="errors.email"
                />
              </fieldset>

              <fieldset class="form-group darkgrey-text bold  password-fs">
                <legend for="password">Contraseña</legend>
                <input
                  class="form-control"
                  :class="{
                    'no-errors': !errors.password,
                    'text-danger': errors.password
                  }"
                  id="password"
                  name="password"
                  type="text"
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

              <div class="row w-100 mt-2 create-account-btn">
                <div class="col h-100">
                  <button
                    class="btn btn-lg btn-block mt-3 btn-secondary"
                    type="submit"
                  >
                    Crear mi cuenta en Wobiz
                  </button>
                </div>
              </div>

              <p class="gray-text mt-3 text-center  terms-and-conditions">
                Al registrarme declaro que acepto los
                <a
                  href="https://www.wobiz.com/termsandconditions"
                  target="_blank"
                  class="darkgrey-text"
                  >términos y condiciones</a
                >
                y las
                <a
                  href="https://www.wobiz.com/privacy"
                  target="_blank"
                  class="darkgrey-test"
                  >políticas de privacidad</a
                >
                de Wobiz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const fields = ref({
      brandName: "",
      email: "",
      password:"",
    });

    const errors = ref({
      brandName: false,
      email: false,
      password: false,
    });

    const submitTry = ref(false)

    function submitForm() {
      submitTry.value = true;
      validateInput("brandName");
      validateInput("email");
      validateInput("password");
      if (
        !errors.value.brandName ||
        !errors.value.email ||
        !errors.value.password
      ) {
        console.log("SUBMIT!");
      }
    }

    function validateInput(field) {
      if(submitTry.value) {
        errors.value[field] = fields.value[field] === "";
      }
    }

    return {
      fields,
      errors,
      submitTry,
      submitForm,
      validateInput,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/views/register.scss";
</style>
