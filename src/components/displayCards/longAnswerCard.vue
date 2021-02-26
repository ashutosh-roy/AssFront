<template>
  <div>
      <b-card class="card" sub-title="Short Questions" v-for="entry in data" :key="entry.question">
    <span style="color:grey" class="ml-3">Question</span>
    <br />
    <span class="ml-5">
      {{entry.question}}
    </span>

    <b-card-text>
      
        <div>
            <b-row align-h="end">
              <b-form-checkbox
                v-model="entry.autoCorrection"
                class="switch"
                name="check-button"
                switch
              >
                Auto Correction
              </b-form-checkbox>

              <b-form-checkbox
                v-model="entry.required"
                class="switch"
                name="check-button"
                switch
              >
                Required
              </b-form-checkbox>
            </b-row>
          </div>
      
    </b-card-text>
  </b-card>
  </div>
</template>
<script>
export default {
  name: "LongAnswerCard",
  props:{
      data:Array
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
