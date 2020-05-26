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

  editMeme(position, updatedDetails) {
    const memes = this.getMemes();
    memes[position] = updatedDetails;
    return localStorage.setItem(this.memePath, JSON.stringify(memes));
  }
}

export default LocalStorageService;
