<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1010px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media screen and (max-width: 700px) {
  .wrapper {
    max-width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>