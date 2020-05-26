class LocalStorageService {
  memePath = "memes";

  getMemes() {
    const memes = JSON.parse(localStorage.getItem(this.memePath)) || [];
    console.log("[getMemes]", memes);
    return memes;
  }

  addMeme(newMeme) {
    if (typeof newMeme == "object") {
      const memes = this.getMemes();
      console.log("[addMeme] memes are", memes);
      const updatedMemes = [...memes, newMeme];

      return localStorage.setItem(this.memePath, JSON.stringify(updatedMemes));
    }
    console.assert("[addMeme] meme should be an object.");
    return null;
  }
}

// const savedMemes = JSON.parse(localStorage.getItem("memes")) || [];
// const newMeme = {
//   title: this.memeTitle,
//   imgUrl: this.selectedImageUrl,
//   description: this.memeDescription
// };

// const updatedMemes = [...savedMemes, newMeme];

// localStorage.setItem("memes", JSON.stringify(updatedMemes));

export default LocalStorageService;
