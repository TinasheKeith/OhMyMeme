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
    try {
      const { docs } = await this.memesCollection.get();
      const memes = [];
      docs.forEach((doc) => {
        const { id } = doc;

        memes.push({
          id,
          ...doc.data(),
        });
      });
      this.dbMemes = memes;
      return memes;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteMeme(id) {
    try {
      return await this.memesCollection.doc(id).delete();
    } catch (e) {
      console.log(e);
    }
  }

  async editMeme(id, updatedMeme) {
    try {
      return await this.memesCollection.doc(id).update({ ...updatedMeme });
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export default FirestoreService;
