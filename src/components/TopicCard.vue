<template>
  <b-card class="card" @click="$router.push('test')">
    <div>
      <b-row>
        <b-col>
          <span style="color:grey"> {{ topicname }}</span>
        </b-col>

        <b-col>
          <b-row align-h="end">
            <!-- <b-button variant="outline" style="border:none" @click="config()"
              ><i class="fas fa-cogs"></i
            ></b-button> -->
            <b-button variant="outline" style="border:none"
              ><i class="fas fa-ellipsis-v"></i>
            </b-button>
            <!-- <b-button variant="outline" style="border:none" @click="del()"
              ><i class="fas fa-trash"></i
            ></b-button> -->
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "TopicCard",
  props: {
    topicname: String
  }
  // methods: {
  //     del() {
  //     this.$emit("delete-topic", this.topicname);
  //     },
  // },
};
</script>

<style scoped>
.card {
  border-radius: 0px !important;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
  text-align: left;
}
</style>
