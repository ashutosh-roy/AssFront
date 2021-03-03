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
            <b-col>
              MCQ
            </b-col>
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
        <b-card-title style="float:left"
          >Multiple Choice Question(MCQ)</b-card-title
        >
        <template #header>
          <div>
            MCQ
            <b-row align-h="end">
              <b-button
                variant="outline"
                @click="$emit('delete-entry', entry.question)"
                style="border:none"
                ><i class="fas fa-trash"></i
              ></b-button>
            </b-row>
          </div>
        </template>
        <br />
        <br />
        <b-card-text style="float:left;margin-left:30px">Question</b-card-text>
        <b-row align-h="end">
          <b-button
            variant="outline"
            @click="$emit('delete-entry', entry.question)"
            style="border:none"
            ><i class="fas fa-trash"></i
          ></b-button>
        </b-row>
        <br />

        <div>
          <b-row align-h="start">
            <b-card-text>
              {{ entry.question }}
            </b-card-text>
          </b-row>
        </div>

        <br />
        <br />

        <b-card-text style="float:left;margin-left:30px">Options</b-card-text>
        <br />
        <br />

        <b-form-group>
          <!-- <b-form-radio-group
        id="radio-slots"
        v-model="selected1"
        :options="options1"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      > -->
          <div class="options">
            <b-row>
              <b-col style="text-align:left;" cols="6">
                <b-form-radio disabled>
                  {{ entry.options[0] }}
                </b-form-radio>
              </b-col>

              <b-col style="text-align:left;" cols="6">
                <b-form-radio disabled>
                  {{ entry.options[1] }}
                </b-form-radio>
              </b-col>
            </b-row>
            <b-row>
              <b-col style="text-align:left;" cols="6">
                <b-form-radio disabled>
                  {{ entry.options[2] }}
                </b-form-radio>
              </b-col>
              <b-col style="text-align:left;" cols="6">
                <b-form-radio disabled>
                  {{ entry.options[3] }}
                </b-form-radio>
              </b-col>
            </b-row>
            <!-- Radios in the default slot will appear after any option generated radios -->
          </div>
          <!-- </b-form-radio-group> -->
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
  name: "MCQCard",
  props: {
    data: Array
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
