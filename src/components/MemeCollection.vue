<template>
  <div>
    <div class="meme-container" v-if="memes">
      <app-card :key="meme.title" v-for="meme in memes">{{ meme.title }}</app-card>
    </div>
    <h3 v-else>You have no memes saved currently 🤷‍♀️</h3>
  </div>
</template>

<script>
import AppCard from "./AppCard";

export default {
  name: "MemeCollection",
  components: {
    AppCard
  },
  mounted() {
    let savedMemes = JSON.parse(localStorage.getItem("memes"));

    if (savedMemes) {
      console.log("saved memes", savedMemes);
      this.memes = savedMemes;
    }
  },
  data() {
    return {
      memes: []
    };
  }
};
</script>

<style scroped>
.meme-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5em auto;
  height: 100%;
  width: 100%;
}
</style>  