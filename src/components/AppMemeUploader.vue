<template>
  <div class="container">
    <h3 class="title">Add a new meme 🆕</h3>
    <label>
      Upload Meme
      <input type="file" accept="image/*" size="60" @change="onFileChosen" />
    </label>
    <img v-if="selectedImageUrl" class="preview-image" width="200px" :src="selectedImageUrl" />
    <app-text-input placeholder="Meme Title" v-model="memeTitle" />
    <app-text-input placeholder="Why is this Meme funny?" v-model="memeDescription" />
    <app-button @click.native="onUpload()">Houston, we have a meme! 🚀👨‍🚀</app-button>
  </div>
</template>

<script>
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";

export default {
  name: "AppMemeUploader",
  components: {
    AppTextInput,
    AppButton
  },
  data() {
    return {
      selectedImageUrl: null,
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
      console.log("onUpload ran!!");
      let savedMemes = [];
      savedMemes = localStorage.getItem("savedMemes") || [];

      savedMemes.push({
        memeTitle: this.memeTitle,
        imageUrl: this.selectedImageUrl,
        memeDescription: this.memeDescription
      });

      localStorage.setItem("savedMemes", savedMemes);

      console.log(localStorage.getItem("savedMemes"));
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