<template>
  <div class="container">
    <h3 class="title">Add a new meme 🆕</h3>
    <label>
      Upload Meme
      <input type="file" accept="image/*" size="60" />
    </label>
    <app-text-input placeholder="Meme Title" />
    <app-text-input placeholder="Why is this Meme funny?" />
    <app-button>Houston, we have a meme! 🚀👨‍🚀</app-button>
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
</style>