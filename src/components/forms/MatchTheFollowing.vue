<template>
  <div class="questionboxcontainer">
    <div class="questionboxcard1">
      <b-card class="card" header-tag="header">
        <template #header>
          Match The Following
          <div style="height:4vh">
            <b-row align-h="end">
              <b-button
                style="margin-top:1%"
                variant="outline-secondary"
                @click="$emit('delete-form')"
                ><i class="fas fa-trash"></i
              ></b-button>
            </b-row>
          </div>
        </template>
        <b-card-text>
          <b-form inline>
            <div style="width:100%">              
              <b-container class="bv-example-row">
                <div>
                  <b-row>
                    <b-col>
                      <b-form-input
                        class="input"
                        v-model="questions.topic"
                        placeholder="Topic"
                      ></b-form-input>
                      <b-form-select
                        v-model="questions.difficultyLevel"
                        :options="options"
                        class="input"
                      ></b-form-select>
                    </b-col>
                  </b-row>
                </div>
              </b-container>              
              <div class="inputanswers" v-for="i in matchQues" :key="i">
                <div class="questionrows">
                  <b-input-group class="inputgrp">
                    <template #prepend>
                      <b-form-radio disabled>
                        <span class="sr-only"
                          ></span
                        >
                      </b-form-radio>
                    </template>
                    <b-form-input v-model="questions.question.sideA[i-1]"></b-form-input>
                    <b-button variant="outline-secondary">
                      <i class="fas fa-file-upload"></i>
                    </b-button>
                    <b-form-input v-model="questions.question.sideB[i-1]"></b-form-input>
                    <b-button variant="outline-secondary">
                      <i class="fas fa-file-upload"></i>
                    </b-button>
                    <b-button
                      variant="outline-secondary"
                      class="deletebutton"
                      @click="removerows(i - 1)"                       
                    >
                      <i class="fas fa-trash"></i>
                    </b-button>
                  </b-input-group>
                </div>
              </div>
              <!-- radio start -->
              <!-- <div class="inputanswers" v-for="(input,k) in inputs" :key="k" >   -->
              <div class="inputanswers questionrows">
                <b-input-group class="inputgrp">
                  <!-- <template #prepend>
                        <b-input-group-text style="margin-bottom: 20%"><li></li></b-input-group-text>
                        </template> -->
                  <template #prepend>
                    <b-form-radio disabled>
                      <span class="sr-only"
                        >Radio for following text input</span
                      >
                    </b-form-radio>
                  </template>

                  <b-form-input
                    @click="addInput()"
                    placeholder="Side A"
                    class="input"
                    readonly style="background-color:transparent"></b-form-input
                  >
                  <b-form-input
                    @click="addInput()"
                    placeholder="Side B"
                    class="input"
                    readonly style="background-color:transparent"></b-form-input
                  >
                </b-input-group>
              </div>
              <!-- </div> -->

              <!-- radio end -->

              <b-row align-h="end">
                <!-- <b-input-group style="padding-left:70%"> -->
                <b-form-checkbox
                  v-model="questions.autoCorrection"
                  class="switch"
                  name="check-button"
                  switch
                >
                  Auto Correction
                </b-form-checkbox>

                <b-form-checkbox
                  v-model="questions.required"
                  class="switch"
                  name="check-button"
                  switch
                >
                  Required
                </b-form-checkbox>
                <!-- <template #append> -->

                <b-button-group class="m-2 mt-4 p-0">
                  <!-- <b-button @click="add(k)" v-show="k || ( !k && inputs.length >= 0)">ADD</b-button> -->
                  <b-dropdown
                    split
                    variant="primary"
                    text="Add"
                    right
                    class="add-btn"
                    style="margin-bottom:1%"
                    @click="addquestion()"
                  >
                    <b-dropdown-item>
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="questions.addToDatabank"
                        name="checkbox-1"
                      >
                        Add to databank
                      </b-form-checkbox>
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="questions.addToPublic"
                        name="checkbox-1"
                      >
                        Add Publicly
                      </b-form-checkbox>
                    </b-dropdown-item>
                  </b-dropdown>
                </b-button-group>
                <!-- </b-input-group> -->
              </b-row>
            </div>

            <!-- </template> -->
          </b-form>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>
<script>
import { postMatchTheFollowingQuestion,getMatchTheFollowingQuestion } from "../../apiFunctions";
export default {
  name: "MatchTheFollowing",
  data() {
    return {
      optionnum: 1,
      matchQues:0,
      questions: {
        topic: "",
        difficultyLevel: null,
        question: {
          sideA:[],
          sideB:[]
        },
        questionType: "Mtach the following Questions",
        answerKey: this.question,
        autoCorrection: 0,
        required: 0,
        addToPublic: false,
        addToDatabank: false,        
        fileUpload: "",
      },
      selected: "null",
      options: [
        { value: null, text: "Difficulty" },
        { value: "1", text: "Difficulty Level 1" },
        { value: "2", text: "Difficulty Level 2" },
        { value: "3", text: "Difficulty Level 3" },
        { value: "4", text: "Difficulty Level 4" },
        { value: "5", text: "Difficulty Level 5" }
      ]
      //   selectedoptions: 'first',
      //     options1: [
      //       { text: 'First radio', value: 'first' },
      //       { text: 'Second radio', value: 'second' },
      //       { text: 'Third radio', value: 'third' }
      //     ]
    };
  },
  methods: {
    addquestion() {
      postMatchTheFollowingQuestion(this.questions)
        .then((res) => console.log("MCQ data saved!" + res))
        .catch((err) => console.log(err));
      this.$emit("question-added", this.questions);
    },
    addInput(){
      this.matchQues+=1;
      console.log(this.matchQues)
    },
    addsides() {
      this.optionnum = this.optionnum + 1;
      // this.answer.push("outline-dark");
      this.questions.answerKey.push({
        sideA: "",
        sideB: ""
      });
      console.log(this.questions.answerKey);
    },    
    removerows(index) {
      this.questions.question.sideA.splice(index, 1);
      this.questions.question.sideB.splice(index,1)
      this.matchQues-=1
    }    
  },
created: function() {
    if (this.entry != -1) {
      getMatchTheFollowingQuestion().then((res) => {
        var i = 0;
        while (i < res.data.data.length) {
          if (res.data.data[i].id == this.entry) {
            this.questions = res.data.data[i];
          }
          i++;
        }
      });
    }
  },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
  text-align: start;
}

.input {
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0px;
  width: fit-content;
  margin-right: 2vh;
}
.input:focus {
  background-color: transparent;
  outline-width: 0px;
}
.switch {
  margin-top: 2vh;
  margin-right: 2vh;
}
.inputanswers {
  padding-top: 1%;
  width: 100%;
}
.matchthefollowing {
  width: 100%;
}
/* .inputgrp{
    
} */
.form-control {
  margin: 1%;
  background-color: transparent;
  outline-width: 0px;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn {
  border: none;
  padding-top: 0.5%;
  margin-top: 1%;
  margin-bottom: 0.7%;
}
.deletebutton {
  margin-left: 0.5%;
}
/* .delbutton{
    margin-left: 200%;
    
 } */
/*  
.inputfield{
    width: 100%;
    margin-left:-1%;

} */
.input-group-text {
  padding-top: 0.5%;
  margin-top: 28%;
  margin-bottom: 2%;
  border: none;
}
.input:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/* .col-10 {
    margin-left: -38%;
} */
.custom-control {
  padding-left: 3rem;
  padding-top: 1.2rem;
}
</style>
