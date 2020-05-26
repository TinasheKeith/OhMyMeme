<template>
  <div>
    <div class="meme-container" v-if="memes">
      <app-card :key="meme.title" v-for="meme in memes">
        <div class="card-content">
          <img width="100%" height="150px" :src="meme.imgUrl" />
          <h3 class="card-title">{{ meme.title }}</h3>
          <p class="card-description">{{ meme.description }}</p>
          <div class="card-action">
            <app-btn>edit</app-btn>
          </div>
        </div>
      </app-card>
    </div>
    <h3 v-else>You have no memes saved currently 🤷‍♀️</h3>
  </div>
</template>

<script>
import AppCard from "./AppCard";
import AppBtn from "./AppButton";

export default {
  name: "MemeCollection",
  components: {
    AppCard,
    AppBtn,
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

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-title {
  margin: 0.5em 0em;
  font-size: 0.7em;
}

.card-description {
  font-size: 0.5em;
}

.card-action {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.5em;
}
</style>  