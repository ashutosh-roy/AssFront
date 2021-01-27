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
            <vs-row vs-justify="flex-start">
              <vs-button
                @click="
                  popupTestGroupsView = true;
                  popupTitle = 'Test Groups';
                "
                class="cardbutton"
                type="gradient"
                color="primary"
                icon="remove_red_eye"
              ></vs-button>
              <vs-button
                type="gradient"
                color="success"
                class="cardbutton"
                icon="add"
              ></vs-button>
            </vs-row>
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
            <vs-row vs-justify="flex-start">
              <vs-button
                class="cardbutton"
                type="gradient"
                color="primary"
                icon="remove_red_eye"
              ></vs-button>
              <vs-button
                type="gradient"
                color="success"
                class="cardbutton"
                icon="add"
              ></vs-button>
            </vs-row>
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
            <vs-row vs-justify="flex-start">
              <vs-button
                class="cardbutton"
                type="gradient"
                color="primary"
                icon="remove_red_eye"
              ></vs-button>
              <vs-button
                type="gradient"
                color="success"
                class="cardbutton"
                icon="add"
              ></vs-button>
            </vs-row>
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
            <vs-row vs-justify="flex-start">
              <vs-button
                class="cardbutton"
                type="gradient"
                color="primary"
                icon="remove_red_eye"
              ></vs-button>
              <vs-button
                type="gradient"
                color="success"
                class="cardbutton"
                icon="add"
              ></vs-button>
            </vs-row>
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
            <vs-row vs-justify="flex-start">
              <vs-button
                class="cardbutton"
                type="gradient"
                color="primary"
                icon="remove_red_eye"
              ></vs-button>
              <vs-button
                type="gradient"
                color="success"
                class="cardbutton"
                icon="add"
              ></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>

    <!-- section 3 -->
    <vs-row vs-justify="center" style="margin-top: 10px;">
      <vs-col
        class="card"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="5"
        vs-xs="12"
        vs-sm="12"
      >
        <ChartElement title="Candidates" id="1" type="line" />
      </vs-col>
      <vs-col
        class="card"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="5"
        vs-xs="12"
        vs-sm="12"
      >
        <ChartElement title="Sony" id="2" type="radar" />
      </vs-col>
    </vs-row>
    <vs-popup
      class="holamundo"
      :title="popupTitle"
      :active.sync="popupTestGroupsView"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </vs-popup>
  </div>
</template>

<script>
// @ is an alias to /src
import ChartElement from "../components/CustomElements/ChartElement.vue";
export default {
  name: "Home",
  components: {
    ChartElement
  },
  data() {
    return {
      //master popups controls
      popupTestGroupsView: false,
      popupTestGroupsAdd: false,
      popupTestView: false,
      popupTestAdd: false,
      popupCandidatesView: false,
      popupCandidatesAdd: false,
      popupUpComingTestView: false,
      popupUpComingTestAdd: false,
      popupEvaluationView: false,
      popupEvaluationAdd: false,
      // data variables control
      popupTitle: ""
    };
  }
};
</script>

<style type="scss" scoped>
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
