<template>
  <div id="app">
    <AppBar title="Oh. My. Meme! 😲" />
    <AppWrapper>
      <app-meme-uploader />
      <meme-collection />
    </AppWrapper>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
// import AppButton from "./components/AppButton";
import AppWrapper from "./components/AppWrapper";
import AppMemeUploader from "./components/MemeUploader";
import MemeCollection from "./components/MemeCollection";

export default {
  name: "App",
  components: {
    AppBar,
    AppWrapper,
    AppMemeUploader,
    MemeCollection
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

.container {
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
}

.title {
  text-align: center;
  margin-bottom: 1em;
}
</style>
