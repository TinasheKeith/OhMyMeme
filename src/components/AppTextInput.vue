<template>
  <div>
    <input type="text" class="text-input" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "AppTextInput",
  props: ["placeholder", "file"]
};
</script>

<style scoped>
.text-input {
  width: 360px;
  margin: auto;
  background: #fff;
  font-weight: bold;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 15px 18px;
  margin: 1em 0;
}
</style>