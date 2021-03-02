<template>
  <div>
    <b-card
      class="card"
      v-for="entry in data"
      :key="entry.question"
      header-tag="header"
    >
      <template #header>
        <div>
          <b-row>
            <b-col>
              <b-row align-h="end">
                <b-button
                  variant="outline"
                  @click="$emit('edit-entry', entry.id)"
                  style="border:none"
                  ><i class="fas fa-edit"></i
                ></b-button>
                <b-button
                  variant="outline"
                  @click="$emit('delete-entry', entry.question)"
                  style="border:none"
                  ><i class="fas fa-trash"></i
                ></b-button>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </template>
      Long Answer Type
      <br />
      <span style="color:grey" class="ml-3">Question</span>
      <br />
      <div>
        <b-row align-h="center">
          <div>
            <div v-if="isImage(entry.fileType)">
              <div v-if="entry.fileUpload.length > 0">
                <img class="audio-preview" :src="entry.fileUpload" />
              </div>
            </div>
            <div v-if="isAudio(entry.fileType)">
              <Media
                :kind="'audio'"
                :isMuted="false"
                :src="entry.fileUpload"
                :autoplay="false"
                :controls="true"
                :loop="true"
                width="70%"
                class="audio-preview"
              ></Media>
            </div>
            <div v-if="isVideo(entry.fileType)">
              <Media
                :kind="'video'"
                :isMuted="false"
                :src="entry.fileUpload"
                :autoplay="false"
                :controls="true"
                :loop="true"
                width="70%"
                height="30%"
                class="preview"
              ></Media>
            </div>
          </div>
        </b-row>
      </div>
      <span class="ml-5">
        {{ entry.question }}
      </span>
      <b-card-text>
        <div>
          <b-row align-h="end">
            <b-form-checkbox
              v-model="entry.autoCorrection"
              class="switch"
              name="check-button"
              switch
              disabled
            >
              Auto Correction
            </b-form-checkbox>
            <b-form-checkbox
              v-model="entry.required"
              class="switch"
              name="check-button"
              switch
              disabled
            >
              Required
            </b-form-checkbox>
          </b-row>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import Media from "@dongido/vue-viaudio";
import { isImage, isVideo, isAudio } from "../../checkFileType.js";
export default {
  name: "LongAnswerCard",
  components: {
    Media
  },
  props: {
    data: Array,
    type: String
  },
  mounted() {
    isImage(this.file);
    isVideo(this.file);
    isAudio(this.file);
  },
  methods: {
    isImage,
    isAudio,
    isVideo
  }
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
  text-align: left;
}
.audio-preview {
  width: 500px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.preview {
  width: 500px;
  height: 500px !important;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
</style>
