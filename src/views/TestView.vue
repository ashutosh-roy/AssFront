<template lang="html">
  <div>
    <vs-row vs-justify="center">
      <vs-col
        vs-type="container"
        vs-justify="center"
        vs-align="center"
        vs-lg="10"
        vs-xs="12"
        vs-sm="12"
      >
      <h2 style="padding:10px;">Test Settings</h2>
        <vs-collapse accordion>

          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>General</h3>
            </div>
            <vs-row vs-justify="space-between">
              <vs-col
                vs-type="flex"
                vs-justify="flex-start"
                vs-align="flex-start"
                vs-offset="1"
                vs-w="12"
                style="padding-bottom:10px;"
              >
                <vs-input label-placeholder="Name" v-model="value1" width="100%" />
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="flex-start"
                vs-align="flex-start"
                vs-offset="1"
                vs-w="10"
              >
                <vue-editor placeholder="Description"></vue-editor>
              </vs-col>
            </vs-row>
          </vs-collapse-item>

          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Timing</h3>
            </div>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                Start Time  
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <datetime v-model="date" type="datetime"></datetime>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                End Time  
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <datetime v-model="date" class="calenderbox" type="datetime"></datetime>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                Time Limit  
              </vs-col>
              <vs-col
              
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <vs-input v-model="value1" style="padding-right:5px; width:135px"/>
                <!-- <vs-dropdown>
                  <vs-button type="filled" label="Name" icon="expand_more"></vs-button>
                  <vs-dropdown-menu>  
                    <vs-dropdown-item v-for="item in timeline" :key="item">
                      {{item.time}}
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown> -->
                <ejs-dropdownlist id='dropdownlist' popupHeight="200px" popupWidth="100%" :dataSource='timeline' placeholder='hours'></ejs-dropdownlist>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-align="center"
                vs-offset=""
                style="padding-bottom:10px;"
              >
              </vs-col>
            </vs-row>
          </vs-collapse-item>

          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Grade</h3>
            </div>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                Grade Category  
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <ejs-dropdownlist id='dropdownlist' popupHeight="200px" popupWidth="100%" :dataSource='gradeCategory' placeholder='Percentage'></ejs-dropdownlist>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                Grade To Pass 
              </vs-col>
              <vs-col
              
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <vs-input v-model="value1" style="padding-right:5px; width:135px"/>
                <!-- <vs-dropdown>
                  <vs-button type="filled" label="Name" icon="expand_more"></vs-button>
                  <vs-dropdown-menu>  
                    <vs-dropdown-item v-for="item in timeline" :key="item">
                      {{item.time}}
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown> -->
                <ejs-dropdownlist id='dropdownlist' popupHeight="200px" popupWidth="100%" :dataSource='timeline' placeholder='hours'></ejs-dropdownlist>
              </vs-col>
            </vs-row>
             <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                Attempts Allowed  
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <ejs-dropdownlist id='dropdownlist' popupHeight="200px" popupWidth="100%" :dataSource='AttemptsAllowed' placeholder='Unlimited'></ejs-dropdownlist>
              </vs-col>
            </vs-row>
             <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                Grading Method  
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <ejs-dropdownlist id='dropdownlist' popupHeight="200px" popupWidth="100%" :dataSource='GradingMethod' placeholder='Highest Grade'></ejs-dropdownlist>
              </vs-col>
            </vs-row>
          </vs-collapse-item>

          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Layout</h3>
            </div>
            <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                New Page  
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <ejs-dropdownlist id='dropdownlist' popupHeight="200px" popupWidth="100%" :dataSource='NewPage' placeholder='Every Question'></ejs-dropdownlist>
              </vs-col>
            </vs-row>
          </vs-collapse-item>

          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Question Behaviour</h3>
            </div>

             <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                Shuffle With Questions  
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <ejs-dropdownlist id='dropdownlist' popupHeight="200px" popupWidth="100%" :dataSource='YesNo' placeholder='Yes'></ejs-dropdownlist>
              </vs-col>
            </vs-row>
             <vs-row>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                How Questions Behave  
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="left" vs-align="center"
              >
                <ejs-dropdownlist id='dropdownlist' popupHeight="200px" popupWidth="100%" :dataSource='HowQuestionsBehave' placeholder='Every Question'></ejs-dropdownlist>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Review Options</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Appearence</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Safe Exam Browser</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Extra Restrictions on attempts</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Overall feedback</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Common Module Settings</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Restrict Access</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Activity Completion</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Tags</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Competencies</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
        </vs-collapse>
      </vs-col>
    </vs-row>
  </div>
</template>

<style lang="stylus">
.con-radios-example
  display flex
  justify-content flex-start
  flex-direction column
  align-items flex-start
  padding-bottom 5px
  .con-vs-radio
    margin 5px
.divisions{
  margin-bottom: 12px;
  border-left: 5px solid blue;
  border-radius: 5px;
  padding-left: 20px;
  padding-top: 3px;
  padding-bottom: 3px;
  box-shadow: 5px 5px 5px 1px #ccc;
}
.vdatetime-input{
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 25px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
}
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
<script>
import { VueEditor } from "vue2-editor";
import { Datetime } from "vue-datetime";
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
export default {
  name: "TestView",
  components: {
    VueEditor,
    datetime: Datetime,
  },
  data: function(){
    return {
      timeline: ["Month", "Week", "Hour", "Minute", "Second"],
      YesNo: ["Yes","No"],
      gradeCategory: ["percentage","CGPA","GPA"],
      HowQuestionsBehave: ["Deffered Feedback","Adaptive Mode","Adaptive Mode(No Penalties)","Deferred feedback with CBM","Immediate feedback","Immediate feedback with CBM","Interactive with multiple tries"],
      AttemptsAllowed: ["Unlimited","1","2","3","4","5","6","7","8","9","10"],
      GradingMethod: ["Highest Grade","Average Grade","First Attempt","Last Attempt"],
      NewPage : ["Every Question","Every 2 Questions","Every 5 Questions","Every 10 Questions","Every 12 Questions","Every 15 Questions","Every 20 Questions","Every 25 Questions","Every 50 Questions"]     
    }
  }
   
};
</script>
<style scoped>
.home {
  margin: 20px;
}
</style>
