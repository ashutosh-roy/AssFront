<template>
  <div>
    <b-card class="cardx">
      <b-button variant="outline" style="border:none" @click="back()"
        ><i class="fas fa-arrow-left"></i
      ></b-button>
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1
              >Opening screen display</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    TEST NAME
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-input
                    class="input"
                    placeholder="Test name"
                    v-model="testname"
                    :disabled="!editablename"
                  />
                </b-col>
                <b-col cols="1">
                  <b-button
                    v-if="!editablename"
                    variant="outline"
                    @click="editablename = true"
                    style="border:none"
                    ><i class="fas fa-edit"></i
                  ></b-button>
                  <b-button
                    v-if="editablename"
                    variant="outline"
                    @click="editablename = false"
                    style="border:none"
                    ><i class="fas fa-check-circle "></i
                  ></b-button>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    TOPIC/BRANCH
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-input
                    class="input"
                    disabled
                    placeholder="Topic"
                    v-model="topic"
                  />
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    NUMBER OF SECTIONS
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-input
                    class="input"
                    disabled
                    placeholder="Number of Sections"
                    v-model="sectionnum"
                  />
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    TEST ORGANISER
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-input
                    class="input"
                    placeholder="Test Organiser"
                    v-model="testOrg"
                  />
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    TEST DESCRIPTION
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-textarea
                    id="textarea"
                    class="input"
                    v-model="testDesc"
                    placeholder="Test Description"
                    rows="3"
                    max-rows="3"
                  ></b-form-textarea>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    TEST INSTRUCTIONS
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-textarea
                    id="textarea"
                    class="input"
                    v-model="testInst"
                    placeholder="Test Instructions"
                    rows="3"
                    max-rows="3"
                  ></b-form-textarea>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    REAL TIME & DATE DISPLAY
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="dispRealdt"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    SHOW TOTAL TEST DURATION
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="dispDuration"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    SHOW TOTAL QUESTIONS COUNT
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="dispCount"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    ALLOW CANDIDATE REMARKS COLUMN
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="allowCandidateRemarks"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2
              >Questions Behaviour</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    NUMBER OF QUESTIONS PER SCREEN
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-input
                    class="input"
                    type="number"
                    placeholder="Number of Questions"
                    v-model="quesPerScreen"
                  />
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    RANDOMLY SHUFFLE QUESTIONS
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="shuffle"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    DISPLAY MANDATORY QUESTIONS ICON
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="dispReqStatus"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    DISPLAY MANDATORY QUESTIONS FIRST
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="displayReqFirst"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    DISPLAY MARKS FOR EVERY QUESTION
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="dispMarks"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    INCLUDE TIMER FOR QUESTIONS
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="includeTimer"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    NEGATIVE MARKING FOR AUTO-CORRECT
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="negativeAutoCorrect"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    SPECIFY NEGATIVE MARKS
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-input
                    class="input"
                    type="number"
                    placeholder="Specify Negative Marks"
                    v-model="negativeMarkValue"
                  />
                </b-col>
              </b-row>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3>Test-time Window</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    TEST OPEN DATE & TIME
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <datetime type="datetime" v-model="openTestdt"></datetime>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    TEST CLOSE DATE & TIME
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <datetime
                    class="input"
                    type="datetime"
                    v-model="closeTestdt"
                  ></datetime>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    TEST DURATION(Minutes)
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-input
                    class="input"
                    type="number"
                    placeholder="Enter Test Duration"
                    v-model="testDuration"
                  />
                </b-col>
              </b-row>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-4>System Setup</b-button>
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    ENABLE CAMERA
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="enableCamera"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    SET IMAGE CAPTURE TIMING-SLOT
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-input
                    class="input"
                    type="number"
                    placeholder="Image Capture Timing Slot"
                    v-model="imageCapture"
                  />
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    SET SCREEN CAPTURE TIMING-SLOT
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-input
                    class="input"
                    type="number"
                    placeholder="Screen Capture Timing Slot"
                    v-model="screenCapture"
                  />
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    INCLUDE TIME SENSITIVITY NOTIFICATIONS
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="includeTimeNotifics"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    SET AUTO-SAVE MODE
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="autoSave"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    INCLUDE NAVIGATION LOCK
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="navLock"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
              <b-row class="rowx" align-v="center">
                <b-col class="columnx" cols="6">
                  <b>
                    INCLUDE 'END TEST' BUTTON
                  </b>
                </b-col>
                <b-col class="columnx" cols="5">
                  <b-form-radio-group
                    v-model="includeEndTest"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-col>
              </b-row>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-card>
  </div>
</template>
<script>
// import { Datetime } from "vue-datetime";
export default {
  name: "TestCofiguration",

  data() {
    return {
      text: "hbedchsndjcnjsdn",
      editablename: false,
      testOrg: "",
      testDesc: "",
      testInst: "",
      dispRealdt: false,
      dispDuration: false,
      dispCount: false,
      allowCandidateRemarks: false,
      quesPerScreen: null,
      topic: "The Topic Name(NON-EDITABLE)",
      sectionnum: "The No. of sections(NON-EDITABLE)",
      shuffle: false,
      dispReqStatus: false,
      displayReqFirst: false,
      dispMarks: false,
      includeTimer: false,
      negativeAutoCorrect: false,
      negativeMarkValue: null,
      openTestdt: null,
      closeTestdt: null,
      testDuration: null,
      includeTimeNotifics: false,
      autoSave: false,
      enableCamera: false,
      navLock: false,
      includeEndTest: false,
      imageCapture: 0,
      screenCapture: 0,
      options: [
        { item: true, name: "Yes" },
        { item: false, name: "No" },
      ],
    };
  },
  props: {
    testname: String,
  },
  methods: {
    back() {
      this.$router.push("test");
    },
  },
};
</script>
<style scoped>
.cardx {
  border-radius: 1px !important;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
  text-align: left;
}
.input {
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0px;
  margin-right: 2vh;
}
/* .rowx {
  height: max-content;
}
.columnx {
  border: 1px black solid;
  height: 100%;
} */

.form-control:focus,
.custom-select:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
