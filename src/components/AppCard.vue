<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  font: inherit;
  opacity: 0.5;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  height: 17em;
  width: 12em;
  font-size: 1.5em;
  color: white;
  border-radius: 1em;
  padding: 1em;
  margin: 1em;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5em -1em black;
  overflow: hidden;
  border: 3px solid #ccc;
  text-decoration: none;
}
</style>