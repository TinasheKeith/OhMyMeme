<template>
  <div class="container">
    <h3 class="title">Add a new meme 🆕</h3>
    <app-button>Upload Meme</app-button>
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
</style>