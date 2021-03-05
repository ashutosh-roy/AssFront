<template>
  <div>
    <!-- <Longuestion/> -->
    <!-- <b-row align-h="center">
     <Image v-if="image" v-on:delete-form="image = false" v-on:add-image="addimage"/>
    </b-row> -->
    <b-row align-h="center" v-if="checkQuestions() == true">
      <b-button
        style="float:right; margin-left:90%;"
        v-b-modal.modal-1
        :disabled="formActivity()"
        ><i class="fas fa-plus"></i
      ></b-button>
    </b-row>
    <div
      style="height:100%;width:100%;"
      v-if="checkQuestions() == false && formActivity() == false"
    >
      <b-card class="card">
        <b-row align-h="center" align-v="center">
          <b-button
            variant="outline"
            style="border:none; color:grey"
            v-b-modal.modal-1
            ><i class="fas fa-plus fa-7x"></i
          ></b-button>
        </b-row>

        <b-row align-h="center" align-v="center">
          <span style="color:grey">Click to start adding tests</span>
        </b-row>
      </b-card>
    </div>
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
          fitb = true;
          $bvModal.hide('modal-1');
        "
        >Fill In The Blanks</b-button
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
          match = true;
          $bvModal.hide('modal-1');
        "
        >Match the Following</b-button
      >
      <b-button
        class="buttonchoice"
        variant="outline-secondary"
        @click="
          Comprehensive = true;
          $bvModal.hide('modal-1');
        "
        >Unseen Passage</b-button
      >
    </b-modal>
    <b-row align-h="center">
      <b-col cols="12">
        <div :key="longQuestionData">
          <LongAnswerCard
            :data="longQuestionData"
            v-if="longQuestionData.length != 0"
            v-on:delete-entry="deleteEntry"
            v-on:edit-entry="editLongQuestion"
          />
        </div>
        <div :key="shortQuestionData">
          <ShortAnswerCard
            :data="shortQuestionData"
            v-if="shortQuestionData.length != 0"
            v-on:delete-entry="deleteShortEntry"
            v-on:edit-entry="editShortQuestion"
          />
        </div>
        <div :key="mcqdata">
          <MCQCard
            :data="mcqdata"
            v-if="mcqdata.length != 0"
            v-on:delete-entry="deleteMcqEntry"
            v-on:edit-entry="editMcqQuestion"
          />
        </div>
        <div :key="fillInTheBlanksData">
          <FillInTheBlanksCard
            :data="fillInTheBlanksData"
            v-if="fillInTheBlanksData.length != 0"
            v-on:delete-entry="deleteFillInTheBlanksEntry"
            v-on:edit-entry="editFillInTheBlanksQuestion"
          />
        </div>
        <div :key="MatchTheFollowingData">
          <MatchTheFollowingCard
            :data="MatchTheFollowingData"
            v-if="MatchTheFollowingData.length != 0"
            v-on:delete-entry="deleteMatchTheFollowingEntry"
            v-on:edit-entry="editMatchTheFollowing"
          />
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="12">
        <!-- <multipleTypeQuestions v-show="false" /> -->
        <div :key="longanswer">
          <LongAnswer
            v-if="longanswer"
            v-on:delete-form="longanswer = false"
            v-on:question-added="addlongquestion"
            :entry="editLongID"
          />
        </div>
        <ShortAnswer
          v-if="shortAnswer"
          v-on:delete-form="shortAnswer = false"
          v-on:question-added="addshortquestion"
          :entry="editShortID"
        />
        <FillInTheBlanks
          v-if="fitb"
          v-on:delete-form="fitb = false"
          v-on:question-added="addFillInTheBlanks"
          :entry="editFitbID"
        />
        <MatchTheFollowing
          v-if="match"
          v-on:delete-form="match = false"
          v-on:question-added="addMatchTheFollowing"
          :entry="editMatchID"
        />
        <mcq
          v-if="mcq"
          v-on:delete-form="mcq = false"
          v-on:question-added="addmcq"
          :entry="editMcqID"
        />
        <Comprehensive
          v-if="Comprehensive"
          v-on:delete-form="Comprehensive = false"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import LongAnswerCard from "../components/displayCards/longAnswerCard";
import MatchTheFollowing from "../components/forms/MatchTheFollowing.vue";
import MCQCard from "../components/displayCards/mcqCard.vue";
import FillInTheBlanks from "../components/forms/fillInTheBlanks.vue";
import LongAnswer from "../components/forms/longAnswer";
import ShortAnswer from "../components/forms/shortAnswer";
import mcq from "../components/forms/Mcq";
import ShortAnswerCard from "../components/displayCards/shortAnswerCard";
import {
  getMCQquestion,
  getCommonQuestion,
  getFillInTheBlanksquestion,
  getMatchTheFollowingQuestion,
} from "../apiFunctions";
import Comprehensive from "../components/forms/Comprehensive";
import FillInTheBlanksCard from "../components/displayCards/fillInTheBlanksCard.vue";
import MatchTheFollowingCard from "../components/displayCards/matchTheFollowingCard.vue";

export default {
  name: "Home",
  components: {
    // multipleTypeQuestions,
    LongAnswerCard,
    LongAnswer,
    ShortAnswer,
    mcq,
    ShortAnswerCard,
    MCQCard,
    Comprehensive,
    FillInTheBlanks,
    FillInTheBlanksCard,
    MatchTheFollowingCard,
    MatchTheFollowing,
  },
  data() {
    return {
      shortAnswer: false,
      longanswer: false,
      match: false,
      mcq: false,
      fitb: false,
      Comprehensive: false,
      longQuestionData: [],
      shortQuestionData: [],
      mcqdata: [],
      ComprehensiveData: [],
      fillInTheBlanksData: [],
      MatchTheFollowingData: [],
      editLongID: -1,
      editShortID: -1,
      editMcqID: -1,
      editFitbID: -1,
      editMatchID: -1,
    };
  },
  methods: {
    checkQuestions() {
      if (
        this.longQuestionData.length != 0 ||
        this.shortQuestionData.length != 0 ||
        this.mcqdata.length != 0 ||
        this.MatchTheFollowingData.length != 0 ||
        this.fillInTheBlanksData.length != 0
      ) {
        this.$emit("show-db");
        return true;
      } else {
        this.$emit("noshow-db");
        return false;
      }
    },
    formActivity() {
      if (
        this.shortAnswer ||
        this.longanswer ||
        this.mcq ||
        this.match ||
        this.fitb
      ) {
        this.$emit("show-db");
        return true;
      } else {
        return false;
      }
    },
    deleteEntry(question) {
      this.longQuestionData = this.longQuestionData.filter(
        (data) => data.question != question
      );
    },
    deleteShortEntry(question) {
      this.shortQuestionData = this.shortQuestionData.filter(
        (data) => data.question != question
      );
    },

    deleteMcqEntry(question) {
      this.mcqdata = this.mcqdata.filter((data) => data.question != question);
    },

    deleteFillInTheBlanksEntry(question) {
      this.fillInTheBlanksData = this.fillInTheBlanksData.filter(
        (data) => data.question != question
      );
    },

    deleteMatchTheFollowingEntry(question) {
      this.MatchTheFollowingData = this.MatchTheFollowingData.filter(
        (data) => data.question != question
      );
    },

    addlongquestion(longquesdata) {
      this.longQuestionData.push(longquesdata);
      this.longanswer = false;
    },
    addshortquestion(shortquesdata) {
      this.shortQuestionData.push(shortquesdata);
      this.shortAnswer = false;
    },

    addmcq(mcqdata) {
      this.mcqdata.push(mcqdata);
      this.mcq = false;
    },
    addFillInTheBlanks(fillInTheBlanksData) {
      this.fillInTheBlanksData.push(fillInTheBlanksData);
      this.fitb = false;
    },
    addMatchTheFollowing(MatchTheFollowingData) {
      this.MatchTheFollowingData.push(MatchTheFollowingData);
      this.match = false;
    },
    addComprehensive(ComprehensiveData) {
      this.ComprehensiveData.push(ComprehensiveData);
      this.Comprehensive = false;
    },
    editLongQuestion(id) {
      this.editLongID = id;
      this.longanswer = true;
    },
    editShortQuestion(id) {
      this.editShortID = id;
      this.shortAnswer = true;
    },
    editMcqQuestion(id) {
      this.editMcqID = id;
      this.mcq = true;
    },
    editFillInTheBlanksQuestion(id) {
      this.editFitbID = id;
      this.fitb = true;
    },
    editMatchTheFollowing(id) {
      this.editMatchID = id;
      this.match = true;
    },
  },
  created: function() {
    getMCQquestion()
      .then((res) => (this.mcqdata = res.data.data))
      .catch((err) => console.log(err));
    getFillInTheBlanksquestion()
      .then((res) => (this.fillInTheBlanksData = res.data.data))
      .catch((err) => console.log(err));
    getMatchTheFollowingQuestion()
      .then((res) => (this.MatchTheFollowingData = res.data.data))
      .catch((err) => console.log(err));
    getCommonQuestion().then((res) => {
      var i = 0;
      while (i < res.data.data.length) {
        if (res.data.data[i].questionType == "Long Answer Questions") {
          this.longQuestionData.push(res.data.data[i]);
        } else if (res.data.data[i].questionType == "Short Answer Questions") {
          this.shortQuestionData.push(res.data.data[i]);
        } else if (res.data.data[i].questionType == "Video") {
          this.videodata.push(res.data.data[i]);
        } else if (res.data.data[i].questionType == "Audio") {
          this.audiodata.push(res.data.data[i]);
        } else {
          this.imagedata.push(res.data.data[i]);
        }
      }
    });
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
.card {
  height: 75vh;
  display: grid;
  align-items: center;
  padding: 150px;
  background: transparent;
}
</style>
