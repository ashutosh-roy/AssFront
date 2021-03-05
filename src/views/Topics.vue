<template>
  <div>
    <b-container class="bv-example-row">
      <b-row align-h="between">
        <b-col cols="4">
          <button class="btn btn-dark calender">Calender View</button>
        </b-col>
        <b-col cols="4">
          <button class="btn btn-dark bank">Question Bank</button>
        </b-col>
      </b-row>
    </b-container>

    <b-card class="card" style="height: 85vh; ">
      <!-- <b-modal id="deleteConfirmation" hide-footer hide-header>
        <div>
          <span style="color:grey"
            >Are you sure you want to delete this test?</span
          >
          <br />
          <b-row align-h="end" class="mr-1">
            <b-button class="deleteModalbtn" variant="light" @click="delTopic()">Accept</b-button>
            <b-button class="deleteModalbtn" variant="light"  @click="$bvModal.hide('deleteConfirmation')">Cancel</b-button>
          </b-row>
        </div>
      </b-modal> -->
      <b-row align-h="end" v-if="topicnum != 0">
        <b-button variant="outline" style="border:none" v-b-modal.topicNameModal
          ><i class="fas fa-plus fa-2x"></i
        ></b-button>
      </b-row>
      <div style="height:100%;width:100%; margin-top:15%" v-if="topicnum == 0">
        <b-row align-h="center" align-v="center">
          <b-button
            variant="outline"
            style="border:none; color:grey"
            v-b-modal.topicNameModal
            ><i class="fas fa-plus fa-7x"></i
          ></b-button>
        </b-row>
        <b-row align-h="center" align-v="center">
          <span style="color:grey">Click to start adding Topics</span>
        </b-row>
      </div>
      <b-modal id="topicNameModal" centered hide-footer>
        <div>
          <b-form-input
            autofocus
            v-model="name"
            placeholder="Enter Topic Name"
          ></b-form-input>
          <br />
          <b-row align-h="end" class="mr-1">
            <b-button variant="primary" @click="addtopic()">Add Topic</b-button>
          </b-row>
        </div>
      </b-modal>
      <div v-for="i in topicnum" :key="i">
        <TopicCard :topicname="topicnames[i - 1]" />
        <!-- v-on:delete-topic="deleteTopic" -->
      </div>
    </b-card>
  </div>
</template>

<script>
import TopicCard from "../components/TopicCard";
export default {
  name: "Topics",
  data() {
    return {
      topicnum: 1,
      topicnames: ["Sample Topic"],
      name: "",
      //   tobeDel: "",
    };
  },
  components: {
    TopicCard,
  },
  methods: {
    addtopic() {
      if (this.name != "") {
        this.topicnames.push(this.name);
        this.topicnum += 1;
        this.$bvModal.hide("topicNameModal");
        this.name = "";
      }
    },
    //   delTopic(){
    //       this.topicnames = this.topicnames.filter((name) => name != this.tobeDel);
    //       this.topicnum -= 1;
    //       this.$bvModal.hide("deleteConfirmation")
    //   },
    //   deleteTopic(deletetopicname){
    //       this.tobeDel = deletetopicname;
    //       this.$bvModal.hide("deleteConfirmation");
    //   },
  },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  margin: 2vh;
  display: grid;
  box-shadow: 7px 10px 7px #c5c2c2;
  text-align: left;
}

.calender {
  margin-top: 20px;
  border-radius: 10px;
  margin-right: 30px;
}
.bank {
  margin-top: 20px;
  border-radius: 10px;
  margin-left: 100px;
}
</style>
