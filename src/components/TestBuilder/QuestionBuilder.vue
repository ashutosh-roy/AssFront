<template>
  <vs-row>
    <vs-col>
      <vs-switch color="success" v-model="colapsedView">
        <span slot="on">Collapsed View</span>
        <span slot="off">Expaned</span>
      </vs-switch>
    </vs-col>
    <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      vs-sm="12"
      vs-lg="12"
      vs-xs="12"
    >
      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <vs-card style=" min-height: 250px;">
            <div slot="header">
              <vs-row vs-justify="flex-start">
                <vs-col
                  vs-lg="6"
                  vs-xs="6"
                  vs-sm="6"
                  type="flex"
                  vs-justify="left"
                  vs-align="left"
                  ><h3>
                    Tests
                  </h3></vs-col
                >
                <vs-col
                  vs-lg="6"
                  vs-xs="6"
                  vs-sm="6"
                  type="flex"
                  vs-justify="flex-end"
                  vs-align="flex-end"
                >
                  <vs-button
                    style="float: right;"
                    type="gradient"
                    color="primary"
                    icon="add"
                    size="small"
                    @click="addSection"
                    >Section</vs-button
                  >
                </vs-col>
              </vs-row>
            </div>
            <div
              v-for="section in sections"
              :key="section.id"
              style="padding-bottom: 20px;"
            >
              <vs-row vs-justify="center">
                <vs-col
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="11"
                >
                  <vs-card style=" min-height: 150px;">
                    <div slot="header">
                      <vs-row vs-justify="flex-start">
                        <vs-col
                          vs-lg="6"
                          vs-xs="6"
                          vs-sm="6"
                          type="flex"
                          vs-justify="left"
                          vs-align="left"
                          ><h1>Section {{ section.id }}</h1></vs-col
                        >
                        <vs-col
                          vs-lg="6"
                          vs-xs="6"
                          vs-sm="6"
                          type="flex"
                          vs-justify="flex-end"
                          vs-align="flex-end"
                        >
                          <vs-button
                            style="float: right;"
                            type="gradient"
                            color="primary"
                            icon="add"
                            size="small"
                            @click="addQuestion(section.id)"
                            >Question</vs-button
                          >
                          <vs-button
                            style="float: right; margin-right: 5px;"
                            radius
                            type="gradient"
                            color="danger"
                            icon="remove"
                            size="small"
                            @click="removeSection(section.id)"
                          ></vs-button>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row
                        v-if="colapsedView"
                        vs-justify="flex-center"
                        style=""
                      >
                        <vs-col
                          vs-lg="1"
                          vs-xs="2"
                          vs-sm="2"
                          type="flex"
                          v-for="ques in section.questions"
                          :key="ques.id"
                          vs-justify="flex-center"
                          vs-align="flex-center"
                          style="border: 1px dotted black; border-radius: 10px; text-align: center; margin: 4px;"
                        >
                          <div style="margin-top:25px; margin-bottom:25px;">
                            <h3>Q{{ ques.id }}</h3>
                          </div>
                        </vs-col>
                      </vs-row>
                      <vs-row v-else vs-justify="flex-center" style="">
                        <vs-col
                          vs-lg="12"
                          vs-xs="12"
                          vs-sm="12"
                          type="flex"
                          v-for="ques in section.questions"
                          :key="ques.id"
                          vs-justify="flex-center"
                          vs-align="flex-center"
                          style="border: 1px dotted black; border-radius: 10px; text-align: left; padding: 10px; margin: 4px;"
                        >
                          <div style=" ">
                            <h3>
                              <vs-chip color="primary">
                                Question {{ ques.id }}</vs-chip
                              >
                              <vs-chip
                                style="margin-left: 5px;"
                                color="warning"
                              >
                                {{ ques.type.toUpperCase() }}</vs-chip
                              >
                              <br /><br />
                              <div v-html="ques.value"></div>
                              <!--Type Of Question specifics printing-->

                              <vs-list v-if="ques.type === 'mcq'">
                                Options List
                                <vs-list-item
                                  v-for="item in ques.response.options"
                                  :key="item"
                                  :title="item"
                                ></vs-list-item>
                              </vs-list>
                            </h3>
                          </div>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div slot="footer">
                      <vs-row vs-justify="flex-end"> </vs-row>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </div>

            <div slot="footer">
              <vs-row vs-justify="flex-end"> </vs-row>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </vs-col>
    <!-- All Popups starting -->
    <vs-popup
      class="holamundo"
      title="Choose Type of Question"
      :active.sync="chooseQuestionPopup"
    >
      <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" style="">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          <div
            style="width: 100%; height: 100%; text-align: center; padding-top: 40px;"
            @click="addMCQQuestion"
          >
            MCQ
          </div>
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          <div
            style="width: 100%; height: 100%; text-align: center; padding-top: 40px;"
            @click="
              shortQuestionBuilder.popup = true;
              chooseQuestionPopup = false;
            "
          >
            Short
          </div>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          <div
            style="width: 100%; height: 100%; text-align: center; padding-top: 40px;"
            @click="
              longQuestionBuilder.popup = true;
              chooseQuestionPopup = false;
            "
          >
            Long
          </div>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          MTF
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          Video
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          Audio
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          Fillup
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          Image
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          Image
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          class="typeOfQuestionCard"
          vs-lg="2"
          vs-xs="4"
          vs-sm="4"
        >
          Image
        </vs-col>
      </vs-row>
    </vs-popup>
    <!--MCQ Question Modal-->
    <vs-popup
      class="holamundo"
      title="MCQ Builder"
      :active.sync="mcqQuestionBuilder.popup"
    >
      <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" style="">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          style="margin: 10px;"
          vs-lg="12"
          vs-xs="12"
          vs-sm="12"
        >
          <vue-editor
            v-model="mcqQuestionBuilder.data.value"
            placeholder="Enter Question Here !"
          ></vue-editor>
        </vs-col>

        <vs-col
          vs-type="flex"
          vs-justify="left"
          vs-align="left"
          style="margin: 10px;"
          vs-lg="12"
          vs-xs="12"
          vs-sm="12"
        >
          <vs-card>
            <div slot="header">
              <h3>
                MCQ Options
              </h3>
            </div>
            <div>
              <vs-list>
                <vs-list-item
                  :key="item"
                  v-for="item in mcqQuestionBuilder.data.response.options"
                  :title="item"
                >
                  <vs-button
                    radius
                    color="danger"
                    type="gradient"
                    icon="remove"
                    size="small"
                  ></vs-button>
                </vs-list-item>
              </vs-list>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button
                  type="gradient"
                  color="primary"
                  icon="add"
                  @click="mcqQuestionBuilder.addOptionpopup = true"
                ></vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
        <vs-row>
          <vs-button
            color="primary"
            @click="addMCQQuestion2QuestionPaper"
            type="gradient"
            icon="add"
            >Add Question</vs-button
          >
        </vs-row>
      </vs-row>
      <vs-popup
        classContent="popup-example"
        title="Add Option Popup"
        :active.sync="mcqQuestionBuilder.addOptionpopup"
      >
        <vs-input
          class="inputx"
          placeholder="Enter Option Here!"
          v-model="tempValue"
        />

        <vs-button
          color="primary"
          @click="addMCQOption"
          style="margin-top: 10px;"
          type="filled"
          >Add</vs-button
        >
      </vs-popup>
    </vs-popup>
    <!--Short Question Popup-->
    <vs-popup
      class="holamundo"
      title="Short Question Builder"
      :active.sync="shortQuestionBuilder.popup"
    >
      <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" style="">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          style="margin: 10px;"
          vs-lg="12"
          vs-xs="12"
          vs-sm="12"
        >
          <vue-editor
            v-model="shortQuestionBuilder.data.value"
            placeholder="Enter Question Here !"
          ></vue-editor>
        </vs-col>

        <vs-row>
          <vs-button
            color="primary"
            @click="addShortQuestion2QuestionPaper"
            type="gradient"
            icon="add"
            >Add Question</vs-button
          >
        </vs-row>
      </vs-row>
    </vs-popup>
    <!--Long Question Popup-->
    <vs-popup
      class="holamundo"
      title="Long Question Builder"
      :active.sync="longQuestionBuilder.popup"
    >
      <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" style="">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          style="margin: 10px;"
          vs-lg="12"
          vs-xs="12"
          vs-sm="12"
        >
          <vue-editor
            v-model="longQuestionBuilder.data.value"
            placeholder="Enter Question Here !"
          ></vue-editor>
        </vs-col>

        <vs-row>
          <vs-button
            color="primary"
            @click="addLongQuestion2QuestionPaper"
            type="gradient"
            icon="add"
            >Add Question</vs-button
          >
        </vs-row>
      </vs-row>
    </vs-popup>
  </vs-row>
</template>
<script>
import { VueEditor } from "vue2-editor";

export default {
  name: "QuestionBuilder",
  components: {
    VueEditor
  },
  data: function() {
    return {
      colapsedView: false,
      chooseQuestionPopup: false,
      tempValue: null,
      mcqQuestionBuilder: {
        popup: false,
        addOptionpopup: false,
        data: {
          type: "mcq",
          value: "Write your question here !",
          response: {
            type: "mcq",
            options: [],
            correct: null
          }
        }
      },
      shortQuestionBuilder: {
        popup: false,
        data: {
          type: "short",
          value: "Write your question here !",
          response: {
            type: "short",
            options: [],
            correct: null
          }
        }
      },
      longQuestionBuilder: {
        popup: false,
        data: {
          type: "long",
          value: "Write your question here !",
          response: {
            type: "long",
            options: [],
            correct: null
          }
        }
      },
      temp_sectionchoice: null,
      sections: [
        {
          id: 1,
          questions: [
            {
              type: "long",
              value: "<p>Write your question here !</p>",
              response: { type: "long", options: [], correct: null },
              id: 1
            },
            {
              type: "short",
              value: "<p>Write your question here !</p>",
              response: { type: "short", options: [], correct: null },
              id: 2
            },
            {
              type: "mcq",
              value: "<p>Write your question here !</p>",
              response: { type: "mcq", options: [], correct: null },
              id: 3
            },
            {
              type: "long",
              value: "Write your question here !",
              response: { type: "long", options: [], correct: null },
              id: 4
            },
            {
              type: "long",
              value: "Write your question here !",
              response: { type: "long", options: [], correct: null },
              id: 5
            },
            {
              type: "mcq",
              value: "<p>another op question</p>",
              response: {
                type: "mcq",
                options: ["op1", "op2", "op3", "op4"],
                correct: null
              },
              id: 6
            },
            {
              type: "short",
              value: "Write your question here !",
              response: { type: "short", options: [], correct: null },
              id: 7
            },
            {
              type: "long",
              value: "Write your question here !",
              response: { type: "long", options: [], correct: null },
              id: 8
            },
            {
              type: "mcq",
              value: "<p>Write your question here !</p>",
              response: { type: "mcq", options: [], correct: null },
              id: 9
            },
            {
              type: "short",
              value: "Write your question here !",
              response: { type: "short", options: [], correct: null },
              id: 10
            }
          ]
        },
        {
          id: 2,
          questions: [
            {
              type: "short",
              value: "Write your question here !",
              response: { type: "short", options: [], correct: null },
              id: 1
            },
            {
              type: "long",
              value: "Write your question here !",
              response: { type: "long", options: [], correct: null },
              id: 2
            },
            {
              type: "mcq",
              value: "Write your question here !",
              response: { type: "mcq", options: [], correct: null },
              id: 3
            },
            {
              type: "long",
              value: "Write your question here !",
              response: { type: "long", options: [], correct: null },
              id: 4
            },
            {
              type: "short",
              value: "Write your question here !",
              response: { type: "short", options: [], correct: null },
              id: 5
            }
          ]
        },
        {
          id: 3,
          questions: [
            {
              type: "short",
              value: "Write your question here !",
              response: { type: "short", options: [], correct: null },
              id: 1
            },
            {
              type: "mcq",
              value: "Write your question here !",
              response: { type: "mcq", options: [], correct: null },
              id: 2
            },
            {
              type: "long",
              value: "Write your question here !",
              response: { type: "long", options: [], correct: null },
              id: 3
            }
          ]
        }
      ]
    };
  },
  methods: {
    addSection: function() {
      this.sections.push({
        id: this.sections.length + 1,
        questions: []
      });
    },
    removeSection: function(id) {
      this.sections = this.sections.filter(section => section.id != id);
    },
    addQuestion: function(SectionID) {
      this.temp_sectionchoice = SectionID;
      this.chooseQuestionPopup = true;
    },
    addMCQQuestion: function() {
      this.chooseQuestionPopup = false;
      this.mcqQuestionBuilder.popup = true;
    },
    addMCQOption: function() {
      this.mcqQuestionBuilder.data.response.options.push(this.tempValue);
      this.tempValue = null;
      this.mcqQuestionBuilder.addOptionpopup = false;
    },
    addMCQQuestion2QuestionPaper: function() {
      var secid = this.temp_sectionchoice;
      var index = this.sections.findIndex(section => section.id == secid);
      const idx = this.sections[index].questions.length + 1;
      this.mcqQuestionBuilder.data.id = idx;
      const abc = this.mcqQuestionBuilder.data;
      this.sections[index].questions.push(abc);
      this.mcqQuestionBuilder.data = {
        type: "mcq",
        value: "Write your question here !",
        response: {
          type: "mcq",
          options: [],
          correct: null
        }
      };
      this.mcqQuestionBuilder.popup = false;
    },
    addShortQuestion2QuestionPaper: function() {
      var secid = this.temp_sectionchoice;
      var index = this.sections.findIndex(section => section.id == secid);
      const idx = this.sections[index].questions.length + 1;
      this.shortQuestionBuilder.data.id = idx;
      const abc = this.shortQuestionBuilder.data;
      this.sections[index].questions.push(abc);
      this.shortQuestionBuilder.data = {
        type: "short",
        value: "Write your question here !",
        response: {
          type: "short",
          options: [],
          correct: null
        }
      };
      this.shortQuestionBuilder.popup = false;
    },
    addLongQuestion2QuestionPaper: function() {
      var secid = this.temp_sectionchoice;
      var index = this.sections.findIndex(section => section.id == secid);
      const idx = this.sections[index].questions.length + 1;
      this.longQuestionBuilder.data.id = idx;
      const abc = this.longQuestionBuilder.data;
      this.sections[index].questions.push(abc);
      this.longQuestionBuilder.data = {
        type: "long",
        value: "Write your question here !",
        response: {
          type: "long",
          options: [],
          correct: null
        }
      };
      this.longQuestionBuilder.popup = false;
    }
  }
};
</script>
<style scoped>
.typeOfQuestionCard {
  border: 1px dashed black;
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}
.typeOfQuestionCard:hover {
  border: 2px dashed blue;
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  font-weight: bolder;
  border-radius: 10px;
  cursor: pointer;
}
</style>
