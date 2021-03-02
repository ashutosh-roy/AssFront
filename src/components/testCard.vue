<template>
  <b-card class="card">
    <div>
      <b-row>
        <b-col>
          <span style="color:grey"> {{ testname }}</span>
        </b-col>

        <b-col>
          <b-row align-h="end">
            <b-button variant="outline" style="border:none" @click="config()"
              ><i class="fas fa-cogs"></i
            ></b-button>
            <b-button
              variant="outline"
              style="border:none"
              @click="$router.push('QPBuilder')"
              ><i class="fas fa-edit"></i
            ></b-button>
            <b-button variant="outline" style="border:none" @click="del()"
              ><i class="fas fa-trash"></i
            ></b-button>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>
<script>
export default {
  name: "TestCard",
  props: {
    testname: String,
  },
  methods: {
    del() {
      this.$emit("delete-test", this.testname);
    },
    config() {
      this.$emit("configurations", this.testname);
    },
  },
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
