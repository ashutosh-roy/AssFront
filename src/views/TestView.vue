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
                <vs-input
                  label-placeholder="Name"
                  v-model="value1"
                  width="100%"
                />
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
                vs-justify="center"
                vs-align="center"
              >
                <b>Start Time</b>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="center"
                vs-align="center"
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
                vs-justify="center"
                vs-align="center"
              >
                <b>End Time</b>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="center"
                vs-align="center"
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
                vs-justify="center"
                vs-align="center"
              >
                <b>Time Limit</b>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-offset="1"
                vs-w="2"
                style="padding-bottom:10px; font-size:15px;"
                vs-justify="center"
                vs-align="center"
              >
                <vs-input
                  label-placeholder="Name"
                  v-model="value1"
                  style="height:45px; width:140px"
                />
                <vs-dropdown>
                  <vs-button
                    type="filled"
                    label="Name"
                    icon="expand_more"
                  ></vs-button>
                  <vs-dropdown-menu>
                    <vs-dropdown-item v-for="item in timeline" :key="item">
                      {{ item.time }}
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
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

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Layout</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item class="divisions">
            <div slot="header">
              <h3>Question Behaviour</h3>
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
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
</style>
<script>
import { VueEditor } from "vue2-editor";
import { Datetime } from "vue-datetime";
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";

export default {
  name: "TestView",
  components: {
    VueEditor,
    datetime: Datetime
  },
  data: function() {
    return {
      timeline: [
        { time: "Month" },
        { time: "Week" },
        { time: "Hour" },
        { time: "Minute" },
        { time: "Second" }
      ]
    };
  }
};
</script>
<style scoped>
.home {
  margin: 20px;
}
</style>
