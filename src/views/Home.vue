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
      <b-button
        class="buttonchoice"
        variant="outline-secondary"
        @click="
          mcq = true;
          $bvModal.hide('modal-1');
        "
        >MCQ</b-button
      >
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
        <div :key="imagedata">
          <ImageCard :data="imagedata" v-if="imagedata.length != 0" />
        </div>
        <div :key="longQuestionData">
          <LongAnswerCard
            :data="longQuestionData"
            v-if="longQuestionData.length != 0"
          />
        </div>
        <div :key="shortQuestionData">
          <ShortAnswerCard
            :data="shortQuestionData"
            v-if="shortQuestionData.length != 0"
          />
        </div>
        <div :key="videodata">
          <VideoCard :data="videodata" v-if="videodata.length != 0" />
        </div>
        <div :key="mcqdata">
          <MCQCard :data="mcqdata" v-if="mcqdata.length != 0" />
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="7">
        <!-- <multipleTypeQuestions v-show="false" /> -->
        <LongAnswer
          v-if="longanswer"
          v-on:delete-form="longanswer = false"
          v-on:question-added="addlongquestion"
        />
        <ShortAnswer
          v-if="shortAnswer"
          v-on:delete-form="shortAnswer = false"
          v-on:question-added="addshortquestion"
        />
        <ImageQuestion
          v-if="image"
          v-on:delete-form="image = false"
          v-on:question-added="addimagequestion"
        />
        <Video
          v-if="video"
          v-on:delete-form="video = false"
          v-on:question-added="addvideoquestion"
        />
        <Audio
          v-if="audio"
          v-on:delete-form="audio = false"
          v-on:question-added="addaudioquestion"
        />
        <MatchTheFollowing v-if="match" v-on:delete-form="match = false" />
        <mcq
          v-if="mcq"
          v-on:delete-form="mcq = false"
          v-on:question-added="addmcq"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import LongAnswerCard from "../components/displayCards/longAnswerCard";
import AudioCard from "../components/displayCards/audioCard";
import ImageCard from "../components/displayCards/imageCard";
import MatchTheFollowing from "../components/forms/MatchTheFollowing.vue";
import MCQCard from "../components/displayCards/mcqCard.vue";
// import multipleTypeQuestions from "../components/forms/multipleType";
import LongAnswer from "../components/forms/longAnswer";
import ShortAnswer from "../components/forms/shortAnswer";
import ImageQuestion from "../components/forms/imageQuestion";
import Video from "../components/forms/videoQuestion";
import mcq from "../components/forms/Mcq";
import Audio from "../components/forms/audioQuestion";
import VideoCard from "../components/displayCards/videoCard";
import ShortAnswerCard from "../components/displayCards/shortAnswerCard";
export default {
  name: "Home",
  components: {
    // multipleTypeQuestions,
    LongAnswer,
    ShortAnswer,
    ImageQuestion,
    Video,
    Audio,
    MatchTheFollowing,
    AudioCard,
    ImageCard,
    LongAnswerCard,
    mcq,
    ShortAnswerCard,
    VideoCard,
    MCQCard,
  },
  data() {
    return {
      shortAnswer: false,
      longanswer: false,
      image: false,
      video: false,
      audio: false,
      match: false,
      mcq: false,
      audiodata: [],
      imagedata: [],
      longQuestionData: [],
      shortQuestionData: [],
      videodata: [],
      mcqdata: [],
    };
  },
  methods: {
    formActivity() {
      if (
        this.shortAnswer ||
        this.longanswer ||
        this.mcq ||
        this.match ||
        this.image ||
        this.audio ||
        this.video
      ) {
        return true;
      } else {
        return false;
      }
    },
    addaudioquestion(audiodata) {
      this.audiodata.push(audiodata);
      this.audio = false;
    },
    addimagequestion(imagedata) {
      this.imagedata.push(imagedata);
      this.image = false;
    },
    addlongquestion(longquesdata) {
      this.longQuestionData.push(longquesdata);
      this.longanswer = false;
    },
    addshortquestion(shortquesdata) {
      this.shortQuestionData.push(shortquesdata);
      this.shortAnswer = false;
    },
    addvideoquestion(videodata) {
      this.videodata.push(videodata);
      this.video = false;
    },
    addmcq(mcqdata) {
      this.mcqdata.push(mcqdata);
      this.mcq = false;
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
