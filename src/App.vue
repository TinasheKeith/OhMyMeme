<template>
  <div id="app">
    <AppBar title="Oh. My. Meme! 😲" />
    <AppWrapper>
      <!-- <app-button>hi</app-button> -->
    </AppWrapper>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
// import AppButton from "./components/AppButton";
import AppWrapper from "./components/AppWrapper";

export default {
  name: "App",
  components: {
    AppBar,
    // AppButton,
    AppWrapper
  }
};
</script>

<style>
@import "./assets/styles/variables.css";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Chelsea Market", cursive;
  line-height: 1.4;
  color: var(--font-color);
  background-color: var(--background-color);
}
</style>
