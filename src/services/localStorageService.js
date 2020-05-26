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

  deleteMeme(position) {
    const memes = [...this.getMemes()];

    const removeItemWithSlice = (index) => {
      const firstArr = memes.slice(0, index);
      const secondArr = memes.slice(index + 1);
      return [...firstArr, ...secondArr];
    };

    console.log("Memes spliced", memes, position);
    return localStorage.setItem(
      this.memePath,
      JSON.stringify(removeItemWithSlice(position))
    );
  }
}

export default LocalStorageService;
