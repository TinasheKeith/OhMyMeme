<template>
  <button class="appBtn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton"
};
</script>

<style scoped>

.appBtn {
  color: white;
  background-color: var(--primary-color);
  font-weight: 300;
  font-size: 1rem;
  cursor: pointer;
  width: 180px;
  text-align: center;
}
</style>
