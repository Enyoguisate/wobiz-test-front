<template>
  <div class="inline-alert mt-3">
    <div class="alert alert-danger">
      <div class="col">
        <p>
          {{ body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      required: true,
      default: "empty alert",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/common/alert.scss";

</style>
