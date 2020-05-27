<template>
  <div id="app">
    <AppBar title="Oh. My. Meme! 😲" />
    <AppWrapper>
      <app-meme-uploader @storageUpdate="updateStorage" />
      <meme-collection @storageUpdate="updateStorage" :memes="memes" />
    </AppWrapper>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
import AppWrapper from "./components/AppWrapper";
import AppMemeUploader from "./components/MemeUploader";
import MemeCollection from "./components/MemeCollection";

import FirestoreService from "./services/firestoreService.js";

export default {
  name: "App",
  components: {
    AppBar,
    AppWrapper,
    AppMemeUploader,
    MemeCollection
  },
  async created() {
    const firestoreService = new FirestoreService();
    this.memes = await firestoreService.getMemes();
  },
  data() {
    return {
      memes: []
    };
  },
  methods: {
    async updateStorage() {
      const firestoreService = new FirestoreService();
      this.memes = await firestoreService.getMemes();
    }
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

.text-input {
  max-width: 335px;
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
