<template>
  <default>
    <router-view />
  </default>
</template>

<script>
import Default from "./components/Default";
export default {
  components: { default: Default },
};
</script>
<style lang="scss">
@import "./assets/styles/app.scss";
</style>
