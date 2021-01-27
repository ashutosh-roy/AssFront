<template>
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
        <h1 style="padding: 25px; text-align: center">
          SUBJECTS
          <vs-button
            color="primary"
            @click="popupActive = true"
            type="gradient"
            icon="add"
            >SUBJECT</vs-button
          >
        </h1>
      </vs-col>
      <vs-col
        vs-type="container"
        vs-justify="center"
        vs-align="center"
        vs-lg="6"
        vs-xs="12"
        vs-sm="12"
      >
      </vs-col>

      <vs-col
        vs-type="container"
        vs-justify="center"
        vs-align="center"
        vs-lg="10"
        vs-xs="12"
        vs-sm="12"
      >
        <vs-collapse accordion>
          <vs-collapse-item
            class="shadow"
            v-for="item in subjects"
            :key="item.id"
            style="margin-bottom: 10px; border-left: 5px solid black; border-radius: 5px; padding-top: 5px; padding-bottom: 5px;"
          >
            <div slot="header">
              <span>{{ item.name }}</span>
            </div>

            <vs-row vs-justify="center">
              <!--Test Groups Card-->
              <vs-col
                style="margin-left: 5px; margin-right: 5px; margin-top: 10px;"
                class="card"
                type="flex"
                vs-justify="center"
                vs-align="center"
                vs-lg="3"
                vs-xs="12"
                vs-sm="12"
              >
                <vs-card style="height: 150px;">
                  <div slot="header">
                    <h3>
                      Tests
                    </h3>
                  </div>
                  <div>
                    <p style="font-size: 2rem;">
                      {{ item.data.tests.completed + item.data.tests.pending }}
                      Total
                    </p>
                    <vs-chip color="success"
                      >{{ item.data.tests.completed }} Completed</vs-chip
                    >
                    <vs-chip color="primary"
                      >{{ item.data.tests.pending }} Pending</vs-chip
                    >
                  </div>
                </vs-card>
              </vs-col>
              <!--Tests Card-->
              <vs-col
                style="margin-left: 5px; margin-right: 5px; margin-top: 10px;"
                class="card"
                type="flex"
                vs-justify="center"
                vs-align="center"
                vs-lg="3"
                vs-xs="12"
                vs-sm="12"
              >
                <vs-card style="height: 150px;">
                  <div slot="header">
                    <h3>
                      Candidates
                    </h3>
                  </div>
                  <div>
                    <p style="font-size: 2rem;">
                      {{
                        item.data.candidates.passed +
                          item.data.candidates.failed +
                          item.data.candidates.pending
                      }}
                      Total
                    </p>
                    <vs-chip color="success"
                      >{{ item.data.candidates.passed }} Passed</vs-chip
                    >
                    <vs-chip color="danger"
                      >{{ item.data.candidates.failed }} Failed</vs-chip
                    >
                    <vs-chip color="primary"
                      >{{ item.data.candidates.pending }} Pending</vs-chip
                    >
                  </div>
                </vs-card>
              </vs-col>
              <!--Candidates Card-->
              <vs-col
                style="margin-left: 5px; margin-right: 5px; margin-top: 10px;"
                class="card"
                type="flex"
                vs-justify="center"
                vs-align="center"
                vs-lg="3"
                vs-xs="12"
                vs-sm="12"
              >
                <vs-card style="height: 150px;">
                  <div slot="header">
                    <h3>
                      Faculty
                    </h3>
                  </div>
                  <div>
                    <p style="font-size: 2rem;">
                      {{
                        item.data.staff.proctor +
                          item.data.staff.evaluators +
                          item.data.staff.observers
                      }}
                      Total
                    </p>
                    <vs-chip color="success"
                      >{{ item.data.staff.proctor }} Proctors</vs-chip
                    >
                    <vs-chip color="danger"
                      >{{ item.data.staff.evaluators }} Evaluators</vs-chip
                    >
                    <vs-chip color="primary"
                      >{{ item.data.staff.observers }} Observers</vs-chip
                    >
                  </div>
                </vs-card>
              </vs-col>
            </vs-row>
            <div align="right">
              <vs-button type="gradient" @click="goto('subject/' + item.id)"
                >Manage</vs-button
              >
            </div>
          </vs-collapse-item>
        </vs-collapse>
      </vs-col>
    </vs-row>

    <vs-popup
      classContent="popup-example"
      title="Enter Subject Name to Add"
      :active.sync="popupActive"
    >
      <vs-input
        required
        style="width: 100%"
        label-placeholder="Subject Name"
        v-model="newSubject"
      />

      <vs-button
        color="primary"
        style="margin-top: 10px;"
        @click="addSubject"
        type="border"
        >Add Subject</vs-button
      >
    </vs-popup>
  </div>
</template>
<script>
export default {
  name: "Subject",
  data: () => ({
    popupActive: false,
    newSubject: "",

    subjects: [
      {
        id: 1,
        name: "English",
        data: {
          candidates: {
            passed: 4,
            failed: 2,
            pending: 2
          },
          tests: {
            completed: 3,
            pending: 2
          },
          staff: {
            proctor: 4,
            evaluators: 2,
            observers: 2
          }
        }
      },
      {
        id: 2,
        name: "Social Science",
        data: {
          candidates: {
            passed: 4,
            failed: 2,
            pending: 2
          },
          tests: {
            completed: 3,
            pending: 2
          },
          staff: {
            proctor: 4,
            evaluators: 2,
            observers: 2
          }
        }
      },
      {
        id: 3,
        name: "Mathematics",
        data: {
          candidates: {
            passed: 4,
            failed: 2,
            pending: 2
          },
          tests: {
            completed: 3,
            pending: 2
          },
          staff: {
            proctor: 4,
            evaluators: 2,
            observers: 2
          }
        }
      },
      {
        id: 4,
        name: "Science",
        data: {
          candidates: {
            passed: 4,
            failed: 2,
            pending: 2
          },
          tests: {
            completed: 3,
            pending: 2
          },
          staff: {
            proctor: 4,
            evaluators: 2,
            observers: 2
          }
        }
      },
      {
        id: 5,
        name: "Kannada",
        data: {
          candidates: {
            passed: 4,
            failed: 2,
            pending: 2
          },
          tests: {
            completed: 3,
            pending: 2
          },
          staff: {
            proctor: 4,
            evaluators: 2,
            observers: 2
          }
        }
      }
    ]
  }),
  methods: {
    goto: function(where) {
      if ("/" + where != this.$router.currentRoute.path) {
        this.$router.push("/" + where);
      }
    },

    addSubject: function() {
      console.log(this.subjects.length);
      this.subjects.push({
        id: this.subjects.length + 1,
        name: this.newSubject,
        data: {
          candidates: {
            passed: 0,
            failed: 0,
            pending: 0
          },
          tests: {
            completed: 0,
            pending: 0
          },
          staff: {
            proctor: 0,
            evaluators: 0,
            observers: 0
          }
        }
      });
      this.popupActive = false;
    }
  }
};
</script>
<style scoped>
.shadow {
  -moz-box-shadow: 5px 5px 5px 1px #ccc;
  -webkit-box-shadow: 5px 5px 5px 1px #ccc;
  box-shadow: 5px 5px 5px 1px #ccc;
}
</style>
