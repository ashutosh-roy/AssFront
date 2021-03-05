<template>
  <div>
    <b-card class="card">
      <b-container fluid>
        <b-row cols="10" style="width:100vw;">
          <b-col style="height: 14vh; width: 40px; overflow-x: auto;">
            <b-container
              fluid
              :style="cssVars"
              style="height: 10vh; margin-top: 0.5vw; border-radius: 10px; overflow: hidden; width: var(--seclen);"
            >
              <div>
                <div
                  v-for="sec in sections"
                  :key="sec"
                  style="border-right: 1px solid black; height: 15vh; margin: 1vh; width: 12vw;  float:left;"
                >
                  <div style="font-size: 2vh;">{{ sec.name }}</div>
                  <div>15 Questions</div>
                  <div
                    style="  white-space: nowrap;   width: 11vw; overflow: hidden; text-overflow: ellipsis; "
                  >
                    MCQ, Long, Short, Comprehension
                  </div>
                </div>
              </div>
            </b-container>
          </b-col>
          <!-- <b-col
        :lg="QPBuilder"
        style="background: #00ff00; height: 86vh;"
        @click="toogleDataBank"
        >Question Paper Panel</b-col
      >
      <--
      <b-col
        :lg="DBWidth"
        v-if="DBWidth == '6'"
        style="background: #0000ff;"
        @click="addSection"
        >Data Bank Panel</b-col
      > -->

          <b-col cols="2">
            <div class="button-1">
              <button
                class="button-2"
                type="button"
                @click="$bvModal.show('sectionNameModal')"
              >
                <i class="fas fa-plus fa-3x"></i>
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-modal id="sectionNameModal" centered hide-footer>
        <div>
          <b-form-input
            autofocus
            v-model="name"
            placeholder="Enter Section Name"
          ></b-form-input>
          <br />
          <b-row align-h="end" class="mr-1">
            <b-button variant="primary" @click="addSection(name)"
              >Add Section</b-button
            >
          </b-row>
        </div>
      </b-modal>
    </b-card>
    <div v-if="sections.length != 0">
      <b-row>
        <b-col style="overflow-x:auto;height: 76vh;">
          <Home v-on:show-db="showdb = true" v-on:noshow-db="showdb = false" />
        </b-col>
        <!-- @click="toogleDataBank" -->
        <b-col cols="5" v-if="showdb">
          <Databank />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Databank from "./Databank.vue";

export default {
  name: "QPBuilder",
  components: {
    Home,
    Databank
  },
  data() {
    return {
      DBWidth: "6",
      QPWidth: "6",
      sectionLength: "100vw",
      sections: [],
      showdb: false,
      name: ""
    };
  },
  computed: {
    cssVars() {
      return {
        "--seclen": this.sectionLength + "vh"
      };
    }
  },

  methods: {
    toogleDataBank: function() {
      if (this.DBWidth == "6") {
        this.DBWidth = "0";
        this.QPWidth = "12";
      } else {
        this.DBWidth = "6";
        this.QPWidth = "6";
      }
    },
    addSection(secName) {
      this.sections.push({ name: secName });
      if ((this.sections.length + 1) * 25 > 170) {
        this.sectionLength = (this.sections.length + 1) * 25;
      }
      this.$bvModal.hide("sectionNameModal");
      this.name = "";
    }
    // displayScreen:function() {

    // }
  }
};
</script>

<style>
.card {
  border-radius: 12px;
  box-shadow: 2px 2px 2px #c5c2c2;
  margin: 2vh;
}

.button-1 {
  text-align: right;
  position: static;
  margin-right: 10px;
  padding: 15px 30px;
}

.button-2 {
  border: none;
  color: gray;
  font-size: 200;
  height: 70px;
  width: 90px;
  background: transparent;
  padding: 0px;
  border-left: 1px solid gray;
}
.card-2 {
  height: 75vh;
  display: grid;
  align-items: center;
  padding: 150px;
  background: transparent;
}

.button-3 {
  border: none;
  color: gray;
  background: transparent;

  font-size: 14px;
}
</style>
