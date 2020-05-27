import firebase from "firebase/app";
import "firebase/storage";
import { db } from "../firebase";

class FirestoreService {
  memesCollection = db.collection("memes");

  async uploadMeme(newMeme) {
    if (typeof newMeme == "object") {
      try {
        let imageRef;

        if (newMeme.imageFile) {
          imageRef = await this.addImageToCloudStorage(newMeme.imageFile);
          console.log("MY IMAGEREF", imageRef);
        }

        console.log("uploading meme", newMeme);
        return await this.memesCollection.add({
          title: newMeme.title,
          description: newMeme.description,
          imageUrl: imageRef,
        });
      } catch (e) {
        console.log(e);
        return null;
      }
    }
  }

  async addImageToCloudStorage(file) {
    try {
      const storageRef = firebase.storage().ref(`meme-images/${file.name}`);

      return await (await storageRef.put(file)).ref.getDownloadURL();
    } catch (e) {
      console.log(e);
      return null;
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
