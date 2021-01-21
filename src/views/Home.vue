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
              Test Groups
            </h3>
          </div>
          <div>
            <p style="font-size: 2rem;">300 Groups</p>
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
        <ChartElement title="Candidates" id="1"/>
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
        <ChartElement title="Sony" id="2" />
      </vs-col>
    </vs-row>
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
      tdata: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info"
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz"
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info"
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org"
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io"
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com"
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com"
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net"
      }
    ]
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
