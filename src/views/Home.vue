<template>
  <div>
    <!-- <Longuestion/> -->
    <!-- <b-row align-h="center">
     <Image v-if="image" v-on:delete-form="image = false" v-on:add-image="addimage"/>
    </b-row> -->
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
      <b-button class="buttonchoice" variant="outline-secondary"
      @click="
          FitBlanks = true;
          $bvModal.hide('modal-1');
        "
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
      <b-col md="7" sm="12">
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
        <div :key="fitblanksdata">
          <FillInTheBlanksCard
            :data="fitblanksdata"
            v-if="fitblanksdata.length != 0"
            v-on:delete-entry="deleteFitBEntry"
            v-on:edit-entry="editFitBQuestion"
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
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col md="7" sm="12">
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
        <MatchTheFollowing v-if="match" v-on:delete-form="match = false" />
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
        <!-- <div :key="FitBlanks"> -->
          <FillInTheBlanks
            v-if="FitBlanks"
            v-on:delete-form="FitBlanks = false"
            v-on:question-added="addfitB"
            :entry="editFitBID"
          />
        <!-- </div> -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import LongAnswerCard from "../components/displayCards/longAnswerCard";
import MatchTheFollowing from "../components/forms/MatchTheFollowing.vue";
import MCQCard from "../components/displayCards/mcqCard.vue";
// import multipleTypeQuestions from "../components/forms/multipleType";
import LongAnswer from "../components/forms/longAnswer";
import ShortAnswer from "../components/forms/shortAnswer";
import mcq from "../components/forms/Mcq";
import FillInTheBlanks from "../components/forms/fillInTheBlanks";
import ShortAnswerCard from "../components/displayCards/shortAnswerCard";
import { getMCQquestion, getCommonQuestion,getFillInTheBlanksquestion } from "../apiFunctions";
import Comprehensive from "../components/forms/Comprehensive";
import FillInTheBlanksCard from "../components/displayCards/fillInTheBlanksCard";
// import MatchTheFollowingCard from "../components/displayCards/matchTheFollowingCard";

export default {
  name: "Home",
  components: {
    // multipleTypeQuestions,
    LongAnswer,
    ShortAnswer,
    MatchTheFollowing,
    LongAnswerCard,
    mcq,
    ShortAnswerCard,
    MCQCard,
    Comprehensive,
    FillInTheBlanks,
    FillInTheBlanksCard,
    // MatchTheFollowingCard   
  },
  data() {
    return {
      shortAnswer: false,
      longanswer: false,
      match: false,
      mcq: false,
      FitBlanks: false,
      Comprehensive: false,
      longQuestionData: [],
      shortQuestionData: [],
      mcqdata: [],
      ComprehensiveData: [],
      fitblanksdata: [],
      editLongID: -1,
      editShortID: -1,
      editMcqID: -1,
      editFitBID: -1
    };
  },
  methods: {
    formActivity() {
      if (this.shortAnswer || this.longanswer || this.mcq || this.match) {
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
    deleteFitBEntry(question) {
      this.fitblanksdata = this.fitblanksdata.filter((data) => data.question != question);
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
    addfitB(fitblanksdata) {
      this.fitblanksdata.push(fitblanksdata);      
      this.FitBlanks = false;
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
    editFitBQuestion(id) {
      this.editFitBID = id;
      this.mcq = true;
    },
  },
  created: function() {
    getMCQquestion()
      .then((res) => (this.mcqdata = res.data.data))
      .catch((err) => console.log(err));
    getFillInTheBlanksquestion()
      .then((res) => (this.fitblanksdata = res.data.data))
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
</style>
