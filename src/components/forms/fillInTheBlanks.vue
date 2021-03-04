<template>
  <div>
    <b-card class="card" header-tag="header">
      <template #header>
        <div>
          Fill In The Blanks
          <b-row align-h="end">
            <b-button
              variant="outline-secondary"
              @click="$emit('delete-form')"
              style="border:none"
              ><i class="fas fa-trash"></i
            ></b-button>
          </b-row>
        </div>
      </template>
      <b-card-text>
        <b-form inline>
          <div style="width:100%; text-align:left">
            <b-form-input
              class="input"
              v-model="question.topic"
              autofocus
              placeholder="Topic"
            >
            </b-form-input>

            <b-form-select
              v-model="question.difficultyLevel"
              :options="options"
              class="input"
            ></b-form-select>
            <br />

            <b-form-input
              class="input"
              v-model="question.question"
              placeholder="Question"
              style="width:80%;margin-top:1vh"
            >
            </b-form-input>
            <b-button variant="outline" class="btnn">
              <i class="fas fa-images"></i
            ></b-button>
            <br />
            <br />
            <br />
            <div class="base">
              <div v-for="i in optionnum" :key="i">
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <input type="radio" disabled />
                  </b-input-group-prepend>
                  <b-form-input
                    autofocus
                    class="input"
                    v-model="question.options[i - 1]"
                    placeholder="Answer"
                    style="width:60%;margin-top:1vh"
                  >
                  </b-form-input>
                  <!-- <div :key="answer[i - 1]">
                    <b-button
                      :variant="answer[i - 1]"
                      @click="answerchange(question.options[i - 1], i)"
                      style="border:none"
                    >
                      <i class="fas fa-check 7x"></i>
                    </b-button>
                  </div> -->

                  <b-button variant="outline">
                    <i
                      class="fas fa-trash"
                      @click="
                        question.options.splice(i - 1, 1);
                        optionnum -= 1;
                      "
                    ></i>
                  </b-button>
                </b-input-group>
              </div>

              <br />
              <b-button
                variant="outline"
                class="btts"
                style="float:left"
                @click.enter="addOptions()"
                >Add Option</b-button
              >
              <!-- <b-button
                variant="outline"
                class="btts-1"
                style="float:left"
                @click="addOptions()"
                >/ Others</b-button
              > -->
            </div>

            <b-row align-h="end">
              <b-form inline>
                <b-form-checkbox
                  v-model="question.autoCorrection"
                  class="switch"
                  name="check-button"
                  switch
                >
                  Auto Correction
                </b-form-checkbox>

                <b-form-checkbox
                  v-model="question.required"
                  class="switch"
                  name="check-button"
                  switch
                >
                  Required
                </b-form-checkbox>
                <b-dropdown
                  split
                  variant="primary"
                  text="Add"
                  class="m-2 mt-2 p-0 add-btn"
                  @click="addquestion()"
                >
                  <b-dropdown-item
                    @click="question.addToDatabank = !question.addToDatabank"
                  >
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="question.addToDatabank"
                      name="checkbox-1"
                    >
                      Add to date bank
                    </b-form-checkbox>
                  </b-dropdown-item>
                  <b-dropdown-item
                    @click="question.addToPublic = !question.addToPublic"
                  >
                    <b-form-checkbox
                      id="checkbox-2"
                      v-model="question.addToPublic"
                      name="checkbox-2"
                    >
                      Add Publicly
                    </b-form-checkbox></b-dropdown-item
                  >
                </b-dropdown>
              </b-form>
            </b-row>
          </div>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import {
  postFillInTheBlanksquestion,
  getFillInTheBlanksquestion,
} from "../../apiFunctions";
export default {
  name: "FillInTheBlanks",
  props: {
    entry: Number,
  },
  components: {},
  data() {
    return {
      selected: "null",
      answer: ["outline-dark"],
      options: [
        { value: null, text: "Difficulty", disabled: true },
        { value: "1", text: "Difficulty Level 1" },
        { value: "2", text: "Difficulty Level 2" },
        { value: "3", text: "Difficulty Level 3" },
        { value: "4", text: "Difficulty Level 4" },
        { value: "5", text: "Difficulty Level 5" },
      ],

      optionnum: 1,
      question: {
        topic: "",
        difficultyLevel: null,
        question: "",
        options: [],
        answerkey: [],
        autoCorrection: 0,
        required: 0,
        addToPublic: false,
        addToDatabank: false,
        fileUpload: "",
      },

      /*subject = data["subject"]
        topic = data["topic"]
        difficultyLevel = data["difficultyLevel"]
        question = data["question"]
        options = json.dumps(data["options"])    
        answerKey = json.dumps(data["answerKey"])
        autoCorrection = data["autoCorrection"]
        required = data["required"]
        addToPublic = data["addToPublic"]
        addToDatabank = data["addToDatabank"]
        fileUpload = data["fileUpload"] */
    };
  },
  methods: {
    answerchange(ans, i) {
      console.log("we're here atleast" + ans);
      if (this.answer[i - 1] == "outline-dark") {
        if (ans != null) {
          this.answer[i - 1] = "outline-success";
          this.question.answerkey.push(ans);
        }

        console.log(this.question.answerkey);
      } else {
        this.answer[i - 1] = "outline-dark";
        this.question.answerkey = this.question.answerkey.filter(
          (added) => added != ans
        );
        console.log(this.question.answerkey);
      }
    },
    addOptions() {
      this.optionnum = this.optionnum + 1;
      this.answer.push("outline-dark");
    },
    deleteOptions(i) {
      this.question.options = this.question.options.filter(
        (choice) => choice != choice[i]
      );
    },
    addquestion() {
      postFillInTheBlanksquestion(this.question)
        .then((res) => console.log("Fill In The Blanks data saved!" + res))
        .catch((err) => console.log(err));
      this.$emit("question-added", this.question);
    },
  },
  created: function() {
    if (this.entry != -1) {
      getFillInTheBlanksquestion().then((res) => {
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
  text-align: left;
}
.input {
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0px;
  outline: none;
  width: fit-content;
  margin-right: 2vh;
  outline: 0px;
  background-color: transparent;
}
.input::after {
  border: none;
  outline: none;
  outline-width: 0px;
}
.switch {
  margin-top: 2vh;
  margin-right: 2vh;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.custom-select:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.base {
  width: 100%;
}
.sss {
  border-top: none;
  border-right: none;
  border-left: none;
}
.btnn {
  border: none;
}
.btts {
  border: none;
}

.btts-1 {
  color: blue;
  border: none;
}

.bottom-button {
  right: 0;
}
.add-btn {
  color: green;
}

.tsf {
  margin-left: 15px;
}

.input-group-text {
  border: none;
  background-color: transparent;
}
</style>
