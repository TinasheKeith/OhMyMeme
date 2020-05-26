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
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;
  font-weight: bold;
  font: inherit;
}
</style>
