<template>
  <div>
    <b-card class="card" header-tag="header">
      <template #header>
        <div>
          Video
          <b-row align-h="end">
            <b-button
              variant="outline-secondary"
              @click="$emit('delete-form')"
              style="border:none"
              ><i class="fas fa-trash"></i
            ></b-button>
          </b-row>
        </div>
      </template>
      <b-card-text>
        <b-form inline>
          <div style="width:100%">
            <b-form-input
              class="input"
              v-model="text"
              autofocus
              placeholder="Topic"
            ></b-form-input>
            <b-form-select
              v-model="selected"
              :options="options"
              class="input"
            ></b-form-select>
            <br />
            <b-form-input
              class="input"
              v-model="text"
              placeholder="Question"
              style="width:100%;margin-top:1vh"
            >
              ></b-form-input
            >

            <b-row align-h="end">
              <b-form-checkbox
                v-model="checked"
                class="switch"
                name="check-button"
                switch
              >
                Auto Correction
              </b-form-checkbox>

              <b-form-checkbox
                v-model="checked"
                class="switch"
                name="check-button"
                switch
              >
                Required
              </b-form-checkbox>
              <b-dropdown split text="Add" class="m-2 p-0 " variant="primary">
                <b-dropdown-item @click="databank = !databank">
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="databank"
                    name="checkbox-1"
                  >
                    Add to Databank
                  </b-form-checkbox>
                </b-dropdown-item>
                <b-dropdown-item @click="publicly = !publicly">
                  <b-form-checkbox
                    id="checkbox-2"
                    v-model="publicly"
                    name="checkbox-2"
                  >
                    Add Publicly
                  </b-form-checkbox></b-dropdown-item
                >
              </b-dropdown>
            </b-row>
          </div>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Video",
  data() {
    return {
      selected: "null",
      options: [
        { value: null, text: "Difficulty", disabled: true },
        { value: "1", text: "Difficulty Level 1" },
        { value: "2", text: "Difficulty Level 2" },
        { value: "3", text: "Difficulty Level 3" },
        { value: "4", text: "Difficulty Level 4" },
        { value: "5", text: "Difficulty Level 5" },
      ],
      databank: false,
      publicly: false,
    };
  },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
  text-align: left;
}
.input {
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0px;
  width: fit-content;
  margin-right: 2vh;
}
.form-control:focus,
.custom-select:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.switch {
  margin-top: 2vh;
  margin-right: 2vh;
}
</style>
