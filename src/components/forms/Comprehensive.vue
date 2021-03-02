<template>
  <div>
    <b-card class="card" header="header">
      <template #header>
        <div>
          Comprehensive
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
        <b-form inline @submit.prevent>
          <div style="width:100%">
            <b-form-input
              class="input"
              v-model="text"
              autofocus
              placeholder="Topic"
            >
            </b-form-input>

            <b-form-select
              v-model="selected"
              :options="options"
              class="input"
            ></b-form-select>
            <br />

            <b-form-input
              class="input"
              v-model="text2"
              placeholder="Comprehension"
              style="width:80%;margin-top:1vh"
            >
            </b-form-input>
            <b-button variant="outline" class="btnn">
              <i class="fas fa-images"></i
            ></b-button>
            <br />

            <b-dropdown
              id="dropdown-1"
              text="Select Question Type"
              class="m-md-2"
            >
              <b-dropdown-item @click="longQuestions += 1"
                >Long Answer</b-dropdown-item
              >
              <b-dropdown-item @click="shortQuestions += 1"
                >Short Answer</b-dropdown-item
              >
              <b-dropdown-item @click="mcqQuestions += 1"
                >Multiple Choice</b-dropdown-item
              >
              <b-dropdown-item @click="fillInBlanks += 1"
                >Fill in the Blanks</b-dropdown-item
              >
              <b-dropdown-item @click="matchthefollowing += 1"
                >Match the Following</b-dropdown-item
              >
            </b-dropdown>

            <div name="longAnswerQuestions" v-for="i in longQuestions" :key="i">
              <b-form-input
                class="input"
                v-model="text"
                placeholder="Long Answer Question"
                style="width:100%;margin-top:1vh"
              ></b-form-input>
            </div>
            <div
              name="shortAnswerQuestions"
              v-for="i in shortQuestions"
              :key="i"
            >
              <b-form-input
                class="input"
                v-model="text"
                placeholder="Short Answer Question"
                style="width:100%;margin-top:1vh"
              ></b-form-input>
            </div>
            <div name="mcqQuestions" v-for="i in mcqQuestions" :key="i">
              <b-form-input
                class="input"
                v-model="question"
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
                <div v-for="b in optionnum" :key="b">
                  <b-input-group>
                    <b-input-group-prepend is-text>
                      <input type="radio" disabled />
                    </b-input-group-prepend>
                    <b-form-input
                      autofocus
                      class="input"
                      placeholder="Answer"
                      style="width:60%;margin-top:1vh"
                    >
                    </b-form-input>
                    <div>
                      <b-button style="border:none">
                        <i class="fas fa-check 7x"></i>
                      </b-button>
                    </div>

                    <b-button variant="outline">
                      <i class="fas fa-trash" @click="optionnum -= 1"></i>
                    </b-button>
                  </b-input-group>
                </div>

                <br />
                <b-button
                  variant="outline"
                  class="btts"
                  style="float:left"
                  @click.enter="optionnum += 1"
                  >Add Option</b-button
                >
                <b-button
                  variant="outline"
                  class="btts-1"
                  style="float:left"
                  @click="optionnum += 1"
                  >/ Others</b-button
                >
              </div>
            </div>
            <b-row align-h="end">
              <b-form-checkbox
                v-model="checked"
                class="switch"
                name="check-button"
                switch
              >
                Auto Correction |
              </b-form-checkbox>

              <b-form-checkbox
                v-model="checked"
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
              >
                <b-dropdown-item>
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                  >
                    Add to date bank
                  </b-form-checkbox>
                </b-dropdown-item>
                <b-dropdown-item>
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                  >
                    Add Publicly
                  </b-form-checkbox></b-dropdown-item
                >
              </b-dropdown>
            </b-row>
          </div>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Comprehensive",
  components: {},
  data() {
    return {
      selected: "null",
      optionnum: 1,
      options: [
        { value: null, text: "Difficulty", disabled: true },
        { value: "1", text: "Difficulty 1" },
        { value: "2", text: "Difficulty 2" },
        { value: "3", text: "Difficulty 3" },
        { value: "4", text: "Difficulty 4" },
        { value: "5", text: "Difficulty 5" }
      ],
      longQuestions: 0,
      shortQuestions: 0,
      mcqQuestions: 0,
      fillInBlanks: 0,
      matchthefollowing: 0
    };
  },
  methods: {
    addOptions() {
      this.answerlist += 1;
    },
    addQuestion(selectedQues) {
      if (selectedQues == "1") {
        this.longQuestions += 1;
      } else if (selectedQues == "2") {
        this.shortQuestions += 1;
      } else if (selectedQues == "3") {
        this.mcqQuestions += 1;
      } else if (selectedQues == "4") {
        this.fillInBlanks += 1;
      } else if (selectedQues == "5") {
        this.matchthefollowing += 1;
      }
    },
    deleteOptions(option) {
      this.answerlist.splice(option, 1);
    }
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

.input-type {
  border-top: none;
  border-right: none;
  border-left: none;
  width: 20%;
}

.question-2 {
  border-top: none;

  border-right: none;
  border-left: none;
  float: left;
}
.question-3 {
  width: 70%;
}

.select-2 {
  border-top: none;
  border-right: none;
  border-left: none;
}

.imag-1 {
  margin-right: 90px;
}
</style>
