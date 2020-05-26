<template>
  <div class="appbar">
    <h3 class="appbar-title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  props: ["title"]
};
</script>

<style scoped>
.appbar {
  display: flex;
  flex-direction: row;
  height: 2em;
  padding: 10px 40px;
  margin-bottom: 2em;
}

.appbar-title {
  font-size: 1.5em;
}
</style>