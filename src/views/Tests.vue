<template>
  <div>
    <b-card
      class="card"
      style="height: 95vh;
  overflow: auto;"
    >
      <b-row align-h="end" v-if="testnum != 0">
        <b-button variant="outline" style="border:none" v-b-modal.testNameModal
          ><i class="fas fa-plus fa-2x"></i
        ></b-button>
      </b-row>
      <div style="height:100%;width:100%;" v-if="testnum == 0">
        <b-row align-h="center" align-v="center">
          <b-button
            variant="outline"
            style="border:none; color:grey"
            v-b-modal.testNameModal
            ><i class="fas fa-plus fa-7x"></i
          ></b-button>
        </b-row>
        <b-row align-h="center" align-v="center">
          <span style="color:grey">Click to start adding tests</span>
        </b-row>
      </div>
      <b-modal id="testNameModal" centered hide-footer>
        <div>
          <b-form-input
            autofocus
            v-model="name"
            placeholder="Enter Test Name"
          ></b-form-input>
          <br />
          <b-row align-h="end" class="mr-1">
            <b-button variant="primary" @click="addtest()">Add Test</b-button>
          </b-row>
        </div>
      </b-modal>

      <div v-for="i in testnum" :key="i">
        <TestCard
          :testname="testnames[i - 1]"
          v-on:delete-test="deleteTest"
          v-on:configurations="testConfigurations"
        />
      </div>
    </b-card>
  </div>
</template>
<script>
import TestCard from "../components/testCard";
export default {
  name: "TestView",
  data() {
    return {
      testnum: 0,
      testnames: [],
      name: ""
    };
  },
  components: {
    TestCard
  },
  methods: {
    addtest() {
      if (this.name != "") {
        this.testnames.push(this.name);
        this.testnum += 1;
        this.$bvModal.hide("testNameModal");
        this.name = "";
      }
    },
    deleteTest(deletetestname) {
      this.testnames = this.testnames.filter(name => name != deletetestname);
      this.testnum -= 1;
    },
    testConfigurations(testname) {
      this.$router.replace({
        name: "Test Configuration",
        params: { testname }
      });
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
</style>
