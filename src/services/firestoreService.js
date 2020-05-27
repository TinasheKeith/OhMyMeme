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
    const { docs } = await this.memesCollection.get();
    const memes = [];
    docs.forEach((doc) => memes.push(doc.data()));
    return memes;
  }
}

export default FirestoreService;
