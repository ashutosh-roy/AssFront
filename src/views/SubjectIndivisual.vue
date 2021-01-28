<template>
  <div class="home">
    <vs-row vs-justify="center">
      <!--Test Groups Card-->
      <vs-col
        class="card"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-xs="12"
        vs-sm="0"
      >
        <vs-card>
          <div slot="header">
            <h3>
              Subjects
            </h3>
          </div>
          <div>
            <p style="font-size: 2rem;">5 Subjects</p>
            <vs-chip color="success">3 Active</vs-chip>
            <vs-chip color="danger">2 In-Active</vs-chip>
            <vs-chip color="primary">2 Public</vs-chip>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-start"> </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <!--Tests Card-->
      <vs-col
        class="card"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-xs="12"
        vs-sm="12"
      >
        <vs-card>
          <div slot="header">
            <h3>
              Tests
            </h3>
          </div>
          <div>
            <p style="font-size: 2rem;">17 Tests</p>
            <vs-chip color="success">4 Active</vs-chip>
            <vs-chip color="danger">1 In-Active</vs-chip>
            <vs-chip color="primary">2 Public</vs-chip>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-start"> </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <!--Candidates Card-->
      <vs-col
        class="card"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-xs="12"
        vs-sm="12"
      >
        <vs-card>
          <div slot="header">
            <h3>
              Candidates
            </h3>
          </div>
          <div>
            <p style="font-size: 2rem;">500 Total</p>
            <vs-chip color="success">360 Active</vs-chip>
            <vs-chip color="danger">140 In-Active</vs-chip>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-start"> </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <!--Upcoming Tests Card-->
      <vs-col
        class="card"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-xs="12"
        vs-sm="12"
      >
        <vs-card>
          <div slot="header">
            <h3>
              Upcoming Tests
            </h3>
          </div>
          <div>
            <p style="font-size: 2rem;">7 This Week</p>
            <vs-chip color="success">1 Today</vs-chip>
            <vs-chip color="warning">2 Tommorow</vs-chip>
            <vs-chip color="primary">4 Others</vs-chip>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-start"> </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <!--Evaluation Card-->
      <vs-col
        class="card"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-xs="12"
        vs-sm="12"
      >
        <vs-card>
          <div slot="header">
            <h3>
              Evaluation
            </h3>
          </div>
          <div>
            <p style="font-size: 2rem;">4 Tests</p>
            <vs-chip color="success">1 Running</vs-chip>
            <vs-chip color="danger">2 Un-Allocated</vs-chip>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-start"> </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>

    <vs-row vs-justify="center">
      <!--Tests Card-->
      <vs-col
        class="card"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="5"
        vs-xs="12"
        vs-sm="12"
      >
        <vs-card>
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
                  color="success"
                  icon="add"
                  size="small"
                ></vs-button>
                
                </vs-col>
            </vs-row>
          </div>
          <div>
            <div>
              <vs-table
                pagination
                v-model="selectedTest"
                @selected="handleSelected"
                max-items="6"
                search
                :data="tests"
              >
                <template slot="thead">
                  <vs-th sort-key="name">
                    Test Name
                  </vs-th>
                  <vs-th sort-key="type">
                    Type
                  </vs-th>
                  <vs-th sort-key="plannedDate">
                    Planned Date
                  </vs-th>
                  <vs-th sort-key="enabled">
                    Enabled
                  </vs-th>
                </template>

                <template slot-scope="{ data }">
                  <vs-tr
                    :data="tr"
                    :key="indextr"
                    v-for="(tr, indextr) in data"
                  >
                    <vs-td :data="data[indextr].name">
                      <strong>{{ data[indextr].name.toUpperCase() }}</strong>
                    </vs-td>

                    <vs-td :data="data[indextr].type">
                      <vs-chip
                        v-if="data[indextr].type === 'public'"
                        color="success"
                      >
                        {{ data[indextr].type }}
                      </vs-chip>

                      <vs-chip
                        v-if="data[indextr].type === 'private'"
                        color="warning"
                      >
                        {{ data[indextr].type }}
                      </vs-chip>
                    </vs-td>

                    <vs-td :data="data[indextr].plannedDate">
                      <strong>{{ data[indextr].plannedDate }}</strong>
                    </vs-td>

                    <vs-td :data="data[indextr].enabled">
                      <vs-chip v-if="data[indextr].enabled" color="success">
                        Enabled
                      </vs-chip>

                      <vs-chip
                        v-if="data[indextr].enabled == false"
                        color="danger"
                      >
                        Disabled
                      </vs-chip>

                      <vs-button
                        style="margin-left: 10px;"
                        size="small"
                        @click="goto(data[indextr].id)"
                        v-if="selectedTest == data[indextr].id"
                        :data="data[indextr].id"
                        radius
                        gradient-color-secondary="rgb(130, 207, 23)"
                        type="gradient"
                        icon="create"
                      ></vs-button>

                      <span> </span>
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-start"> </vs-row>
          </div>
        </vs-card>
      </vs-col>

      <!--Candidates Card-->
      <vs-col
        class="card"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="5"
        vs-xs="12"
        vs-sm="12"
      >
        <vs-card>
          <div slot="header">
            <h3>
              Candidates
            </h3>
          </div>
          <div>
            <div>
              <vs-table
                pagination
                stripe
                max-items="6"
                search
                :data="candidates"
              >
                <template slot="thead">
                  <vs-th sort-key="username">
                    Name
                  </vs-th>
                  <vs-th sort-key="email">
                    Email
                  </vs-th>
                  <vs-th sort-key="marks">
                    Marks
                  </vs-th>
                  <vs-th sort-key="status">
                    Status
                  </vs-th>
                </template>

                <template slot-scope="{ data }">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].username">
                      <strong>{{ data[indextr].name.toUpperCase() }}</strong>
                    </vs-td>

                    <vs-td :data="data[indextr].email">
                      {{ data[indextr].email.toLowerCase() }}
                    </vs-td>

                    <vs-td :data="data[indextr].marks">
                      <vs-chip
                        v-if="data[indextr].status === 'passed'"
                        color="success"
                      >
                        {{ data[indextr].marks }}
                      </vs-chip>

                      <vs-chip
                        v-if="data[indextr].status === 'failed'"
                        color="danger"
                      >
                        {{ data[indextr].marks }}
                      </vs-chip>

                      <vs-chip v-if="data[indextr].status === 'pending'">
                        {{ data[indextr].marks }}
                      </vs-chip>
                    </vs-td>

                    <vs-td :data="data[indextr].status">
                      <vs-chip
                        v-if="data[indextr].status === 'passed'"
                        color="success"
                      >
                        Passed
                      </vs-chip>

                      <vs-chip
                        v-if="data[indextr].status === 'failed'"
                        color="danger"
                      >
                        Failed
                      </vs-chip>

                      <vs-chip v-if="data[indextr].status === 'pending'">
                        Pending
                      </vs-chip>
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-start"> </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  name: "SubjectIndivisual",
  data: () => ({
    selectedTest: -1,
    candidates: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        marks: "5.4",
        status: "passed"
      },
      {
        id: 2,
        name: "Yash",
        username: "Antonette",
        email: "yash@simplify3x.com",
        marks: "3.2",
        status: "failed"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        marks: "9.3",
        status: "passed"
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        marks: "6.4",
        status: "passed"
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        marks: "6.4",
        status: "passed"
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        marks: "6.4",
        status: "passed"
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        marks: "6.4",
        status: "passed"
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        marks: "6.4",
        status: "passed"
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        marks: "6.4",
        status: "passed"
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        marks: "6.4",
        status: "passed"
      }
    ],
    tests: [
      {
        id: 1,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: true
      },
      {
        id: 2,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: false
      },
      {
        id: 3,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: false
      },
      {
        id: 4,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: false
      },
      {
        id: 5,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: false
      },
      {
        id: 6,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: false
      },
      {
        id: 7,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: false
      },
      {
        id: 8,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: false
      },
      {
        id: 9,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: false
      },
      {
        id: 10,
        name: "Leanne Graham",
        type: "public",
        plannedDate: "2020-03-02",
        enabled: false
      }
    ]
  }),
  methods: {
    handleSelected: function(tr) {
      this.$vs.notify({
        title: `Selected ${tr.id}`,
        text: `Email: ${tr.name}`
      });
      this.selectedTest = tr.id;
    },
    goto: function(id) {
      window.location.href = window.location.href + "/" + id;
    }
  }
};
</script>
<style scoped>
.home {
  margin: 20px;
}
.card {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
}
.cardbutton {
  margin-left: 5px;
}
</style>
