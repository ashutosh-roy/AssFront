<template>
    <div >
        <b-container class="bv-example-row">
        <b-row align-h="between">
    <b-col cols="4">    
        <button  class="btn btn-dark calender"> Calender View</button>
        </b-col>
    <b-col cols="4">
         <button  class="btn btn-dark bank"> Question Bank</button>
    </b-col>
  </b-row>
        </b-container>
<!-- 
        <a name="" id="" class="btn btn-dark calender" href="#" role="button">Calender View</a>
          <a name="" id="" class="btn btn-dark bank" href="#" role="button">Question Bank</a> -->
   <!-- <b-card
      class="card"
      style="height: 85vh;
  overflow: auto;"
    >
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
          <b-modal id="deleteConfirmation" hide-footer hide-header>
            <div>
              <span style="color:grey"
                >Are you sure you want to delete this test?</span
              >
              <br />
              <b-row align-h="end" class="mr-1">
                <b-button
                  class="deleteModalbtn"
                  variant="light"
                  @click="delTest()"
                  >Accept</b-button
                >
                <b-button
                  class="deleteModalbtn"
                  variant="light"
                  @click="$bvModal.hide('deleteConfirmation')"
                  >Cancel</b-button
                >
              </b-row>
            </div>
          </b-modal>
          <b-row align-h="end" v-if="testnum != 0">
            <b-button
              variant="outline"
              style="border:none"
              v-b-modal.testNameModal
              ><i class="fas fa-plus fa-2x"></i
            ></b-button>
          </b-row>

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
    </b-card> -->
    </div>
</template>


<script>
// import TestCard from "../components/testCard";
export default {
    name:'Topics',
      data() {
    return {
    //   testnum: 0,
    //   testnames: [],
    //   name: "",
    //   tobeDel: "",
    };
  },
//   components: {
//     TestCard,
//   },
//   methods: {
//     addtest() {
//       if (this.name != "") {
//         this.testnames.push(this.name);
//         this.testnum += 1;
//         this.$bvModal.hide("testNameModal");
//         this.name = "";
//       }
//     },
//     delTest() {
//       this.testnames = this.testnames.filter((name) => name != this.tobeDel);
//       this.testnum -= 1;
//       this.$bvModal.hide("deleteConfirmation");
//     },
//     deleteTest(deletetestname) {
//       this.tobeDel = deletetestname;
//       this.$bvModal.show("deleteConfirmation");
//     },
//     testConfigurations(testname) {
//       this.$router.replace({
//         name: "Test Configuration",
//         params: { testname },
//       });
//     },
//   },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  margin: 2vh;
  display: grid;
  align-items: center;
  box-shadow: 7px 10px 7px #c5c2c2;
  text-align: left;
}
.deleteModalbtn {
  padding-top: 0px;
  padding-bottom: 0px;

  margin-right: 1vh;
  box-shadow: 3px 3px 3px #c5c2c2;
}
  .calender{
      margin-top: 20px;
      border-radius: 10px;
      margin-right: 30px;
}
.bank{
    margin-top: 20px;
    border-radius: 10px;
    margin-left: 100px;
}

