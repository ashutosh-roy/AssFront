<template>
  <div>
    <b-row align-h="center">
      <b-button
        style="float:right; margin-left:90%"
        v-b-modal.modal-1
        :disabled="formActivity()"
        ><i class="fas fa-plus"></i
      ></b-button>
    </b-row>
    <b-modal
      id="modal-1"
      centered
      hide-footer
      title="Choose Question Type"
      style="width:90vh"
    >
      <b-button class="buttonchoice" variant="outline-secondary">MCQ</b-button>
      <b-button
        class="buttonchoice"
        variant="outline-secondary"
        @click="
          longanswer = true;
          $bvModal.hide('modal-1');
        "
        >Long Answer</b-button
      >
      <b-button
        class="buttonchoice"
        variant="outline-secondary"
        @click="
          shortAnswer = true;
          $bvModal.hide('modal-1');
        "
        >Short Answer</b-button
      >
      <b-button
        class="buttonchoice"
        variant="outline-secondary"
        @click="
          image = true;
          $bvModal.hide('modal-1');
        "
        >Image</b-button
      >
      <b-button
        class="buttonchoice"
        variant="outline-secondary"
        @click="
          video = true;
          $bvModal.hide('modal-1');
        "
        >Video</b-button
      >
      <b-button
        class="buttonchoice"
        variant="outline-secondary"
        @click="
          audio = true;
          $bvModal.hide('modal-1');
        "
        >Audio</b-button
      >
      <b-button class="buttonchoice" variant="outline-secondary"
        >Fill in the Blanks</b-button
      >
      <b-button
        class="buttonchoice"
        variant="outline-secondary"
        @click="
          match = true;
          $bvModal.hide('modal-1');
        "
        >Match the Following</b-button
      >
      <b-button class="buttonchoice" variant="outline-secondary"
        >Unseen Passage</b-button
      >
    </b-modal>
    <b-row align-h="center">
      <b-col cols="7">
        <div :key="audiodata">
          <AudioCard :data="audiodata" v-if="audiodata.length != 0" />
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="7">
        <multipleTypeQuestions v-show="false" />
        <LongAnswer v-if="longanswer" v-on:delete-form="longanswer = false" />
        <ShortAnswer
          v-if="shortAnswer"
          v-on:delete-form="shortAnswer = false"
        />
        <Image v-if="image" v-on:delete-form="image = false" />
        <Video v-if="video" v-on:delete-form="video = false" />
        <Audio
          v-if="audio"
          v-on:delete-form="audio = false"
          v-on:question-added="addaudioquestion"
        />
        <MatchTheFollowing v-if="match" v-on:delete-form="match = false" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import AudioCard from "../components/displayCards/audioCard";
import MatchTheFollowing from "../components/forms/MatchTheFollowing.vue";
import multipleTypeQuestions from "../components/forms/multipleType";
import LongAnswer from "../components/forms/longAnswer";
import ShortAnswer from "../components/forms/shortAnswer";
import Image from "../components/forms/imageQuestion";
import Video from "../components/forms/videoQuestion";
import Audio from "../components/forms/audioQuestion";
export default {
  name: "Home",
  components: {
    multipleTypeQuestions,
    LongAnswer,
    ShortAnswer,
    Image,
    Video,
    Audio,
    MatchTheFollowing,
    AudioCard,
  },
  data() {
    return {
      shortAnswer: false,
      longanswer: false,
      image: false,
      video: false,
      audio: false,
      match: false,
      audiodata: [],
    };
  },
  methods: {
    formActivity() {
      if (this.shortAnswer == true || this.longanswer == true) {
        return true;
      } else {
        return false;
      }
    },
    addaudioquestion(audiodata) {
      this.audiodata.push(audiodata);
      this.audio = false;
    },
  },
};
</script>
<style scoped>
.buttonchoice {
  height: 80px;
  width: 90px;
  border: 1px dashed;
  padding: 0px;
}
</style>
