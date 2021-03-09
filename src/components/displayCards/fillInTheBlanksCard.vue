<template>
  <div>
    <b-card
      class="card"
      v-for="entry in data"
      :key="entry.question"
      header-tag="header"
    >
      <template #header>
        <div>
          <b-row>
            <b-card-title style="float:left">Fill In The Blanks</b-card-title>

            <b-col>
              <b-row align-h="end">
                <b-button
                  variant="outline"
                  @click="$emit('edit-entry', entry.id)"
                  style="border:none"
                  ><i class="fas fa-edit"></i
                ></b-button>
                <b-button
                  variant="outline"
                  @click="$emit('delete-entry', entry.question)"
                  style="border:none"
                  ><i class="fas fa-trash"></i
                ></b-button>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </template>

      <b-card-text>
        <b-card-text style="float:left;margin-left:30px">Question</b-card-text>

        <br />
        <div>
          <b-row align-h="start">
            <b-card-text>
              {{ entry.question }}
            </b-card-text>
          </b-row>
        </div>

        <br />

        <b-card-text style="float:left;margin-left:30px">Answers</b-card-text>
        <br />

        <b-form-group>
          <b-row>
            <div
              class="options"
              v-for="option in entry.answerKey"
              :key="option"
            >
              <b-col style="text-align:left;" cols="6">
                <b-form-radio disabled>
                  {{ option }}
                </b-form-radio>
              </b-col>
            </div>
          </b-row>
        </b-form-group>

        <div>
          <b-row align-h="end">
            <b-form-checkbox
              v-model="entry.autoCorrection"
              class="switch"
              name="check-button"
              switch
              disabled
            >
              Auto Correction
            </b-form-checkbox>

            <b-form-checkbox
              v-model="entry.required"
              class="switch"
              name="check-button"
              switch
              disabled
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
  name: "FillInTheBlanksCard",
  props: {
    data: Array
  },
  created: function() {
    console.log(this.data);
  }
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
}
.input {
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0px;
  outline: none;
  width: fit-content;
  margin-right: 2vh;
  outline: 0px;
  background-color: transparent;
}
.input::after {
  border: none;
  outline: none;
  outline-width: 0px;
}
.switch {
  margin-top: 2vh;
  margin-right: 2vh;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.custom-select:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.base {
  width: 100%;
}
.sss {
  border-top: none;
  border-right: none;
  border-left: none;
}
.btnn {
  border: none;
}
.btts {
  border: none;
  color: blue;
}

.bottom-button {
  right: 0;
}
.add-btn {
  color: green;
}

.options {
  margin-left: 20px;
}
</style>
