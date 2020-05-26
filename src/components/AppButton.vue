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
  margin: 0.5em;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 4px 24px;
  font-weight: bold;
  max-width: 360px;
  font: inherit;
}
</style>
