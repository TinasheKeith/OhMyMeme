<template>
  <div>
    <div class="meme-container" v-if="getMemes">
      <modal name="edit" @before-open="selectMemeToEdit">
        <div class="edit-modal">
          <h3>Edit your meme entry</h3>
          <!-- <img width="100%" height="150px" :src="meme.imgUrl" /> -->
          <input
            v-model="memeToEditTitle"
            type="text"
            class="text-input"
            :placeholder="memeToEditTitle"
          />
          <textarea
            v-model="memeToEditDescription"
            type="textarea"
            class="text-input"
            :placeholder="memeToEditDescription"
          />
          <!-- <p class="card-description">{{ meme.description }}</p> -->
          <div class="card-action">
            <app-btn @click.native="onEdit(memeToEditPosition)">edit</app-btn>
          </div>
        </div>
      </modal>

      <app-card :key="meme.index" v-for="(meme, index) in getMemes">
        <div class="card-content">
          <img class="card-image" :src="meme.imgUrl" />
          <div class="content-text">
            <h3 class="card-title">{{ meme.title }}</h3>
            <p class="card-description">{{ meme.description }}</p>
            <div class="card-action">
              <app-btn @click.native="onDelete(index)">delete</app-btn>
              <app-btn @click.native="openEditMemeDialog(index)">edit</app-btn>
            </div>
          </div>
        </div>
      </app-card>
    </div>
    <h3 v-else>You have no memes saved currently 🤷‍♀️</h3>
  </div>
</template>


<script>
import AppCard from "./AppCard";
import AppBtn from "./AppButton";
// import LocalStorageService from "../services/localStorageService";
import FirestoreService from "../services/firestoreService";

export default {
  name: "MemeCollection",
  components: {
    AppCard,
    AppBtn
  },
  props: ["memes"],
  computed: {
    getMemes() {
      console.log(this.memes);
      return this.memes;
    }
  },
  data() {
    return {
      memeToEditTitle: "",
      memeToEditDescription: "",
      memeToEditUrl: "",
      memeToEditPosition: null
    };
  },
  methods: {
    openEditMemeDialog(index) {
      this.$modal.show("edit", { memeToEdit: this.getMemes[index], index });
    },
    selectMemeToEdit(event) {
      this.memeToEditTitle = event.params.memeToEdit.title;
      this.memeToEditDescription = event.params.memeToEdit.description;
      this.memeToEditUrl = event.params.imgUrl;
      this.memeToEditPosition = event.params.index;
      this.$modal.hide("edit");
    },
    async onEdit(index) {
      const firestoreService = new FirestoreService();
      const selectedMemeId = this.getMemes[index].id;
      console.log("SELECTED", this.selectedMemeId);
      await firestoreService.editMeme(selectedMemeId, {
        title: this.memeToEditTitle,
        description: this.memeToEditDescription
      });
      this.$emit("storageUpdate");
    },
    onDelete(index) {
      const firebaseService = new FirestoreService();
      const selectedMemeId = this.getMemes[index].id;
      firebaseService.deleteMeme(selectedMemeId);
      this.$emit("storageUpdate");
    }
  }
};
</script>

<style scroped>
.meme-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5em auto;
  height: 100%;
  width: 100%;
}

.card-image {
  width: 250px;
  height: 150px;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-title {
  margin: 0.5em 0em;
  font-size: 0.7em;
}
.card-description {
  font-size: 0.5em;
}

@media screen and (min-width: 600px) {
  .card-content {
    display: flex;
    flex-direction: row;
  }

  .card-title {
    margin: 0.5em 0em;
    font-size: 1em;
  }

  .card-image {
    width: 40%;
    height: 100%;
  }

  .content-text {
    margin: 1em;
  }
}

.card-action {
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.5em;
}

.edit-modal {
  background-color: #263238;
  height: 100%;
  width: 100%;
  padding: 1em;
  position: relative;
}
</style>  