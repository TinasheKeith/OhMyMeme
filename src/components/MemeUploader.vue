<template>
  <div class="container">
    <h3 class="title">Add a new meme 🆕</h3>
    <label>
      Upload Meme
      <input type="file" accept="image/*" size="60" @change="onFileChosen" />
    </label>

    <img
      v-if="imageFile"
      id="memeImage"
      class="preview-image"
      width="200px"
      :src="getImageFileUrl()"
    />
    <input v-model="memeTitle" type="text" class="text-input" placeholder="Meme Title" />
    <textarea
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
import FirestoreService from "../services/firestoreService.js";

export default {
  name: "MemeUploader",
  components: {
    AppButton
  },
  data() {
    return {
      imageFile: "",
      memeTitle: "",
      memeDescription: "",
      imageFileUrl: "" // for image preview after upload from file system
    };
  },
  methods: {
    onFileChosen(e) {
      const imageFile = e.target.files[0];
      this.imageFile = imageFile;
    },

    async onUpload() {
      const firestoreService = new FirestoreService();

      const newMeme = {
        title: this.memeTitle,
        description: this.memeDescription,
        imageFile: this.imageFile
      };

      await firestoreService.uploadMeme(newMeme);

      this.memeTitle = "";
      this.memeDescription = "";
      this.imageFile = "";

      this.$emit("storageUpdate");
    },
    getImageFileUrl() {
      const imageFileUrl = URL.createObjectURL(this.imageFile);
      return imageFileUrl;
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

.preview-image {
  max-width: 400px;
  margin: 2em auto;
}
</style>