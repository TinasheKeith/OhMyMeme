import { db } from "../firebase";

class FirestoreService {
  memesCollection = db.collection("memes");

  async uploadMeme(newMeme) {
    if (typeof newMeme == "object") {
      try {
        console.log("uploading meme", newMeme);
        return await this.memesCollection.add(newMeme);
      } catch (e) {
        console.log(e);
        return null;
      }
    }
  }

  async getMemes() {
    const memes = await this.memesCollection.get();
    console.log(memes.data());
    return memes;
  }
}

export default FirestoreService;
