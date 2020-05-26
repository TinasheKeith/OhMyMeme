<template>
  <div class="container">
    <h3 class="title">Add a new meme 🆕</h3>
    <label>
      Upload Meme
      <input type="file" accept="image/*" size="60" @change="onFileChosen" />
    </label>

    <img v-if="selectedImageUrl" class="preview-image" width="200px" :src="selectedImageUrl" />
    <input v-model="memeTitle" type="text" class="text-input" placeholder="Meme Title" />
    <input
      v-model="memeDescription"
      type="text"
      class="text-input"
      placeholder="Why is theme Meme funny?"
    />

    <app-button @click.native="onUpload()">Houston, we have a meme! 🚀👨‍🚀</app-button>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import LocalStorageService from "../services/localStorageService.js";

export default {
  name: "MemeUploader",
  components: {
    AppButton
  },
  data() {
    return {
      selectedImageUrl: "",
      memeTitle: "",
      memeDescription: ""
    };
  },
  methods: {
    onFileChosen(e) {
      const imageFile = e.target.files[0];
      const imageFileUrl = URL.createObjectURL(imageFile);
      this.selectedImageUrl = imageFileUrl;
    },
    onUpload() {
      const localStorageService = new LocalStorageService();
      const newMeme = {
        title: this.memeTitle,
        imgUrl: this.selectedImageUrl,
        description: this.memeDescription
      };

      localStorageService.addMeme(newMeme);
    }
  }
};
</script>

<style scoped>
label {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  border: 0;
  outline: 0;
  padding: 0;
  max-width: 360px;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;
  font-weight: bold;
  font: inherit;
}

input[type="file"] {
  display: none;
}

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

.preview-image {
  max-width: 400px;
  margin: 2em auto;
}
</style>